import React from 'react';
import Account from './formPages/Account';
import PInfo from './formPages/PInfo';
import Sleep from './formPages/Sleep';
import Errors from './Errors';
function Form(props){
    const{formValues, changeValues, submitForm, isValid, errors} = props;
    const onChange = (e)=>{
        const {name,value,type,checked} = e.target;
        const inputValue = type === 'checkbox'? checked:value.trim();
        changeValues(name,inputValue);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        submitForm();
    }
    return(
        <form onSubmit={onSubmit}>
            <Account formValues={formValues} onChange={onChange} isValid={isValid}/>
            <PInfo formValues={formValues} onChange={onChange} isValid={isValid} />
            <Sleep formValues={formValues} onChange={onChange} />
            <button type='submit' disabled={!isValid}>Done</button>
            <Errors errors={errors} isvalid={isValid} />
        </form>
    );
}
export default Form;
