import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingHours({ hours }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                OperatingHours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>OperatingHours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday : {hours.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday : {hours.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday : {hours.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday : {hours.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday : {hours.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday : {hours.Saturday}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default OperatingHours