import { TextField, makeStyles } from '@material-ui/core'
import { Button, Paper } from '@mui/material'

import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import { InputComponent, UseForm } from "../../../components"
import { initialOrderFormValues } from '../../../models'


/*interface Props {
    initialFormValues: initialOrderFormValues = {
        initialOrderFormValues.campo1 = "",
    };
}

function valuesInitializer({initialFormValues}: Props) {
    initialFormValues.campo1 = ""
    initialFormValues.campo2 = ""
    initialFormValues.campo3 = ""
    initialFormValues.campo4 = ""
    initialFormValues.campo5 = ""
    initialFormValues.campo6 = ""
    initialFormValues.campo7 = ""
    initialFormValues.campo8 = ""
    return initialFormValues;
}*/

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            with: '80%',
            margin: theme.spacing(1)
        }
    },
    paperContent: {
        padding: theme.spacing(3),
        margin: theme.spacing(5)
    }
}))

const initialFormValues = {
    campo1: "",
    campo2: "",
    campo3: "",
    campo4: "",
    campo5: "",
    campo6: "",
    campo7: "",
    campo8: "",
}


function OrdersForm() {


    const classes = useStyles();

    const {
        values,
        setValues,
        handleInputChange,
    } = UseForm({initialFormValues});

    const [errors, setErrors] = useState({});

    

    const validate = () => {
        let temp = {
            c1:"",
        }
        temp.c1 = values.campo1 ? "" : "This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }
    
    const handleSubmit = () => {
        if (validate()){
            window.alert("test")
        }
        
    }


    return (
        <Paper className={classes.paperContent}>
            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <InputComponent
                            input={{
                                name: "campo1",
                                label: "Campo Uno", 
                                value: values.campo1, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <InputComponent
                            input={{
                                name: "campo2",
                                label: "Campo Dos", 
                                value: values.campo2, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <InputComponent
                            input={{
                                name: "campo3",
                                label: "Campo Tres", 
                                value: values.campo3, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <InputComponent
                            input={{
                                name: "campo4",
                                label: "Campo Cuatro", 
                                value: values.campo4, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <InputComponent
                            input={{
                                name: "campo5",
                                label: "Campo Cinco", 
                                value: values.campo5, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <InputComponent
                            input={{
                                name: "campo6",
                                label: "Campo Seis", 
                                value: values.campo6, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <InputComponent
                            input={{
                                name: "campo7",
                                label: "Campo Siete", 
                                value: values.campo7, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <InputComponent
                            input={{
                                name: "campo8",
                                label: "Campo Ocho", 
                                value: values.campo8, 
                                onChange: handleInputChange
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" color="success" type="submit">
                            Submit
                        </Button>
                        <Button variant="outlined" color="error">
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default OrdersForm