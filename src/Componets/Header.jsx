import React from 'react';
import herosectionimage from '../assets/image/png/hero_section.png'
import FirstNav from './FirstNav';
import FirstBtn from './FirstBtn';
import { Container, Row, Col } from 'react-bootstrap';


const Header = () => {
  return (
    <header className=' bg_hero position-relative min-vh-100 d-flex flex-column '>
      <FirstNav />
      <div className=' flex-grow-1 d-flex align-items-center'>
        <Container>
          <div>
            <Row className=" align-items- center">
              <Col xs={12} lg={6}>
                <p className=' ff_Jost fw_400 fs_16 yellow'>Welcome To Choppers</p>
                <p className='fw_700 ff_Poppins fs_48 text-white '>Best Hair Salon For A
                  Professional Look</p>
                <p className='fw_400 ff_Poppins fs_21 grey width_389 '>Choppers offers high performance customized facials to provide you with visible results.</p>
                <div className='  d-flex mb-0 mt-5 py-5 align-items-start  align-items-sm-center  flex-column  flex-sm-row'>
                  <FirstBtn any_text="Book Now" />
                  <a className='allsevicesbutton ms-sm-5 fw_700 fs_15 ff_poppins text-white d-inline-block mt-5 mt-sm-0' href="#">All Services</a>
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <img className='position-absolute right0 bottom-0 end-0 d-none  d-lg-block' src={herosectionimage} alt="" />

              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </header>


  )
}

export default Header 