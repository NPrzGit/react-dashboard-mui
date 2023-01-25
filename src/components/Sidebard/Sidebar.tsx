import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { links } from './data'
import './Sidebar.css';
import { Tooltip, IconButton} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';


const Sidebar = () => {
  return (
    <BrowserRouter>
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
    <Routes>
                 {/* dashboard  */}
                <Route path="/" element="{(<Ecommerce />)}" />
                <Route path="/ecommerce" element="{(<Ecommerce />)}" />

                {/* pages  */}
                <Route path="/orders" element="{<Orders />}" />
                <Route path="/employees" element="{<Employees />}" />
                <Route path="/customers" element="{<Customers />}" />

                {/* apps  */}
                <Route path="/kanban" element="{<Kanban />}" />
                <Route path="/editor" element="{<Editor />}" />
                <Route path="/calendar" element="{<Calendar />}" />
                <Route path="/color-picker" element="{<ColorPicker />}" />

                {/* charts  */}
                <Route path="/line" element="{<Line />}" />
                <Route path="/area" element="{<Area />}" />
                <Route path="/bar" element="{<Bar />}" />
                <Route path="/pie" element="{<Pie />}" />
                <Route path="/financial" element="{<Financial />}" />
                <Route path="/color-mapping" element="{<ColorMapping />}" />
                <Route path="/pyramid" element="{<Pyramid />}" />
                <Route path="/stacked" element="{<Stacked />}" />
              </Routes>
    </BrowserRouter>
  )
}

export default Sidebar