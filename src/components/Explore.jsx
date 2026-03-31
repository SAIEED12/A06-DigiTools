import React from 'react';

const Explore = () => {
    return (
        <div className='bg-linear-to-r from-[#4800f1] to-[#8b02f3]'>
            <div className='text-white p-8 text-center'>
                <h2 className='text-5xl mb-4 font-extrabold mt-30'>Ready To Transform Your Workflow?</h2>
                <p className='opacity-60'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button className='btn rounded-full w-40 text-purple-800'>Explore Products</button>
                <button className='btn bg-transparent w-40 rounded-full text-white hover:bg-purple-600'>View Pricing</button>
            </div>
            <div className='py-10'>
                <p className='text-center mt-4 text-white/60 text-md'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Explore;