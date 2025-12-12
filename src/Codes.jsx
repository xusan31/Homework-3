import React from 'react'
import { Links } from './array';

function Codes() {
    function component(){
        const result = [];

        for(let i = 0; i < Links.length; i++){
            result.push(
            <li key={i}><a href="">{Links[i]}</a></li>
        
        )
        }
    }
  return (
    <>
        
    </>
  )
}

export default Codes