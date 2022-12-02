import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

import { signup } from '../../redux/action/auth';
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
import Paper from '@mui/material/Paper';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';


// initial state 
const initialState = { firstName: '', lastName: '', email: '', telegram: '' };


const Hero = (props) => {

  const [form, setForm] = useState(initialState);
  
  const [user, setUser] = useState();

  const [isSignup, setIsSignup] = useState(true);
  
  const dispatch = useDispatch();

  // const [showPassword, setShowPassword] = useState(false);
  // const handleShowPassword = () => setShowPassword(!showPassword);

  // loading 
  const [loading, setLoading] = React.useState(false);

  //handle submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    if (isSignup) {
      console.log(setForm)
      dispatch(signup(form));

    } else {
      // dispatch(signin(form));
      // window.location.href = "https://www.near.university/";
     alert("Veuillez vous inscrire")
      }  
  };

  // handlechange
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // switch mode 
  // const switchMode = () => {
  //   setForm(initialState);
  //   setIsSignup((prevIsSignup) => !prevIsSignup);
  //   setShowPassword(false);
  // };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

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
        <Box
        component="form"
        noValidate
        sx={{mt: 2, width:500}}>
<Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <TextField
     autoComplete="prénom"
     name="Prénom"
     required
     fullWidth
     id="Prénom"
     label="Prénom"
         autoFocus
         color="info"
         focused
         handleChange={handleChange} 
        />
      </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          autoComplete="family-name"
          color="info"
          focused
          handleChange={handleChange} 
        />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            color="info"
            focused
            handleChange={handleChange} 
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            autoComplete="new-password"
            color="info"
            focused
            handleChange={handleChange} 
            type={showPassword ? 'text' : 'password'} 
            handleShowPassword={handleShowPassword}
          />
        </Grid>
          <Grid item xs={12}>
            <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="secondary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              
              <Grid container justifyContent="flex">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            </Grid>
      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={handleSubmit}
            >
            Accés certificat gratuit   
            </Button>
          
            </Box> 
            </Box>
            
      </RightSection> */}
      <RightSection>
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
              <Input name="lastName" label="Nom" handleChange={handleChange} half />
              <Input name="firstName" label="Prénom" handleChange={handleChange} autoFocus half />
            </>
            )}
            <Input name="email" label="Email" handleChange={handleChange} type="email"/>
            <Input name="telegram" label="Telegram" handleChange={handleChange} type="text"/>
            {/* <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} /> */}
            {/* { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> } */}
          </Grid>
          <br></br>
          {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
            }}
          />
        )} 
          {(!user?
          <Button type="submit" fullWidth variant="contained" color="primary" >
            Accés cours & certificat gratuit
          </Button>
        :
          <Alert severity="success" color="info">
            User already exist
          </Alert>
          )}
          {/* <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button> */}
        </form>
       </Box> 
        </RightSection>
    </Section>
    </div>
);
        }

export default Hero;