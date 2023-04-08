import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import haircutsallon from '../assets/image/png/best-img.png'
import Readmore from './Readmore';



const Aboutus = () => {
    return (
        <div className='aboutus_bg'>
            <Container className='py-5'>
                <Row className=' align-items-center  mt-5 pt-5'>
                    <Col xs={12} lg={6} className=' text-center'>
                        <img className='img-fluid' src={haircutsallon} alt="" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <p className=' ff_Jost fw_400 fs_18 yellow mb-0 '>About Us</p>
                        <p className=' ff_Poppins fw_700 fs_48 black mb-0 width_451 line_height_1 pt-3'>Best Haircut Salon
                            For Men</p>
                        <p className=' ff_Jost fs_18 fw_400 darkgrey mb-0 width_401 mt-3'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
                        <Readmore></Readmore>
                    </Col>
                </Row>
                




            </Container>

        </div>
    )
}

export default Aboutus