import React from 'react'

export default function HomeList(props) {
    const {hobbyList}=props 

    return (
        <>
            <ul>
                {hobbyList.map((item,key) =>(
                <li key={key}>{item.name}
                <button>Delete</button>
                </li>
              
                ))}

            </ul>
        </>
    )
}
