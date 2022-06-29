import React from 'react'
import styles from "./styles.module.css"
import {Typography, Box, Button} from "@mui/material"
import Cardie from "./Card"
import reacticon from "../../assets/reacticon.svg"
import vueicon from "../../assets/vueicon.svg"
import tsicon from "../../assets/tsicon.svg"
import nexticon from "../../assets/nexticon.svg"
import jsicon from "../../assets/jsicon.svg"
import htmlicon from "../../assets/htmlicon.svg"
import html from "../../assets/html.svg"
import nodeicon from "../../assets/nodeicon.svg"
import expressicon from "../../assets/expressicon.svg"
import postgressicon from "../../assets/postgressicon.svg"
import mongodbicon from "../../assets/mongodbicon.svg"
import restapiicon from "../../assets/restapiicon.svg"
import grapgqlicon from "../../assets/grapgqlicon.svg"
import githubicon from "../../assets/githubicon.svg"
import uikiticon from "../../assets/uikiticon.svg"
import bootstrapicon from "../../assets/bootstrapicon.svg"
import styledcompicon from "../../assets/styledcompicon.svg"
import antdesignlogo from "../../assets/antdesignlogo.svg"
import muiicon from "../../assets/muiicon.svg"
import resticon from "../../assets/restapiicon.svg"

function Tools() {
  const myicons = [reacticon, vueicon,html, htmlicon]
  const backend = [nexticon,expressicon,nodeicon,tsicon,jsicon]
  const backendTitle = "Back-end Technologies"
  const tech = "Front-end Technologies"
  const databaseicons = [postgressicon,mongodbicon]
  const databaseTitle = "Database Technologies"
  const apiicons = [grapgqlicon, resticon]
  const apiTitle = "API"
  const versionicon = [githubicon]
  const versionTitle = "Version Control"
  const uilibicons = [antdesignlogo,uikiticon,bootstrapicon,styledcompicon,muiicon]
  const uiTitle = "UI Library"

  
  return (
    <div className={styles.tool__container}>
       <div className={styles.expertise}>
         
       <Typography variant='p' sx={{color:"#FCFBFB", fontWeight:500, fontSize:{xs:'12px',sm:'12px',md:'16px',lg:'28px'},textAlign:"center",color:'#FCFBFB'}}> Expertise</Typography>
        <Typography variant='h6' sx={{textAlign:"center",fontWeight:500, fontSize:{xs:'16px',sm:'16px',md:'24px',lg:'40px'}}}> Putting to work tools and technologies that yield great results.</Typography>
       </div>
        <div className={styles.cards}>
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={backendTitle} icons={backend} />
          <Cardie tech={databaseTitle} icons={databaseicons} />
          <Cardie tech={apiTitle} icons={apiicons} />
          <Cardie tech={versionTitle} icons={versionicon} />
          <Cardie tech={uiTitle} icons={uilibicons} />

        </div>
        <Box sx={{display:"flex",flexDirection:{xs:'column',gap:'10px', sm:'column',md:'row', lg:'row'} , justifyContent:"space-around", alignItems:"center", mt:'5%'}}>
          <Box >
            <Typography sx={{fontSize:{lg:'40px',md:'24px',sm:'16px', xs:'16px'}, color:"#FFF", fontWeight:500, lineHeight:'36px'}}>
            Having a great idea?
            </Typography>
            <Typography sx={{fontSize:{lg:'24px',md:'16px', sm:'12px',xs:'12px'}, color:"#FFF",fontWeight:500}}>
            Let’s discuss your project.
            </Typography>
          </Box>
          <Button sx={{textTransform:'capitalize', fontWeight:500}} variant='contained' > Let's talk</Button>
        </Box>
     
    </div>
  )
}

export default Tools