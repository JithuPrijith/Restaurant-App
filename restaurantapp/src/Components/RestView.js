import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestView({ reviews }) {
    console.log(reviews);
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {
                        reviews.map((item, index) => (
                            <div key={index}>
                                <p>{item.name} <span>{item.date}</span></p>
                                <h3>Rating : {item.rating}</h3>
                                <h3>Comments : {item.comments}</h3>
                            </div>
                        ))
                    }
                </div>
            </Collapse>
        </div>
    )
}

export default RestView