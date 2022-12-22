import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import footer_image from '../../assets/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer_image})`,
                backgroundSize: 'cover',
                
            }}
            className="py-10">
         
            <div className="flex justify-center gap-5 my-10">
                <a href="https://github.com/Uddin02" target="_blank" rel="noreferrer">
                    <div className="text-4xl">
                        <FaGithub />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/arifuddinkhandaker/" target="_blank" rel="noreferrer">
                    <div className="text-4xl">
                        <FaLinkedinIn />
                    </div>
                </a>
                <a href="https://www.facebook.com/ajhar.rimon.927" target="_blank" rel="noreferrer">
                    <div className="text-4xl">
                        <FaFacebookF />
                    </div>
                </a>
        
            </div>
            <div >
                <p className='text-center font-medium'>Copyright © 2022-2023. All right reserved by <h2 className="inline-block text-center text-primary font-medium">
                <span className="rounded-full border-2 border-spacing-x-2 px-1 border-primary">
                    CO</span>DEWITH ARIF</h2></p>
            </div>
        </footer>
    );
};

export default Footer;