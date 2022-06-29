import React from 'react';
import styles from './styles.module.css';
import { Typography } from '@mui/material';
import RecentTools from './RecentTools';
import LetsChat from './LetsChat';

function About() {
	return (
    <>
		<div className={styles.main}>
			<Typography variant="h3" sx={{ fontFamily:'Roboto', fontSize: '32px',fontWeight:700,lineHeight:"48px",mt:2,mb:5 }}>
				About me
			</Typography>
			<Typography variant="h5" className={styles.text} sx={{mb:3}}>
				I’m Kelechi, a Fullstack Software Developer working remotely for Decagon
				in Abuja, Nigeria. I enjoy building things on the web and am glad I’m
				passionate about my career.
			</Typography>
			<Typography variant="h5"  className={styles.text} sx={{mb:3}}>
				I’ve worked on several web projects for startups and corporations
				focusing on web development. Most of my projects were on front-end
				development using technologies like react, javascript, and next.js.
			</Typography>
			<Typography  variant="h5" className={styles.text} sx={{mb:3}}>
				These days my time is spent learning and incorporating new technologies,
				coding, coding, and coding. Out of the office, you’ll find me playing
				table tennis, visiting an orchard, and teaching teenagers about personal
				development.
        </Typography>
				<Typography variant="h5"  className={styles.text} sx={{mb:3}}>
					Here are a few technologies I’ve been working with recently:
				</Typography>
      <RecentTools/>
		</div>
			<LetsChat/>
    </>
  );
}

export default About;
