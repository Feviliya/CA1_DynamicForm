import {Button,TextField,RadioGroup,FormLabel,FormControl,FormControlLabel,Radio,Autocomplete,InputAdornment} from '@mui/material';
// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
export const Uibutton=(props)=>{
    return(
        <Button type='submit' variant='contained'>{props.name}</Button>
    )
}
export const Textbox=(props)=>{
    return(
        <TextField  sx={{ width: 300 }} variant="outlined" label={props.name} required></TextField>
    )
}
export const Numbox=(props)=>{
    return(
        <TextField InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }} helperText="Enter the Annual Income" required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label={props.name}/>
    )
}
export const Bradio=(props)=>{
    return(
    <FormControl>
        <FormLabel required id="demo--group-label">{props.name}</FormLabel>
        <RadioGroup row>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        
    </FormControl>)
}
export const DropdownC=(props)=>{
    return(
        <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={CasteList}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label={props.name} />}
/>
    )
}

export const DropdownM=(props)=>{
    return(
        <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={MaritalStatus}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label={props.name} />}
/>
    )
}

export const DropdownEmp=(props)=>{
    return(
        <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={empStatus}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label={props.name} />}
/>
    )
}

export const DropdownEdu=(props)=>{
    return(
        <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={EduQual}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label={props.name} />}
/>
    )
}

export const DropdownR=(props)=>{
    return(
        <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={Religion}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label={props.name} />}
/>
    )
}

const MaritalStatus = [
    { label: 'Married'},
    { label: 'Unmarried'},
    { label: 'Divorced'}
  ]
  const CasteList = [
    { label: 'General'},
    { label: 'Other Backward Class (OBC)'},
    { label: 'Particularly Vulnerable Tribal Group (PVTG)'},
    { label: 'Scheduled Caste (SC)'},
    { label: 'Scheduled Tribe (ST)'}]
  const Religion=[
    { label: 'Chiristian'},
    { label: 'Hindu'},
    { label: 'Muslim'},
    { label: 'Sikh'},
    { label: 'Jain'}
  ]
  const empStatus=[
    { label: 'Employed'},
    { label: 'Unemployed'},
  ]
  const EduQual=[
    { label : 'Primary'},
    { label : 'Higher-Secondary'},
    { label : 'UnderGraduate'},
    { label : 'PostGraduate'},
    { label : 'Doctorate'}
  ]