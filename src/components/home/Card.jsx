import React from 'react'
import { styled } from '@mui/material/styles';
import { Card, Typography, Box } from "@mui/material";
import styles from "./styles.module.css"

const MyCard = styled('div')(({ theme }) => ({
  height: '300px',
  width: '332px',
  backgroundColor: '#FCFBFB',
  borderRadius: '5px',
  display: 'grid',
  // flexDirection:'column',
  
 
  justifyContent: "center",
  gap: "10px",
  alignItems: "center",
  fontSize: '28px',
  padding: '15px',
  [theme.breakpoints.down('md')]: {
    width: '216px',
    height: '196px',
    fontSize: '16px',
    padding: '7px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '146px',
    height: '130px',
    fontSize: '12px'
  }
}))

function Cardie({ tech, icons }) {
  return (
    <div>
      <MyCard>
        <Typography sx={{ color: "#000000", fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '28px' }, fontWeight: 700 }}> {tech}</Typography>
        {
          <div className={styles.myBox}>
          {
            icons.map((icon,i)=> 
            <img src={icon} alt={i} />
            )
          }
            </div>
        }
      </MyCard>
    </div>
  )
}

export default Cardie