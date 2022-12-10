import React, { useState, useEffect } from 'react';
import Input from '../components/Auth/Input';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

// material ui 
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// redux
import { useDispatch } from 'react-redux';
import { signup } from '../redux/action/auth';

const initialState = { firstName: '', lastName: '', email: '', telegram: ''};


export default function Form() {

  const [form, setForm] = useState({initialState});
  const dispatch = useDispatch()

   const onSubmit = (e,data) => {
    e.preventDefault();
    console.log(data)
   }
  
  
  /** Group the person input fields in a component */
  const PersonFields = () =>(
    <section>
      <h2> Carthage3.0 vous souhaite le bienvenue</h2>
      <br></br>
      <h3>Quel est votre Nom?</h3>
      <br></br>
      <Input name="firstName" label="Nom & Prénom" onChange={handleChange}></Input>
    </section>
  )

  /** Group the contact input fields in a component */
  const EmailFields = () => (
    <section>
      <h3>Quel est votre Email ?</h3>
      <br></br>
      <Input label="Email" type="email" onChange={handleChange}/>
    </section>
  )

    
  /** Group the person input fields in a component */
  const TelegramField = () =>(
    <section>
      <h2> Carthage3.0 vous souhaite le bienvenue</h2>
      <br></br>
      <h3>Quel est votre Nom?</h3>
      <br></br>
      <Input name="telegram" label="Telegram" onChange={handleChange}></Input>
    </section>
  )

  const test = () => (
    <section>test</section>
  )

  /** Group the address input fields in a component */
  const interestFields = () =>(
    <section >
      <h3>Comment vous identifiez?</h3>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Fondateur - Créer une Startup" />
      <FormControlLabel control={<Checkbox />} label="Créatif - Artiste NFT, musicien, créateur de contenu," />
      <FormControlLabel control={<Checkbox />} label="Trader - Crypto et NFT Traders / Investisseurs" />
      <FormControlLabel control={<Checkbox />} label="Développeur- Développeur de logiciels, concepteur de produits" />
      <FormControlLabel control={<Checkbox />} label="Organisateur de communauté, spécialiste du marketing" />
      <FormCntrolLabel control={<Checkbox  />} label="Décideur politique - Gouvernement/Fonction publique,autres" />
      </FormGroup>
    </section>
  )

  const handleSubmit = async() => {
      console.log(setForm)
      dispatch(signup(form));
  }

  const steps = [
    <PersonFields/>,
    <EmailFields/>,
    <interestFields/>,
    <TelegramField/>,
  ]

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  // handleChange
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });  
  

  return (
    <div>
      <Layout>
        <Section>
      <main>
        <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>
              <form onSubmit={handleSubmit}>
              {steps[activeStep]}
              </form>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
      </main>
        </Section>
      </Layout>   
    </div>
  )
}