import React from 'react';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
import './Form.css';


const Form = () => {
    return (
        <Grid container item justify="left" xs={10}>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Want more info? Join our email list!
            </Typography>
            </Grid>
            <Grid item xs={12}>
                <form className="Form" noValidate autoComplete="off">
                    <div className="Input">
                        <TextField id="name-input" label="Name" aria-label="name-input"
                            variant="outlined" color="secondary" 
                            defaultValue="Hello World"/>
                    </div>
                    <div className="Input">
                        <TextField id="name-input" label="Email" aria-label="email-input" 
                        variant="outlined"color="secondary"/>
                    </div>
                    <div>
                        <Button variant="contained" color="primary" aria-label="submit-button"
                            onClick={() => { alert('Submitted!') }}>
                            Submit
                        </Button>
                    </div>
                </form>
            </Grid>
        </Grid>
    )
};

export default Form;