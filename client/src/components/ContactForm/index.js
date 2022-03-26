import React, { useState } from 'react';

function Checkbox() { 
  
    const handleChange = () => { 
      
      console.log('The checkbox was toggled'); 
      
    }; 
    
    return ( 
      
      <div>  <input type="checkbox" onChange={handleChange} /> </div> 
      
    ); 
    
  }; 
  
  export {Checkbox};