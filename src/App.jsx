import { useState } from 'react'
import './App.css'
import Kid from './kid/Kid.jsx'

function App() {
    const kids = ["Artem", "Ivan", "Oleg"];
   const kidsRender = kids.map((kid, idx) =>
    <Kid idU={idx} nameU={kid} style = {{margin: "10px"}}/>
    );
  return (
<>

<div style ={{display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '30px',
    background: '#f5f5f5',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} >

    {kidsRender}
</div>
</>
  )
}

export default App;
