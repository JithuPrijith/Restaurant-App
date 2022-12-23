import React, { useState, useEffect } from 'react'
import RestaurantCards from './RestaurantCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { restaurantListAction } from '../Action/RestaurantListAction';
import { useDispatch, useSelector } from 'react-redux'
import './RestaurantCard.css'

function RestaurantList() {

    const dispatch = useDispatch()
    const result = useSelector(state=>state.restaurantListReducer.restaurantList)
    console.log(result);
    useEffect(() => {
        dispatch(restaurantListAction())
    }, [])

   

    return (
        <Row className='justify-content-center'>
            {

                result.map((item, index) => (
                    <Col key={index} sm={12} md={6} lg={4} xl={3} className="hover">
                        <RestaurantCards restaurant={item} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default RestaurantList