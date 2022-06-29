import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import {Drafts, LabelImportant} from '@mui/icons-material';
import styles from "./styles.module.css"



export default function RecentTools() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#0B0C10', color:'#FCFBFB' }}>
      <nav aria-label="React icon">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LabelImportant className={styles.icons} />
              </ListItemIcon>
              <ListItemText primary="React" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LabelImportant className={styles.icons} />
              </ListItemIcon>
              <ListItemText primary="NextJS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LabelImportant className={styles.icons} />
              </ListItemIcon>
              <ListItemText primary="Prisma" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LabelImportant className={styles.icons} />
              </ListItemIcon>
              <ListItemText primary="Postgress" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LabelImportant className={styles.icons} />
              </ListItemIcon>
              <ListItemText primary="Strapi" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
     
    </Box>
  );
}