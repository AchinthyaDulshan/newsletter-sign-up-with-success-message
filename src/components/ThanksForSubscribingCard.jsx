import React from 'react'
import ListIcon from '../assets/images/icon-list.svg'
import useEmailValidation from '../utils/useEmailValidation'


const ThanksForSubscribingCard = ({ setSubmit }) => {

    return (
        <div className='bg-White md:rounded-3xl p-8 max-w-sm md:h-auto h-dvh flex flex-col justify-center md:block thanksCard'>
            <div className='grow flex flex-col gap-5 justify-center'>
                <img className='w-12' src={ListIcon} alt="" />
                <h1 className='text-4xl font-bold text-Dark-Slate-Grey'>Thanks for subscribing!</h1>
                <p className='text-Charcoal-Grey text-sm'>A confirmation email has been sent to <span className='font-bold'>ash@loremcompany.com</span> . Please open it and click the button inside to confirm your subscription.</p>
            </div>

            <button className='bg-Dark-Slate-Grey mx-auto w-full text-White py-3 rounded-md font-bold hover:bg-gradient-to-r from-Tomato to-orange-400 md:mt-10 hover:shadow-md' onClick={() => setSubmit(false)}>Dismiss message</button>
        </div>
    )
}

export default ThanksForSubscribingCard