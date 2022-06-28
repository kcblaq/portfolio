import React from 'react'
import styles from "./styles.module.css"
import { GitHub, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import {Link, Typography, Button} from '@mui/material/';
import Pix from "../../../../src/KayCee.svg"


function FirstLayer() {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.intro}>
       <Typography variant='p' sx={{fontSIze:{xs:'12px', sm:'12px',md:'16px',lg:'16px'}}}>
 Hello, I'm
       </Typography>
       <Typography variant='h3' sx={{fontSize:{xs:'20px', sm:'20px',md:'28px',lg:'28px'}, fontWeight:500}}>
 Kelechi Ugwu
       </Typography>
       <Typography variant='h5' sx={{fontSize:{xs:'16px',sm:'16px', md:'24px',lg:'24px'}, fontWeight:500}}>
       I build outstanding web applications
       </Typography>
       <Typography variant='p' sx={{width:{xs:"90%",sm:'80%',md:'70%',lg:'70%'}, lineHeight:"200%", fontSize:{xs:'12px',sm:'12px',md:'16px',lg:'16px'}}}>
       I am a <span style={{color:"#45A39E"}} >fullstack software engineer</span> based in Abuja, Nigeria. 
       I specialize in building website applications and everything related to it.
       </Typography>
       <div className={styles.cat}>
        <Button size='small' variant='contained'> Get in touch</Button>
        <Button size='small' variant='outlined'> Portfolio</Button>
       </div>
      </div>
      <div className={styles.handles}>
            <Link href="https://github.com/kcblaq"> <GitHub/></Link>
            <Link href="https://www.linkedin.com/in/kelechiugwu/"> <LinkedIn/></Link>
            <Link href="https://twitter.com/kcblaqy"> <Twitter/></Link>
            <Link href="https://wa.me/2348032465303"> <WhatsApp/></Link>
        </div>
    </div>
    <div className={styles.mua}>
     {/* <img src={Pix} alt='munwa' /> */}
    </div>
    </> )
}

export default FirstLayer