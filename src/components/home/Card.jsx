import React from 'react'
import { styled } from '@mui/material/styles';
import {Card,Typography, Box} from "@mui/material";

const MyCard = styled('div')({
height:'196px',
width: '216px',
backgroundColor:'#FCFBFB',
borderRadius:'5px',
display:'grid',
justifyContent:"center",
gap:"10px",
alignItems:"center",
// borderTop:"12px solid #66FCF1",


})

function Cardie({tech, icons}) {
  return (
    <div>
        <MyCard>
            <Typography sx={{color:"black", fontSize:"16px", fontWeight:500}}> {tech}</Typography>
           {
            icons.map((icon,i ) => <Box key={i} sx={{color:'#000000'}} > {icon} </Box> )
           }
        </MyCard>
    </div>
  )
}

export default Cardie