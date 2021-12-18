import React from 'react'

export const Welcome = () => {
    return (
        <section id="welcome" className="relative flex items-center justify-center h-screen mb-12 overflow-hidden bg-girl-smiling lg:bg-none bg-girl-smiling bg-top bg-no-repeat bg-cover">
            <div className="mt-72 sm:mt-36 md:mt-32 lg:mt-32 2xl:mt-96 absolute z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl text-center">
                <h1 className="2xl:mt-20 mb-10">¡Haz que la Innovación Comience!</h1>
                <h2 className="my-10">Desarrollo Web y Mobile a la Medida</h2>
            </div>
            <video
                autoPlay
                muted
                loop
                className="hidden lg:block absolute z-10 w-auto min-w-full top-0"
                poster="/images/girl-smiling.png">
                <source src="/videos/girl-smiling.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
        </section>
    )
}
