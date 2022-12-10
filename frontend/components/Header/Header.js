import Link from 'next/link';
import React,{useState} from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook, FaDiscord, FaTelegram, FaTwitter} from "react-icons/fa";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import MenuUnstyled from '@mui/base/MenuUnstyled';
import MenuItemUnstyled, {
  menuItemUnstyledClasses,
} from '@mui/base/MenuItemUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () =>  {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);
  const buttonRef = React.useRef(null);
  const menuActions = React.useRef(null);
  const preventReopen = React.useRef(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleButtonClick = (event) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }

    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleButtonMouseDown = () => {
    if (isOpen) {
      // Prevents the menu from reopening right after closing
      // when clicking the button.
      preventReopen.current = true;
    }
  };

  const handleButtonKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      if (event.key === 'ArrowUp') {
        menuActions.current?.highlightLastItem();
      }
    }
  };

  const close = () => {
    setAnchorEl(null);
    buttonRef.current.focus();
  };

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      close();
    };
  };

  const StyledMenuItem = styled(MenuItemUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 2px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${menuItemUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      background-color: '#0f1624';
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${menuItemUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${menuItemUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
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
  
  const Popper = styled(PopperUnstyled)`
  z-index: 1;
  `;
  
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 1px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#0f1624'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: "#fff"};
    box-shadow: 0px 4px 5px grey};
    `,
  );
  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

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
      <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        onMouseDown={handleButtonMouseDown}
        ref={buttonRef}
        aria-controls={isOpen ? 'simple-menu' : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
        color="inherit">
        <MenuIcon />
      </IconButton>
      <MenuUnstyled
        actions={menuActions}
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        slots={{ root: Popper, listbox: StyledListbox }}
        slotProps={{ listbox: { id: 'simple-menu' } }}
      >
        <StyledMenuItem onClick={createHandleMenuClick('Académie3.0')}>
        <Link href="#académie3" legacyBehavior>
          <NavLink>Académie3.0</NavLink>
        </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Organisation')}>
        <Link href="#organisation" legacyBehavior>
          <NavLink>Organisation</NavLink>
        </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Project')}>
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
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Contact')}>
        <Link href="#about" legacyBehavior>
          <NavLink>Contact</NavLink>
        </Link>
        </StyledMenuItem>
      </MenuUnstyled>
     </Box> 
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