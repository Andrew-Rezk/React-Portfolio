import React, {useState, useEffect} from 'react';
import axios from  'axios';
import Card from 'react-bootstrap/Card';

const Projects = () => {

const [projects, setProjects] = useState([]);

useEffect(()=>{
    axios.get('./projects.json')
    .then(response => {
        console.log(response)
        setProjects(response.data)
    })
})

return (
    <div class="row">
        <h1 style={{ fontFamily:"Playfair Display SC" }} className="m-3">Projects</h1>
    {projects.map(projects => (
    <div class="col-sm-4 h-100 d-flex align-items-center justify-content-center mt-4">
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={projects.image} style={{maxHeight:"150px"}}/>
        <Card.Body>
        <Card.Title>{projects.title}</Card.Title>
        <Card.Text>
        {projects.content}
        </Card.Text>
        <a class="social-icon" href= {projects.github} target="_blank" title="Github Repository"><i className="fab fa-github fa-3x px-4" aria-hidden="true" style={{ color: 'black' }}></i></a>
        </Card.Body>
    </Card>
    </div>
    ))
    }
    </div>

)
}
export default Projects