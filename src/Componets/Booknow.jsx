import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Bookappintmentbutton from './Bookappintmentbutton';
import callnow from '../assets/image/png/Vector.png'


const Booknow = () => {
    return (
        <div className='booknow_bg'>
            <Container className='py-5 '>
                <Row className='pt-5'>
                    <Col xs={12} lg={6} >
                        <p className=' ff_Jost fw_400 fs_18 yelow yellow'>Book Now</p>
                        <p className=' fw_700 fs_48 ff_Poppins text-white width_586  line_height_1'>Book your Appointment
                            Online.</p>
                        <p className='fw_500 ff_Poppins fs_20  darkgrey1 width_339 line_height_1'>Get 10% Discount on your first hair
                            cut by using our website.</p>
                        <Bookappintmentbutton></Bookappintmentbutton>
                    </Col>
                    <Col xs={12} lg={6} className=' d-flex   justify-content-lg-center align-items-center'>
                        <div className='bg_white mt-5 mt-lg-0'>
                            <div className='d-flex align-items-center pt-5  flex-column'>
                                <div className='call_now '>
                                    <img className='ms-auto me-auto mt-4 d-flex' src={callnow} alt="" />

                                </div>
                                <p className='fw_700 ff_Poppins fs_20 darkgrey1 mb-0 '>Call Now</p>
                                <p className='ff_poppins fs_24 fw_700 black '>0300 7715325</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Booknow