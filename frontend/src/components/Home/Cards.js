import React, { useState, useEffect } from "react";
import { Tooltip, OverlayTrigger, Image } from 'react-bootstrap'
import { getObras } from '../../apis/ArtSocietyCRUD'



const Cards = () => {

    getObras((res) => {
        console.log(res);
    })

    const [results, setResults] = useState([]);

    useEffect(() => {
        getObras(setResults);
    },[]);

    const renderTooltip = (title, description) => (
        <Tooltip id="button-tooltip" >
            <h1>{title}</h1>
            <h2>{description}</h2>
        </Tooltip>
    );

    return (
        <>

            {results.map((res) => (

                <OverlayTrigger
                    placement="auto"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(res.title, res.Description, res.Images)}
                >
                    <Image className="d-fixed mx-3 mt-4" src={res.Images} height="330px" width="400px"/>
                </OverlayTrigger>
                
            ))}

        </>
    )
}

export default Cards
