import React from 'react'
import styles from "./styles.module.css"
import {Typography, Box, Button} from "@mui/material"
import Cardie from "./Card"

function Tools() {
  const myicons = ['Vuejs', 'NextJS','ReactJS']
  const tech = "Front-end technologies"
  return (
    <div className={styles.tool__container}>
       <div className={styles.expertise}>
         
       <Typography variant='p' sx={{color:"#FCFBFB", fontWeight:500, fontSize:"16px",textAlign:"center",color:'#FCFBFB'}}> Expertise</Typography>
        <Typography variant='h6' sx={{textAlign:"center",fontWeight:500, fontSize:"24px"}}> Putting to work tools and technologies that yield great results.</Typography>
       </div>
        <div className={styles.cards}>
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={tech} icons={myicons} />
          <Cardie tech={tech} icons={myicons} />

        </div>
        <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", mt:'5%'}}>
          <Box >
            <Typography sx={{fontSize:"24px", color:"#FFF", fontWeight:500, lineHeight:'36px'}}>
            Having a great idea?
            </Typography>
            <Typography sx={{fontSize:"16px", color:"#FFF",fontWeight:500}}>
            Let’s discuss your project.
            </Typography>
          </Box>
          <Button sx={{textTransform:'capitalize', fontWeight:500}} variant='contained' > Let's talk</Button>
        </Box>
     
    </div>
  )
}

export default Tools