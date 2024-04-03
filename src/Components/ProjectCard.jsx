import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { CardText } from 'react-bootstrap';

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <Card style={{ width:'28rem'}} onClick={handleShow}>
      <Card.Img variant="top" src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689607052/catalog/1680952343560466432/cyy8bvnad6mpkc9wfatb.jpg" width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>   
        <Card.Text>
          </Card.Text>      
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <img width={'100%'} src='https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689607052/catalog/1680952343560466432/cyy8bvnad6mpkc9wfatb.jpg' alt=''/>
            </div>
          <div className='col-6'>
          <h2>Project Title</h2>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore et in iure officiis tenetur, repudiandae sint similique corporis quod excepturi vel beatae magni cupiditate, nisi, numquam ipsam eaque inventore molestias!</p>
          <p>Technology Used:<b>React, Node</b></p>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between'>

          <Button className='btn-primary me-5'><a className='text-light' href=''><FaGithub /></a></Button>
          <Button className='me-5'><a className='text-light' href=''><FaLink /></a></Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          </div>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ProjectCard