import React, { useState } from 'react';
import { Element} from 'react-scroll';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// import { Link } from 'react-router-dom';

interface formato_trabajo {
    id: number;
    empresa: string;
    puesto: string;
    fecha_inicial: string;
    fecha_termino: string;
    descripcion: string;
}

const Card_Experiencia: React.FC = () => {

    const [empresaSeleccionada, setEmpresaSeleccionada] = useState<string | null>(null);

    const puestos_de_trabajo: formato_trabajo[] = [
    {
        id:1,
        empresa: "Zoluxiones",
        puesto: "IT Recruiter",
        fecha_inicial: "16/12/2022",
        fecha_termino: "Actualidad",
        descripcion: "Descripcion de las funciones del puesto"
    },
    {
        id:2,
        empresa: "Experis - Manpower",
        puesto: "IT Recruiter - IT Sourcer",
        fecha_inicial: "01/03/2022",
        fecha_termino: "16/12/2022",
        descripcion: "Descripcion de las funciones 222222 del puesto"
    },
    {
        id:3,
        empresa: "P'Cofit",
        puesto: "IT Talent Hunter",
        fecha_inicial: "01/10/2021",
        fecha_termino: "28/02/2022",
        descripcion: "Descripcion de las funciones 3333333333 del puesto"
    },
    {
        id:4,
        empresa: "Circus Grey Perú",
        puesto: "Analista de Recursos Humanos",
        fecha_inicial: "01/10/2019",
        fecha_termino: "30/03/2020",
        descripcion: "Descripcion de las funciones 3333333333 del puesto"
    },
    {
        id:5,
        empresa: "Empresa de Transportes Hermanos Alonso",
        puesto: "Encargado de Recursos Humanos",
        fecha_inicial: "01/03/2018",
        fecha_termino: "30/09/2019",
        descripcion: "Descripcion de las funciones 3333333333 del puesto"
    },
]

const handleClick = (empresa: string) => {
    setEmpresaSeleccionada(empresa);
};

    return (
        <Element name="experiencia">
        <h1>Experiencia</h1>
        <br></br>
        <p>Para visualizar el detalle de cada experiencia dale click a alguno de los nombres de empresas.</p>
        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
            <Row className='estilo-Experiencia'> 
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {puestos_de_trabajo.map(trabajo => (
                            <Nav.Item key={trabajo.id}>
                                <Nav.Link 
                                eventKey={trabajo.id} 
                                onClick={() => handleClick(trabajo.empresa)}>
                                    {trabajo.empresa}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9}>
                    {empresaSeleccionada && (
                        <Tab.Content>
                        {puestos_de_trabajo
                            .filter(trabajo => trabajo.empresa === empresaSeleccionada)
                            .map(trabajo => (
                                <Tab.Pane eventKey={trabajo.id} key={trabajo.id}>
                                    <p>Empresa: {trabajo.empresa}</p>
                                    <p>Puesto: {trabajo.puesto}</p>
                                    <p>Fecha Término: {trabajo.fecha_termino}</p>
                                    <p>Fecha Inicial: {trabajo.fecha_inicial}</p>
                                    <p>Descripción: {trabajo.descripcion}</p>
                                </Tab.Pane>
                            ))}
                    </Tab.Content>
                    )}
                </Col>
            </Row>
            <br></br>
        </Tab.Container>
        </Element>
    );
};

export default Card_Experiencia;
