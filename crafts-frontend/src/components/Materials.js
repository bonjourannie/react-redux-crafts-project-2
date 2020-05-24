import React, { Component } from 'react'
import MaterialInput from './MaterialInput'

const Materials = (props) => {

    console.log(props.materials)

    return (
        <div>
            {props.materials && props.materials.map(material =>
                <li key={material.id}>
                    {material.name}
                    {material.description}
                </li>
            )}
        </div>
    )
}

export default Materials

//functional component 
//map over transactions and display