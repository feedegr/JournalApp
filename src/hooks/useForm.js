import { useState } from 'react'

export const useForm = (initialState = {} ) => {
  
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }

    

    const handledInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
            
        });
        
    }
  
  
    return [ values, handledInputChange, reset ];
}
