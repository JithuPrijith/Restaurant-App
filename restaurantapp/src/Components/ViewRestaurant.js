import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import OperatingHours from './OperatingHours';
import RestView from './RestView';

function ViewRestaurant() {
    const params = useParams()
    const [restaurant, setRestaurants] = useState([])
    // function to call API to get all restaurent from restaurant json

    const getAllRestaurants = async () => {
        await fetch('/restaurants.json').then((data) => {
            data.json()
                .then((res) => {
                    setRestaurants(res.restaurants)
                })
        })
    }


    useEffect(() => {
        getAllRestaurants()
    }, [])

    const sigleRestaurant = restaurant.find(item => item.id == params.id)
    return (
        <>
        {
            sigleRestaurant ? (
                <Row>
                    <Col md={6}>
                    <Image width={500} height={150} fluid src={sigleRestaurant.photograph}/>
                    </Col>
                    <Col md={6}>
                    <h1>Name: { sigleRestaurant.name}</h1>
                    <h4>Neighbourhood: {sigleRestaurant.neighborhood}</h4>
                    <h5>Address: {sigleRestaurant.address}</h5>
                    <h5>Cuisine_type : { sigleRestaurant.cuisine_type}</h5>
                    <OperatingHours hours = {sigleRestaurant.operating_hours}/>
                    <RestView reviews = {sigleRestaurant.reviews}/>
                    </Col>
                </Row>
            ) : 'nul'
        }
        </>
    )
}


export default ViewRestaurant