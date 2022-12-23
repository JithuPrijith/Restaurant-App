import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import './RestaurantCard.css'

function RestaurantCards({ restaurant }) {
    return (
        <Link style={{textDecoration:"none", color:"white"}} to={`/view-restaurant/${restaurant.id}`}>
            <Card className=' mt-5 container'>
                <Card.Img className='p-4 mx-auto' variant="top" src={restaurant.photograph} />
                <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                        {restaurant.neighborhood}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default RestaurantCards