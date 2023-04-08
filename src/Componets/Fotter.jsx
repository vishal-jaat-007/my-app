import React from 'react'
import navLogo from '../assets/image/png/nav_logo.png'
import sumbit from '../assets/image/png/Submit.png'
import facebook from '../assets/image/png/facebook.png'
import twitter from '../assets/image/png/twitter.png'
import instagram from '../assets/image/png/instagram.png'


import { Container, Row, Col } from 'react-bootstrap';


const Fotter = () => {
    return (
        <div className=' bg-black'>
            <Container className='pb-5 '>
                <div className='d-flex justify-content-between py-5 align-items-center'>
                    <span><img src={navLogo} alt="" /></span>
                    <div className='d-flex align-items-center flex-column flex-sm-row ' >
                        <p className='fw_400 fs_22 ff_dm_sans text-white mb-0  pe-0 pe-sm-4'>Ready to get started?</p>
                        <li><a href="#" className='fw_700 fs_17 ff_dm_sans text-warninghite get_started_btn d-inline-block text-white mt-3 mt-sm-0'>Get started</a></li>
                    </div>
                </div>
                <p className='divider'></p>
                <Row className='py-5'>
                    <Col xs={12} lg={4}>
                        <div>
                            <p className='fw_400 ff_dm_sans fs_22 text-white width_165 '>Subscribe to our
                                newsletter</p>
                            <div className='d-flex border_1'>
                                <input className='box_1 text-white ' type="text" placeholder='Email address' />
                                <div className='box cursor_pointer'>
                                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.463745 9.13333L4.28458 5.3125L0.463745 1.49167L1.64291 0.3125L6.64291 5.3125L1.64291 10.3125L0.463745 9.13333Z" fill="white" />
                                    </svg>

                                </div>
                            </div></div>
                    </Col>
                    <Col xs={12} lg={8}>
                        <Row>
                            <Col xs={6} lg={4} className='mt-5 mt-lg-0'>
                                <a href="#" className='fw_400 fs_17 ff_dm_sans  yellow text_line_efect  position-relative hover'>Services</a>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Email Marketing</a></li>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Campaigns</a></li>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Branding</a></li>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Offline</a></li>
                            </Col>
                            <Col xs={6} lg={4} className='mt-5 mt-lg-0'>
                                <a href="#" className='fw_400 fs_17 ff_dm_sans  yellow text_line_efect position-relative hover'>About</a>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Our Story</a></li>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Benefits</a></li>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Team</a></li>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Careers</a></li>
                            </Col>
                            <Col xs={12} lg={4} className='mt-5 mt-lg-0'>
                                <a href="#" className='fw_400 fs_17 ff_dm_sans  yellow  text_line_efect position-relative hover'>Help</a>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>FAQs</a></li>
                                <li><a href="#" className='fw_400 fs_15 ff_dm_sans text-white  d-inline-block pt-4 text_line_efect position-relative'>Contact Us</a></li>
                            </Col>
                        </Row>



                    </Col>
                </Row>
                <div className='d-flex justify-content-between pt-5 flex-column flex-sm-row'>
                    <div className='d-flex'>
                        <p className=' ff_dm_sans fs_15 text-white fw_400'>Terms & Conditions</p>
                        <p className='ff_dm_sans fs_15 text-white fw_400 ps-5'>Privacy Policy</p>
                    </div>
                    <div>
                        <a href="#" className='pe-4 img_translate'><img src={facebook} alt="" />  </a>
                        <a href="#" className='pe-4 img_translate'><img src={twitter} alt="" />   </a>
                        <a href="#" className='pe-4 img_translate'><img src={instagram} alt="" /> </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Fotter