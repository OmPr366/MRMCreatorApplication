import React from 'react'

// Props is only title with type string and is required

// create Title interface

interface Title {

    title: string,

    // Count handler which is a function that returns void

    counthandler: () => void,
    
    // data which is an object which can contain anything 

    data: object

    





}


const MyComp : React.FC<Title> = ({title,counthandler}) => {

    return (

        <div>

            <h1>{title}</h1>

        </div>

    )

}

export default MyComp