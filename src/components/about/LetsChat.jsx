import React from 'react';
import styles from './styles.module.css';
import { Box, Typography, Button, Link } from '@mui/material';

function LetsChat() {
	return (
		<div className={styles.chat__main}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography sx={{fontSize:"2rem"}} variant='h3'  className={styles.bigtext}>
					I occasionally take on freelance opportunities.
				</Typography>
				<Typography  sx={{mt:2, fontSize:'1rem'}}>
					Have an exciting project where you need some help? Send me a message.
				</Typography>
			</Box>
			<Button
            className={styles.btn}
				variant="contained"
				sx={{ textTransform: 'capitalize' }}>
				{' '}
				Lets talk
			</Button>
		</div>
	);
}

export default LetsChat;
