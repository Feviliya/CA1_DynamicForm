import { Uibutton,Numbox,Textbox,Bradio,DropdownM,DropdownC,DropdownEmp,DropdownEdu,DropdownR} from './mbutton';
import {Typography,Link} from '@mui/material';
import './App.css';
import {useState} from 'react';
const initialVal={
  name:'',
  gender:'male',
  marital:'',
  caste:'',
  religion:'',
  eduqual:'',
  emp:'false',
  income:0,
}
export function speak (message) {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}
speak('Hello, world')



const App=()=>{
  const [values,setValues]= useState(initialVal)
  
  return (   
    <form>
      <div className='main'>
        <div className='left'>  
          <Typography  variant='h4' >General Details</Typography>
          <br></br>
          <Textbox id="name" name="Fullname"></Textbox>
          <br></br>
          <Bradio id="gender" name='Gender' value={values.gender}></Bradio>
          <br></br>
          <DropdownM id="marital" val='MaritalStatus' value={values.marital} name='Marital Status'></DropdownM>
          <br></br>
          <DropdownC id="caste" val='CasteList' value={values.caste} name='Caste'></DropdownC>
          <br></br>
          <DropdownR id="religion" value={values.religion} name='Religion'></DropdownR>
        </div>
        <div className='right'>
          <img width='100px' src='schemeup.jpeg'></img>
          <DropdownEdu id="eduqual" value={values.eduqual} name='Highest Educational Qualification'></DropdownEdu>
          <DropdownEmp id="emp" value={values.emp} name='Employment Status'></DropdownEmp>
          <Numbox id="income" value={values.income} name='Annual Income' val='₹'></Numbox>
          <Uibutton id="submit" name='Submit'></Uibutton>
        </div>
      </div>
    </form>
  );
}

export default App;
