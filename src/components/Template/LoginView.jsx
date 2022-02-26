import {Container, Row, Button,Col, Card, Form} from 'react-bootstrap';
const LoginView = ({onSubmit})=>{
    return(
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Card.Text>
                                <Form
                                    onSubmit={onSubmit}
                                >
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default LoginView;