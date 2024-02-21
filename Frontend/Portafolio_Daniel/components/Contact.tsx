import React , {useState, useRef, FormEvent} from 'react';
import emailjs from '@emailjs/browser';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Element} from 'react-scroll';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


emailjs.init('KkoynM7QmxadnCkRR');

const Contact: React.FC = () =>  {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [comentario, setComentario] = useState('');
    const [showAlert, setShowAlert] = useState(false);


    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
        emailjs
            .sendForm('service_e968x79', 'template_hcpumnb', form.current)
            .then(
                () => {
                console.log('SUCCESS!');
                    setNombre('');
                    setCorreo('');
                    setComentario('');
                    setShowAlert(true);
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        }
    }

    return (
        <Element name="contacto">
        <h1>Contacto</h1>
        <Form ref={form} onSubmit={sendEmail} className='estilo-seccion-contacto'>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Ingrese su Nombre y Apellido</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Nombre y Apellido" 
                    value={nombre} onChange={e => setNombre(e.target.value)}/>
                </Col>
                <Col>
                    <Form.Label>Ingrese su Correo</Form.Label>
                    <Form.Control type="email" name="user_email" placeholder="Correo" 
                    value={correo} onChange={e => setCorreo(e.target.value)}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Ingrese su comentario aqui</Form.Label>
                    <Form.Control name="message" as="textarea" placeholder="Comentario" style={{ height: '120px' }} 
                    value={comentario} onChange={e => setComentario(e.target.value)}/>
                </Col>
            </Row>
            <Button variant="primary" type="submit" value="Send">Enviar</Button>
        </Form>
        {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>Tu mensaje ha sido enviado correctamente, <br></br>Muchas Gracias !!</Alert>}
        </Element>
    );
};

export default Contact;

    /*
const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ nombre, correo, comentario });

        const response = await fetch('/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, correo, comentario }),
        });

        if (response.ok) {
            console.log('Correo enviado correctamente');
        } else {
            console.error('Error enviando correo');
        }
    }
*/