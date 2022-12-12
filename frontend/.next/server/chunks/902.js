"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 3695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ signUp),
/* harmony export */   "z": () => (/* binding */ signIn)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:5000"
});
API.interceptors.request.use((req)=>{
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
});
const signIn = (formData)=>API.post("/user/signin", formData);
const signUp = (formData)=>API.post("/user/signup", formData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7749);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__);





const Input = ({ name , handleChange , label , half , autoFocus , type , handleShowPassword  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        xs: 12,
        sm: half ? 6 : 12,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material___WEBPACK_IMPORTED_MODULE_2__.TextField, {
            name: name,
            onChange: handleChange,
            color: "info",
            sx: {
                input: {
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px"
                }
            },
            focused: true,
            //required
            fullWidth: true,
            label: label,
            autoFocus: autoFocus,
            type: type,
            variant: "standard"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 8803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Header/HeaderStyles.js


const Container = (external_styled_components_default()).div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  @media ${(props)=>props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
const Div1 = (external_styled_components_default()).div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props)=>props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
const Div2 = (external_styled_components_default()).div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props)=>props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
    display: none; 
  }
`;
const Div3 = (external_styled_components_default()).div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props)=>props.theme.breakpoints.sm} {
    grid-area: 1 / 4 / 2 / 6;
  }
`;
// Navigation Links
const NavLink = (external_styled_components_default()).a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
/// DropDown Contact
const ContactDropDown = (external_styled_components_default()).button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props)=>props.theme.breakpoints.md} {
    padding: 0;
  }
`;
const NavProductsIcon = external_styled_components_default()(io_.IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen  })=>isOpen ? "1" : ".75"};
  transform: ${({ isOpen  })=>isOpen ? "scaleY(-1)" : "scaleY(1)"};
  &:hover {
    opacity: 1;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;
// Social Icons 
const SocialIcons = (external_styled_components_default()).a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
   display: none;
  }
`;

;// CONCATENATED MODULE: ./components/Footer/FooterStyles.js

