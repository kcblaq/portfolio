import React, { useState } from 'react'
import styles from './styles.module.css'
import logo from '../../logom.png'
import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material"
import "./index.css"
import { Menu, Close } from '@mui/icons-material';


const activeStyle = {
  color: "#66FCF1",
  textDecoration: "none",
  borderBottom:"2px solid #66FCF1"
}

const nonActive = {
  color: "white",
  textDecoration: "none",


}


function Nav() {

  const [show, SetShow] = useState(false)

  const ShowMobileMenu = () => {
    alert('Hello world')
  }

  return (
    <div className={styles.container} style={{ justifyContent: show ? 'flex-end' : 'space-between' }}>
      {
        !show && <div >
          <NavLink to="/">
            <img src={logo} alt='My logo' />
          </NavLink>
        </div>
      }
      <div style={{color:'#FFF', position:'relative'}} className={styles.micon}>
        {show ? <Close onClick={() => SetShow(false)} /> : <Menu onClick={() => SetShow(true)} />}



        {
        show && <div className={styles.mnav}>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}} >
        <NavLink to="about" onClick={()=>SetShow(false)}> About</NavLink>
        <NavLink to="works" onClick={()=>SetShow(false)}> Works </NavLink>
        <NavLink to="blog" onClick={()=>SetShow(false)}> Blog </NavLink>
        </Box>
        
        <a href='https://docs.google.com/document/d/1Z6193OoqXEdf62ZMOeyQQQFOIHYq93QR/edit' download>

        <Button sx={{textTransform:'capitalize'}} variant="outlined" onClick={()=>SetShow(false)}> Download Resume</Button>

      </a>
       </div>
       }


      </div>
      <div className={styles.items} >
        <div>
          <NavLink
            to="about"
            className={styles.item}
            style={({ isActive }) =>
              isActive ? activeStyle : nonActive
            }
          >About</NavLink>
        </div>
        <div>
          <NavLink
            to="works"
            className={styles.item}
            style={({ isActive }) =>
              isActive ? activeStyle : nonActive
            }
          >Works</NavLink>
        </div>
        <div>
          <NavLink
            to="blog"
            className={styles.item}
            style={({ isActive }) =>
              isActive ? activeStyle : nonActive
            }
          >Blog</NavLink>
        </div>
      </div>
      <a className={styles.resume} href='https://docs.google.com/document/d/1Z6193OoqXEdf62ZMOeyQQQFOIHYq93QR/edit' download>

        <Button sx={{textTransform:'capitalize'}} variant='outlined'>Download Resume </Button>

      </a>

     

    </div>

  )
}

export default Nav