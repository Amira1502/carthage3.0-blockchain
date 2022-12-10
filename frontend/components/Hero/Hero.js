import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { signup, signin} from '../../redux/action/auth';
import { AUTH } from '../../redux/actionTypes/actionTypes';
import Input from '../Auth/Input';
import decode from 'jwt-decode';

// import styles
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';

// import css material ui design 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';


import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Divider, FormGroup } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { useRouter } from 'next/router'
import Link from 'next/link';



// initial state 
const initialState = { firstName: '', lastName: '', email: '', telegram: '' };

const Hero = (props) => {
  const router = useRouter()

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  // const [showPassword, setShowPassword] = useState(false);
  // const handleShowPassword = () => setShowPassword(!showPassword);


  //handle submit 
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    // setShowPassword(false);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    if (isSignup) {
      dispatch(signup(form));
    } else {
      dispatch(signin(form));
    }
  };


  // handlechange
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // handleClick
  const handleClick = () => {
    window.location.href = "https://4ddkh2giv3l.typeform.com/to/fHvubhL1";
  }

  const onSubmit = data => console.log(data);


    /** Group the person input fields in a component */
    const PersonFields = () =>(
      <section>
        <h3>Personal information</h3>
        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
      </section>
    )
  
    /** Group the contact input fields in a component */
    const ContactFields = () => (
      <section>
        <h3>Contact</h3>
        <Input label="Email" required type="email" placeholder="exemple@exemple.com"/>
        <Input label="Phone" required type="tel" placeholder="(00) 0.0000-0000"/>
      </section>
    )
  
    /** Group the address input fields in a component */
    const AddressFields = () =>(
      <section>
        <h3>Address</h3>
        <Input  label="Street" required type="text" placeholder="Street name, avenue, etc..."/>
        <Input label="Number" required type="number" placeholder="000"/>
      </section>
    )
    
    const steps = [
      <PersonFields/>,
      <ContactFields/>,
      <AddressFields/>
   ];  
  //
  return (
  <div>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Communauté<br />
          Blockchain 
      </SectionTitle>
      <SectionText>
         Notre objectif est d'éduquer les talents, les programmeurs et ceux désirant exploiter le Web 3.0 et l'écosystème NEAR pour devenir des développeurs blockchain de classe mondiale. 
      </SectionText>
      <Button onClick={() => router.push('/Form')}>Rejoignez Nous</Button>
    </LeftSection>
      {/* <RightSection>
      <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        
          }}
        >
          
       <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="telegram" label="Telegram" handleChange={handleChange}/> 
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <br></br>
          <Button type="submit" fullWidth variant="contained" color="primary">
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
         
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
       </Box> 
      
  </RightSection> */}

    </Section>
    </div>
);
        }

export default Hero;