const FooterWrapper = (external_styled_components_default()).section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;
const LinkItem = (external_styled_components_default()).a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	&:hover {
		color: #fff;
		left: 6px;
	}
	@media ${(props)=>props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}
	@media ${(props)=>props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`;
const SocialIconsContainer = (external_styled_components_default()).div`
max-width: 1040px;
display: flex;
justify-content: space-between;
@media ${(props)=>props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}
@media ${(props)=>props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`;
const CompanyContainer = (external_styled_components_default()).div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	
	@media ${(props)=>props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}
	@media ${(props)=>props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`;
const Slogan = (external_styled_components_default()).p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
	@media ${(props)=>props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}
	@media ${(props)=>props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`;
const SocialContainer = (external_styled_components_default()).div`
	display: flex;
  align-items: center;
	@media ${(props)=>props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`;
const LinkList = (external_styled_components_default()).ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;
	@media ${(props)=>props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}
	@media ${(props)=>props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${(props)=>props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`;
const LinkColumn = (external_styled_components_default()).div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`;
const LinkTitle = (external_styled_components_default()).h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;
	@media ${(props)=>props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`;

;// CONCATENATED MODULE: ./components/Footer/Footer.js






const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkList, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkColumn, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkTitle, {
                                children: "Tel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "https://calendly.com/nasriamira88/15min",
                                target: "_blank",
                                children: "R\xe9servez votre appel avec nous"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkColumn, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkTitle, {
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "mailto:nasriamira88@gmail.com",
                                children: "contact@carthage3.com"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialIconsContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CompanyContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Slogan, {
                            children: "\xa9 Copyright CARTHAGE 3.0. All Rights Reserved"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://www.facebook.com/groups/789869052085442",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebook, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://www.linkedin.com/company/near-tunisia/",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillLinkedin, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://twitter.com/NearTunisia",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://discord.gg/bRwG8hEm",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaDiscord, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://t.me/nearhubtunisia",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTelegram, {
                                    size: "3rem"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/di"
var di_ = __webpack_require__(9872);
// EXTERNAL MODULE: external "@mui/base/MenuUnstyled"
var MenuUnstyled_ = __webpack_require__(9501);
var MenuUnstyled_default = /*#__PURE__*/__webpack_require__.n(MenuUnstyled_);
// EXTERNAL MODULE: external "@mui/base/MenuItemUnstyled"
var MenuItemUnstyled_ = __webpack_require__(360);
var MenuItemUnstyled_default = /*#__PURE__*/__webpack_require__.n(MenuItemUnstyled_);
// EXTERNAL MODULE: external "@mui/base/PopperUnstyled"
var PopperUnstyled_ = __webpack_require__(9395);
var PopperUnstyled_default = /*#__PURE__*/__webpack_require__.n(PopperUnstyled_);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
;// CONCATENATED MODULE: ./components/Header/Header.js
















const Header = ()=>{
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const isOpen = Boolean(anchorEl);
    const buttonRef = external_react_default().useRef(null);
    const menuActions = external_react_default().useRef(null);
    const preventReopen = external_react_default().useRef(false);
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const handleButtonClick = (event)=>{
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
    const handleButtonMouseDown = ()=>{
        if (isOpen) {
            // Prevents the menu from reopening right after closing
            // when clicking the button.
            preventReopen.current = true;
        }
    };
    const handleButtonKeyDown = (event)=>{
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setAnchorEl(event.currentTarget);
            if (event.key === "ArrowUp") {
                menuActions.current?.highlightLastItem();
            }
        }
    };
    const close = ()=>{
        setAnchorEl(null);
        buttonRef.current.focus();
    };
    const createHandleMenuClick = (menuItem)=>{
        return ()=>{
            console.log(`Clicked on ${menuItem}`);
            close();
        };
    };
    const StyledMenuItem = (0,system_.styled)((MenuItemUnstyled_default()))(({ theme  })=>`
    list-style: none;
    padding: 8px;
    border-radius: 2px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${MenuItemUnstyled_.menuItemUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
      background-color: '#0f1624';
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${MenuItemUnstyled_.menuItemUnstyledClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${MenuItemUnstyled_.menuItemUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
    `);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 250,
        color: "black",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
    };
    const Popper = (0,system_.styled)((PopperUnstyled_default()))`
  z-index: 1;
  `;
    const StyledListbox = (0,system_.styled)("ul")(({ theme  })=>`
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 1px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#0f1624"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: "#fff"};
    box-shadow: 0px 4px 5px grey};
    `);
    const blue = {
        100: "#DAECFF",
        200: "#99CCF3",
        400: "#3399FF",
        500: "#007FFF",
        600: "#0072E5",
        900: "#003A75"
    };
    const grey = {
        50: "#f6f8fa",
        100: "#eaeef2",
        200: "#d0d7de",
        300: "#afb8c1",
        400: "#8c959f",
        500: "#6e7781",
        600: "#57606a",
        700: "#424a53",
        800: "#32383f",
        900: "#24292f"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Div1, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(di_.DiCssdeck, {
                            size: "3rem"
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Carthage3.0"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Div2, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#acad\xe9mie3",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                children: "Acad\xe9mie3.0"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#organisation",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                children: "Organisation"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#project",
                                legacyBehavior: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                    onClick: handleOpen,
                                    children: "Projets3.0"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                                open: open,
                                onClose: handleClose,
                                "aria-labelledby": "modal-modal-title",
                                "aria-describedby": "modal-modal-description",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: style,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        id: "modal-modal-title",
                                        variant: "h6",
                                        component: "h2",
                                        children: "Bient\xf4t disponible"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#about",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                children: "Contact"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Div3, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 0,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "large",
                                type: "button",
                                onClick: handleButtonClick,
                                onKeyDown: handleButtonKeyDown,
                                onMouseDown: handleButtonMouseDown,
                                ref: buttonRef,
                                "aria-controls": isOpen ? "simple-menu" : undefined,
                                "aria-expanded": isOpen || undefined,
                                "aria-haspopup": "menu",
                                color: "inherit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuUnstyled_default()), {
                                actions: menuActions,
                                open: isOpen,
                                onClose: close,
                                anchorEl: anchorEl,
                                slots: {
                                    root: Popper,
                                    listbox: StyledListbox
                                },
                                slotProps: {
                                    listbox: {
                                        id: "simple-menu"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledMenuItem, {
                                        onClick: createHandleMenuClick("Acad\xe9mie3.0"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#acad\xe9mie3",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                                children: "Acad\xe9mie3.0"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledMenuItem, {
                                        onClick: createHandleMenuClick("Organisation"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#organisation",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                                children: "Organisation"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledMenuItem, {
                                        onClick: createHandleMenuClick("Project"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#project",
                                                legacyBehavior: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                                    onClick: handleOpen,
                                                    children: "Projets3.0"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                                                open: open,
                                                onClose: handleClose,
                                                "aria-labelledby": "modal-modal-title",
                                                "aria-describedby": "modal-modal-description",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                    sx: style,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        id: "modal-modal-title",
                                                        variant: "h6",
                                                        component: "h2",
                                                        children: "Bient\xf4t disponible"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledMenuItem, {
                                        onClick: createHandleMenuClick("Contact"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#about",
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                                children: "Contact"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://www.facebook.com/groups/789869052085442",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebook, {
                            size: "3rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://www.linkedin.com/company/near-tunisia/",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillLinkedin, {
                            size: "3rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://twitter.com/NearTunisia",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {
                            size: "3rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://discord.gg/bRwG8hEm",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaDiscord, {
                            size: "3rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://t.me/nearhubtunisia",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTelegram, {
                            size: "3rem"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./layout/LayoutStyles.js

const LayoutStyles_Container = (external_styled_components_default()).div`
max-width: 1280px;
width: 100%;
margin: auto;
`;

;// CONCATENATED MODULE: ./layout/Layout.js





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutStyles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};


/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ AUTH),
/* harmony export */   "N": () => (/* binding */ LOGOUT)
/* harmony export */ });
const AUTH = "AUTH";
const LOGOUT = "LOGOUT";


/***/ }),

/***/ 350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ signup),
/* harmony export */   "x": () => (/* binding */ signin)
/* harmony export */ });
/* harmony import */ var _actionTypes_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(706);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_index__WEBPACK_IMPORTED_MODULE_0__]);
_api_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const signin = (formData)=>async (dispatch)=>{
        try {
            const { data  } = await _api_index__WEBPACK_IMPORTED_MODULE_0__/* .signIn */ .z(formData);
            dispatch({
                type: _actionTypes_actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .AUTH */ .B,
                data
            });
            window.location.href = "https://www.near.university/learn/with-our-team";
        } catch (error) {
            console.log(error);
        }
    };
const signup = (formData)=>async (dispatch)=>{
        try {
            const { data  } = await _api_index__WEBPACK_IMPORTED_MODULE_0__/* .signUp */ .y(formData);
            dispatch({
                type: _actionTypes_actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .AUTH */ .B,
                data
            });
            console.log(formData);
        //window.location.href = "https://www.near.university/learn/with-our-team";
        } catch (error) {
            console.log(error);
        }
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ Section),
/* harmony export */   "Bn": () => (/* binding */ ButtonFront),
/* harmony export */   "NZ": () => (/* binding */ SectionTitle),
/* harmony export */   "dv": () => (/* binding */ SectionDivider),
/* harmony export */   "jp": () => (/* binding */ ButtonBack),
/* harmony export */   "r4": () => (/* binding */ SectionText)
/* harmony export */ });
/* unused harmony exports SectionSubText, SecondaryBtn, LinkContainer, LinkIconImg */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  display: ${(props)=>props.grid ? "grid" : "flex"};
  flex-direction: ${(props)=>props.row ? "row" : "column"};
  padding: ${(props)=>props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media ${(props)=>props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: ${(props)=>props.nopadding ? "0" : "16px 16px 0"} ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
const SectionTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2)`
  font-weight: 400;
  font-size: ${(props)=>props.main ? "65px" : "56px"};
  line-height: ${(props)=>props.main ? "72px" : "56px"};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props)=>props.main ? "58px 0 16px" : "0"};
  @media ${(props)=>props.theme.breakpoints.md}{
    font-size: ${(props)=>props.main ? "56px" : "48px"};
    line-height: ${(props)=>props.main ? "56px" : "48px"};
    margin-bottom: 12px;
    padding: ${(props)=>props.main ? "40px 0 12px" : "0"};
  }
  @media ${(props)=>props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props)=>props.main ? "28px" : "32px"};
    line-height: ${(props)=>props.main ? "32px" : "40px"};
    margin-bottom: 8px;
    padding: ${(props)=>props.main ? "16px 0 8px" : "0"};
    max-width: 100%;
  }
`;
const SectionText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media ${(props)=>props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
const SectionDivider = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props)=>props.colorAlt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
    margin: ${(props)=>props.divider ? "4rem 0" : ""};
  @media ${(props)=>props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
const SectionSubText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
@media ${(props)=>props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const SecondaryBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }
  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  @media ${(props)=>props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
const ButtonBack = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: ${({ alt  })=>alt ? "150px" : "262px"};
  height: ${({ alt  })=>alt ? "52px" : "64px"};
  border-radius: 5px;
  font-size: ${({ alt  })=>alt ? "20px" : "24px"};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt , form  })=>alt || form ? "0" : "0 0 80px"};
  color: #fff;
  background: ${({ alt  })=>alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled  })=>disabled ? ".5" : "1"};
  @media ${(props)=>props.theme.breakpoints.md} {
    width: ${({ alt  })=>alt ? "150px" : "184px"};
    height: ${({ alt  })=>alt ? "52px" : "48px"};
    font-size: ${({ alt  })=>alt ? "20px" : "16px"};
    margin-bottom: ${({ alt  })=>alt ? "0" : "64px"};
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt  })=>alt ? "0" : "32px"};
  }
`;
const ButtonFront = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  border-radius: 5px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt  })=>alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  opacity: ${({ disabled  })=>disabled ? ".5" : "1"};
  transition: .4s ease;
  font-size: ${({ alt  })=>alt ? "20px" : "24px"};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled  })=>disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none"};
  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: ${({ alt  })=>alt ? "20px" : "16px"};
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
const LinkContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-left: ${({ large  })=>large ? "24px" : "16px"};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props)=>props.theme.breakpoints.md} {
    margin-left: ${({ large  })=>large ? "16px" : "8px"};
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    margin-left: ${({ large  })=>large ? "0" : "8px"};
  }
`;
const LinkIconImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;  
  height: ${({ large  })=>large ? "32px" : "24px"};
  @media ${(props)=>props.theme.breakpoints.md} {
    height: ${({ nav  })=>nav ? "16px" : "24px"};
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    height: ${({ large  })=>large ? "32px" : "16px"};
  }
`;


/***/ })

};
;