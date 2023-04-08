import React from 'react'
import { Container } from 'react-bootstrap'

const Partner = () => {
    return (
        <div className='bg_partner'>
            <Container className='pt-5'>
                <div className=' justify-content-center d-flex align-items-center flex-column py-5'>
                    <p className=' ff_Jost fw_400 fs_18 yellow pt-5'>Affiliate</p>
                    <p className=' fw_700 width_566 ff_Poppins fs_36 text-white text-center line_height_1'>Join Us Become a part of Us by
                        becoming an affiliate</p>
                    <li><a href="#" className='fs_15 fw_700 yellow ff_Poppins partner_btn mt-5 d-inline-block '>Partner Program</a></li>
                </div>
            </Container>

        </div>
    )
}

export default Partner