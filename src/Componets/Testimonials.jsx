import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Givereviews_btn from './Givereviews_btn';
import men from '../assets/image/png/umar-usman.png'
import star from '../assets/image/png/star.png'
import arrow from '../assets/image/png/arrow.png'
import girl from '../assets/image/png/girl.png'
import haircut from '../assets/image/png/hair_cut.png'





const Testimonials = () => {
    return (
        <Container className='py-5 position-relative'>
            <Row className=' align-items-center'>
                <Col xs={12} lg={5}>
                    <p className='fw_400 ff_Jost fs_64 darkgrey3 position-absolute testimonals d-none  d-xx l-block'>TESTIMONIALS</p>
                    <p className=' ff_jost fw_400 fs_18 yellow '>Testimonials</p>
                    <p className='fw_700 ff_Poppins fs_48 black width_419 line_height_1'>What Our Clients
                        Say About Us</p>
                    <p className='fw_400 ff_Jost fs-18 grey2 width_401 '>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
                    <Givereviews_btn></Givereviews_btn>
                </Col>
                <Col xs={12} lg={7}>
                    <Row className=' position-relative  justify-content-evenly'>

                        <Col xs={12} lg={5}>
                            <div className='white_box text-center'>
                                <img className='  position-absolute arrow_img d-none d-lg-block' src={arrow} alt="" />
                                <img className=' pt-4' src={men} alt="" />
                                <p className=' ff_Poppins fs_13 fw_700  darkgrey2 width_256 mb-0  me-auto ms-auto pt-4'>It was an amazing experience to get
                                    services from the best in its profession
                                    Absolutly Enjoyed Every SEcond of it </p>
                                <img className='pt-3' src={star} alt="" />
                                <p className=' ff_Poppins fw_700 fs_15 black mb-0 '>Umar Usman</p>
                                <p className=' ff_Poppins fw_700 fs_12 darkgrey2 '>Regular User</p>


                            </div>
                        </Col>
                        <Col xs={12} lg={5}>
                            <div className='white_box text-center mt-5 mt-lg-0'>
                                <img className='  position-absolute haircut z-index d-none d-xxl-block' src={haircut} alt="" />

                                <img className='  position-absolute arrow_img_1 d-none d-lg-block ' src={arrow} alt="" />
                                <img className=' pt-4' src={girl} alt="" />
                                <p className=' ff_Poppins fs_13 fw_700  darkgrey2 width_256 mb-0  me-auto ms-auto pt-4'>It was an amazing experience to get
                                    services from the best in its profession
                                    Absolutly Enjoyed Every SEcond of it </p>
                                <img className='pt-3' src={star} alt="" />
                                <p className=' ff_Poppins fw_700 fs_15 black mb-0 '>Umar Usman</p>
                                <p className=' ff_Poppins fw_700 fs_12 darkgrey2 '>Regular User</p>


                            </div>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Container>
    )
}

export default Testimonials