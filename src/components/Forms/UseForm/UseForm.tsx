import React, {useState} from 'react'
import { initialOrderFormValues } from '../../../models';



interface Props {
    initialFormValues: initialOrderFormValues;
}


export default function UseForm({initialFormValues}: Props) {


    const [values, setValues] = useState(initialFormValues);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }



  return {
    values,
    setValues,
    handleInputChange,
  }
}


