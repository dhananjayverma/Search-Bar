import React from 'react'
import "./Searchlist.css";
export const SearchResult = ({res}) => {
  return (
    <div className='res'>
 {
    res.map((result,id)=>{
        return(
            <div key={id} className='myres'>
                {result.name}
            </div>
        )
    })
 }
</div>
  )
}
