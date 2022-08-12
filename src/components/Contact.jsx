import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <>
    <h2 style={{ fontFamily:"Playfair Display SC" }}>Contact Me!</h2>
      <Row style={{width: "50%", margin:"auto"}}>
        <Form.Label column="lg" lg={2} style={{ fontFamily:"Playfair Display SC" }}>
         Full Name
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Full Name" />
        </Col>
      </Row>
      <br />
      <Row style={{width: "50%", margin:"auto"}}>
        <Form.Label column="lg" lg={2} style={{ fontFamily:"Playfair Display SC" }}>
          Email
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Email" />
        </Col>
      </Row>
      <br />
      <Row style={{width: "50%", margin:"auto"}}>
        <Form.Label column="lg" lg={2} style={{ fontFamily:"Playfair Display SC" }}>
          Message
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Message" />
        </Col>
      </Row>
      <Col xs="auto" className='m-3'>
          <Button type="submit" className="mb-2 btn btn-dark" style={{ fontFamily:"Playfair Display SC" }}>
            Submit
          </Button>
        </Col>
    </>
  );
}

export default Contact