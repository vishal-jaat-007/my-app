import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import cutting from '../assets/image/png/cutting_hair.png'

const Workingdays = () => {
    return (
        <Container className='py-5 mt-5 position-relative'>
            <div className='bg_yellow'>
                <Row className=' align-items-center'>
                    <Col xs={12} lg={6} className=' text-end'>
                        <img className=' w-100' src={cutting} alt="" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className='ps-4'>
                            <p className=' ff_Jost fs_64 position-absolute fw_400 working_clr d-none d-lg-block'>WORKING</p>
                            <p className='fw_700 ff_Poppins fs_32 text-white ps-3 mb-0 '>WORKING DAYS</p>
                            <p className='fw_400 ff_Jost fs_18 black'>We are open on all six days in a week </p>
                            <div className='d-flex align-items-center width_220 justify-content-between width_360' >
                                <p className=' ff_Poppins fw_700 fs-16 text-white mb-0'>Monday</p>
                                <p className=' ff_Poppins fw_400 fs_13 black mb-0 '>9Am to 10pm</p>
                            </div>
                            < hr className='black_hr  mt-0' />
                            <div className='d-flex align-items-center width_220 justify-content-between width_360 mt-5' >
                                <p className=' ff_Poppins fw_700 fs-16 text-white mb-0'>Friday</p>
                                <p className=' ff_Poppins fw_400 fs_13 black mb-0 '>9Am to 10pm</p>
                            </div>
                            < hr className='black_hr  mt-0' />
                            <li><a href="#" className=' ff_Jost fw_400 fs_18 black book_now_btn mt-4 d-inline-block mb-5 mb-lg-0'>Book Now</a></li>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Workingdays