import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { links } from './data'
import './Sidebar.css';
import { Tooltip, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';



import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { ListSubheader } from '@mui/material';




const Sidebar = () => {

  return (
    <div className='container'>
    <div className='header-menu'>
      <div className='header-title'>Menu</div>
      <div className='header-button'>
      <Tooltip title="Close">
        <IconButton>
          <CancelIcon />
        </IconButton>
      </Tooltip>
      </div>
    </div>
    <div className='options-menu'>
    {links.map((item)=>(
      <div className='option' key={item.title}>
        <p>{item.title}</p>
        {item.links.map((Link)=>(
          
          <NavLink style={{}}
          to={`/${Link.name}`}
          key={Link.name}
          /*className={({isActive})=> isActive ? activeLink : normalLink}*/
          >
            <div className='link'>
            <div className='link-icon'>
            {Link.icon}
            </div>
            <div className='link-name'>
            {Link.name}
            </div>
            </div>
          </NavLink>
        ))}
      </div>
    ))}
    </div>
  </div>
  );
}

export default Sidebar;