import Lottie from 'lottie-react';
import React from 'react';
import { FaDownload, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import academicLottie from '../../../assets/academic.json'

const Hero = () => {
    const handleDownload = () => {
        // This can be a direct link to your file (PDF, ZIP, etc.)
        const link = document.createElement("a");
        link.href = "/path/to/your/file.pdf"; // Replace with your file path
        link.download = "MyFile.pdf"; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='w-full flex items-center'>
            <div className='w-7/12 '>
                <h2 className='text-xl mb-3'>Hey There!</h2>
                <h1 className='text-3xl'>I'm  <span className='font-bold'>MD TARIQUL ISLAM</span></h1>
                <p className='text-2xl mb-3'>-Jr. Web Developer</p>
                <p>Coding interactive experiences with passion and precision</p>
                <div className='mt-1 mb-2'>
                    <button className='btn btn-circle mr-1'><IoLogoGithub /></button>
                    <button className='btn btn-circle mr-1'><FaLinkedinIn /></button>
                    <button className='btn btn-circle mr-1'><FaXTwitter /></button>
                    <button className='btn btn-circle mr-1'><FaFacebook /></button>
                </div>
                <button onClick={handleDownload} className='btn btn-accent'>Hire Me<FaDownload /></button>
            </div>
            <div className='w-5/12'>
                <Lottie animationData={academicLottie}></Lottie>

            </div>
        </div>
    );
};

export default Hero;