import { Link } from '@mui/material'
import React from 'react'
import styles from './styles.module.css'


function Footer() {
  return (
    <div className={styles.container}>
       <p> &copy; Kelechi Ugwu </p>
       <div className={styles.buttom__nav}>
        <Link href='/about'> About</Link>
        <Link href='/works'> Works</Link>
        <Link href='/blog'> Blog</Link>
        <Link href='https://docs.google.com/document/d/1Z6193OoqXEdf62ZMOeyQQQFOIHYq93QR/edit'> Resume</Link>
       </div>
    </div>
  )
}

export default Footer