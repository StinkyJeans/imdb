import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {results.map((result) => (

            <div> 
            <div key={result.id}> {result.original_title}</div>
            </div>

        ))}
    </div>
  )
}
