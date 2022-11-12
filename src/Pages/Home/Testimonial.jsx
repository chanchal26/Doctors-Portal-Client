import React from 'react';

const Testimonial = () => {
    return (
        <section>
            <div className='ml-10'>
                <h2 className='text-xl font-bold text-primary'>Testimonial</h2>
                <h4 className='text-2xl font-semibold'>What Our Patients Says</h4>
            </div>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
                <div className="flex flex-col max-w-lg p-10 space-y-6  overflow-hidden rounded-lg shadow-md">
                    <div>
                        <p className="text-sm dark:text-gray-400">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className="flex space-x-4">
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <h3 className="text-sm font-semibold">Leroy Jenkins</h3>
                            <span className="text-xs dark:text-gray-400">California</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-w-lg p-10 space-y-6 overflow-hidden rounded-lg shadow-md">
                    <div>
                        <p className="text-sm dark:text-gray-400">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className="flex space-x-4">
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <h3 className="text-sm font-semibold">Leroy Jenkins</h3>
                            <span className="text-xs dark:text-gray-400">California</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col max-w-lg p-10 space-y-6 overflow-hidden rounded-lg shadow-md">
                    <div>
                        <p className="text-sm dark:text-gray-400">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className="flex space-x-4">
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <h3 className="text-sm font-semibold">Leroy Jenkins</h3>
                            <span className="text-xs dark:text-gray-400">California</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;