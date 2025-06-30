import Lottie from 'lottie-react';
import React from 'react';
import academicLottie from '../../../assets/academic.json'

const Academic = () => {
    return (
        <section id='academic' className="my-10">
            <h1 className='text-3xl my-6 text-center'>Academic Journey</h1>
            <div className='w-full flex items-center'>
                <div className='w-5/12'>
                    <div className="w-full h-64">
                        <Lottie animationData={academicLottie} aria-label="Academic animation" />
                    </div>
                </div>
                <div className='w-7/12 px-6'>
                    <h2 className="text-xl font-semibold mb-2">Diploma in Computer Science and Technology (CST)</h2>
                    <p className="mb-1 font-medium">KPI- Kishoreganj Polytechnic Institute</p>
                    <p className="mb-4 text-gray-600">2022-Present</p>
                    <ul className='list-disc list-inside space-y-3'>
                        <li>Studying computer science fundamentals with a focus on web development and modern &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frameworks.</li>
                        <li>Learning to build real-world web projects to sharpen coding, design, and problem-solving skills.</li>
                        <li>Focused on mastering full-stack skills to build complete and efficient web solutions.</li>
                        <li>Continuously expanding practical skills to deliver reliable and impactful web solutions.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Academic;
