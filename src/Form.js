import React, { useState } from 'react';
import {TextField,Button} from '@mui/material'
import { Stack } from '@mui/system';
// import {Link} from  'react-router-dom';
// import Card from './Card';
import './App.css'
const Form=()=> {
  const [name,setName]=useState("");
  const [email,setEmail] = useState("");
  const [num,setNum] = useState("");



//   const [formErrors,setFormErrors]=useState({});
//   const validate=(values)=>{
//     const errors={};
//     const reg=new RegExp("[0-9]")
//     const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

//     if(!values.username)
//     errors.username="Username is Required";
//     else if(values.username.length<5)
//     errors.username="Username must have minimum 5 characters";
//     else if(reg.test(values.username))
//     errors.username="Username must contain only alphabets";

//     if(!values.email)
//     errors.email="Email is Required";
    
//     if(!values.password)
//     errors.password="Password is Required";
//     else if(!preg.test(values.password))
//     errors.password="Format of Password is not corrcet";
//     return errors;
// }




  const handleNameChange=(e)=>{
    getSelection.preventDefault(e);
    setName(e.target.value);

    // setFormValues({...formValues,[id]:value});
  }
  const handleMailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleNumChange=(e)=>{
    setNum(e.target.value);
  }
  
  const submitAll=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(num);
    return(
      <h1>name</h1>
    )
    // set.apply(Button.onclick(e));
    // <link rel ="stylesheet" onclick </link>
  }
  return (
    <div className='main'>
        <Stack>
          <form onSubmit={submitAll}>
            <TextField required onChange={handleNameChange} sx={{width:250,m:3}} id="name" label="Name" variant="outlined" />
            <TextField required onChange={handleMailChange} sx={{width:250,m:3}} id="mail" label="Email" variant="outlined" />
            <TextField required onChange={handleNumChange} sx={{width:250,m:3}} id="number" label="Password" variant="outlined" />
            
            <Button type='submit' sx={{width:250, m:3}} variant="contained">Submit</Button>
          </form>
        </Stack>
    </div>
  )
}

export default Form