import React from 'react'
import Website from './../public/images/website.svg';

export const HaveToday = () => {
    return (
        <section
        id="have-to-day">
            <h3 className="text-center">¿Qué necesitas tener hoy?</h3>
            <div className="flex">
                <div className="flex-auto">
                    <Website className="" alt="website" />
                </div>
                <div className="flex-auto">

                </div>
            </div>
        </section>
    )
}
