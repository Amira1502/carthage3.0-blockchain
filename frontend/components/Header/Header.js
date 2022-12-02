import Link from 'next/link';
import React,{useState} from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook, FaDiscord, FaTelegram, FaTwitter} from "react-icons/fa";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';


const Header = () =>  {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    color: 'black',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<Container>
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <DiCssdeck size="3rem" /> <span>Carthage3.0</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#académie3" legacyBehavior>
          <NavLink>Académie3.0</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#organisation" legacyBehavior>
          <NavLink>Organisation</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#project" legacyBehavior>
          <NavLink onClick={handleOpen}>Projets3.0</NavLink>
        </Link>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Bientôt disponible
          </Typography>
        </Box>
      </Modal>
      </li>  
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>Contact</NavLink>
        </Link>
      </li>  
                        
    </Div2>
      <Div3>
      
          <SocialIcons href="https://www.facebook.com/groups/789869052085442" target="_blank">
            <FaFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/company/near-tunisia/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/NearTunisia" target="_blank">
            <FaTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discord.gg/bRwG8hEm" target="_blank">
            <FaDiscord size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://t.me/nearhubtunisia" target="_blank">
            <FaTelegram size="3rem" />
          </SocialIcons>
      </Div3>
    </Container>
);
}
  


export default Header;