import React from 'react';
import {Link} from 'react-router-dom';
function PInfo(props){
    const {formValues,onChange,isValid} = props;
    return(
        <div>
            <label>
                First Name
                <input type='text' name={'first_name'} onChange={onChange} value={formValues.first_name}></input>
            </label>
            <label>
                Last Name
                <input type='text' name={'last_name'} onChange={onChange} value={formValues.last_name}></input>
            </label>
            <label>
                birthdate
                <input type='date' name='birthdate' onChange={onChange} value={formValues.birthdate}></input>
            </label>
            <Link to=''>
                <button>Back</button>
            </Link>
            <Link to=''>
                <button disabled={!isValid}>Next</button>
            </Link>
        </div>
    );
}
export default PInfo;