import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { CardText } from 'react-bootstrap';
import { serverURL } from '../Services/serverURL';

function ProjectCard({project}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <Card style={{ width:'28rem'}} onClick={handleShow}>
      <Card.Img variant="top" src={project?`${serverURL}/uploads/${project.projectImage}`:"https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689607052/catalog/1680952343560466432/cyy8bvnad6mpkc9wfatb.jpg"} width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title className='text-center'>{project.title}</Card.Title>   
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
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <img width={'100%'} src={project?`${serverURL}/uploads/${project.projectImage}`:'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689607052/catalog/1680952343560466432/cyy8bvnad6mpkc9wfatb.jpg'} alt=''/>
            </div>
          <div className='col-6 text-center'>
          <h2>{project.title}</h2>
          <p style={{textAlign:'justify'}}>Description: {project.overview}</p>
          <p>Technology Used:<b>{project.language}</b></p>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between'>

          <Button className='btn-primary me-5'><a className='text-light' href={project.github}><FaGithub /></a></Button>
          <Button className='me-5'><a className='text-light' href=''><FaLink /></a></Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          </div>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ProjectCard