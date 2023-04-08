import React from 'react'
import navLogo from '../assets/image/png/nav_logo.png'
import FirstBtn from './FirstBtn'


const FirstNav = () => {
    return (
        <nav>
            <div className='container'>
                <div className='d-flex  justify-content-between py-4 align-items-center'>
                    <img src={navLogo} alt="" />
                    <input type="checkbox" id='check' className='d-none' />
                    <label htmlFor="check" className=' d-block d-lg-none'>
                        <span class="d-flex justify-content-between flex-column  ">
                            <span class="nav_3_line"></span>
                            <span class="nav_3_line"></span>
                            <span class="nav_3_line"></span>
                        </span>
                    </label>
                    <ul className='d-flex align-items-center   nav_left '>
                        <li className='pe-lg-5 pt-5  pt-lg-0'><a className=' fw_700 text-white fs_15 ff_Poppins text_line_efect position-relative' href="#">Home</a></li>
                        <li className='pe-lg-5 pt-5  pt-lg-0'><a className=' fw_700 text-white fs_15 ff_Poppins text_line_efect position-relative' href="#">About Us</a></li>
                        <li className='pe-lg-5 pt-5  pt-lg-0'><a className=' fw_700 text-white fs_15 ff_Poppins text_line_efect position-relative' href="#">Services</a></li>
                        <li className='pe-lg-5 pt-5  pt-lg-0'><a className=' fw_700 text-white fs_15 ff_Poppins text_line_efect position-relative' href="#">Contact</a></li>
                        <FirstBtn any_text="Book Now" />
                    </ul>

                </div>

            </div>
        </nav>

    )
}

export default FirstNav