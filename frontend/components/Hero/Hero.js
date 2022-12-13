import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { signup, signin} from '../../redux/action/auth';
import { AUTH } from '../../redux/actionTypes/actionTypes';
import Input from '../Auth/Input';

// import styles
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Img} from './HeroStyles';

// import css material ui design 
import Box from '@mui/material/Box';



// initial state 
const initialState = { firstName: '', lastName: '', email: '', telegram: '' };

const Hero = (props) => {

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
    window.open("https://forms.gle/VkyUJuH6j7K2vHay9", "_blank");
  }

  //
  return (
  <div>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Communauté<br />
          Blockchain 
      </SectionTitle>
      <Img src={"/images/near_logo_wht.png"} />
      <SectionText>
         Notre objectif est d'éduquer les talents, les programmeurs et ceux désirant exploiter le Web 3.0 et l'écosystème NEAR pour devenir des développeurs blockchain de classe mondiale. 
     </SectionText>
      <Button onClick={handleClick}>Rejoignez Nous</Button>
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
       
      </RightSection>  */}
    </Section>
    </div>
);
        }

export default Hero;
