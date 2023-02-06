import React from 'react'
import './Header.css'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { green } from '@mui/material/colors';
export default function Header() {
  return (
    
    <div className='Header'>
        <div>
            <DescriptionOutlinedIcon 
           sx={{
                color:"black" ,
                fontSize:"100px",
                padding:"0 50px",
                "&:hover": {color: green[500]},
                }}
            />
        </div>
        <div class="Heading">
            
            <h2 >Notes Keeper</h2>
      </div>
    </div>
  )
}
