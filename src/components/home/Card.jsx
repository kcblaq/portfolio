import React from 'react'
import { styled } from '@mui/material/styles';
import {Card,Typography, Box} from "@mui/material";

const MyCard = styled('div')(({theme}) =>({
height:'340px',
width: '372px',
backgroundColor:'#FCFBFB',
borderRadius:'5px',
display:'grid',
justifyContent:"center",
gap:"10px",
alignItems:"center",
fontSize:'28px',
[theme.breakpoints.down('md')]:{
width: '216px',
height:'196px',
fontSize:'16px'
},
[theme.breakpoints.down('sm')]:{
  width: '146px',
  height:'130px',
  fontSize:'12px'

}
// borderTop:"12px solid #66FCF1",



}))

function Cardie({tech, icons}) {
  return (
    <div>
        <MyCard>
            <Typography sx={{color:"#000000", fontSize:{xs:'12px',sm:'12px',md:'16px',lg:'28px'}, fontWeight:700}}> {tech}</Typography>
           {
            icons.map((icon,i ) => <Box key={i} sx={{color:'#000000'}} > {icon} </Box> )
           }
        </MyCard>
    </div>
  )
}

export default Cardie