import './App.css';
import React, {useState,useEffect} from 'react';
import Form  from './components/Form';
import Header from './components/Header';
import Users from './components/Users';
import {schema} from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';
const initialValues = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  birthdate:'',
  bedtime:'',
  hoursOfSleep:'',
  terms:false
};
function App() {
  const [formValues, setFormValues] = useState(initialValues);
  const [isValid,setIsValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState({});
  const changeValues = (name,value) =>{
    yup.reach(schema,name)
    .validate(value)
    .then(()=>setErrors({...errors,[name]:''}))
    .catch((err)=>setErrors({...errors,[name]:err.errors[0]}));
    setFormValues({...formValues,[name]:value});
  };
  const submitForm = () =>{
    axios.post('https://reqres.in/api/users',formValues)
    .then((r)=>{
      setFormValues(initialValues);
      setUsers({...users,[r.data.id]:r.data});
    })
    .catch((e)=>console.log('error',e));
  };
  useEffect(()=>{
    schema.isValid(formValues)
    .then((valid)=>{
      setIsValid(valid);
    })
  },[formValues]);
  return(
    <div className="App">
      <Header />
      <main>
        <Form formValues={formValues} changeValues={changeValues} submitForm={submitForm} isValid={isValid} errors={errors}></Form>
        <Users users={users}/>
      </main>
    </div>
  );
}

export default App;
