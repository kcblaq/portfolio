import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'
import { styled } from '@mui/material/styles';
import { GitHub, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import Tools from './Tools';
import FirstLayer from "./firstlayer/FirstLayer"

function Home() {
  return (
    <div className={styles.container}>
      <FirstLayer />
      <Tools/>
      
    </div>
  )
}

export default Home