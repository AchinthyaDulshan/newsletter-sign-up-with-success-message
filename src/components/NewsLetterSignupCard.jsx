import React from 'react'
import CardImageDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import CardImageMobile from '../assets/images/illustration-sign-up-mobile.svg'
import ListIcon from '../assets/images/icon-list.svg'
import useEmailValidation from '../utils/useEmailValidation'
import ThanksForSubscribingCard from './ThanksForSubscribingCard'

const NewsLetterSignupCard = () => {

    const { email, setEmail, error, handleSubmit, submit, setSubmit } = useEmailValidation();

    // unordered list array 
    const updatesOnPoints = [
        "Product discovery and building what matters",
        "  Measuring to ensure updates are a success",
        "  And much more!"
    ]


    return (
        <>
            {/* if submit is true --> ThanksForSubscribingCard if false --> NewsLetterSignupCard  */}
            {submit ? (<ThanksForSubscribingCard setSubmit={setSubmit} />) :
                (
                    // card area 
                    <div className='bg-White md:rounded-2xl grid lg:grid-cols-2 lg:py-5 md:my-10 lg:my-0 pb-10 overflow-hidden' >
                        <div className='flex flex-col justify-center lg:pl-10 lg:pr-0 px-10 pt-10 lg:pt-0'>
                            {/* heading  */}
                            <h1 className='lg:text-5xl text-4xl font-bold text-Dark-Slate-Grey'>Stay updated!</h1>
                            {/* description  */}
                            <p className='text-Charcoal-Grey py-5'>Join 60,000+ product managers receiving monthly updates on:</p>
                            {/* unorderd list  */}
                            <ul className='space-y-3 text-Charcoal-Grey' >
                                {
                                    updatesOnPoints.map((point, index) => (
                                        <li key={index} className='flex items-start gap-5'><img src={ListIcon} alt="" /> {point}</li>
                                    ))
                                }
                            </ul>
                            {/* form area for get email  */}
                            <form action="/" method="post" noValidate className='grid gap-4 pt-6' onSubmit={(e) => handleSubmit(e, () => console.log('submitted'))}>

                                {/* label with error message  */}
                                <div className="flex justify-between font-bold text-xs">
                                    <label htmlFor="#email" className='text-Dark-Slate-Grey'>Email Address</label>
                                    {error && <p className='text-Tomato'>{error}</p>}
                                </div>

                                {/* email input  */}
                                <input type="email" name="email" id="#email" className={`border rounded-md py-3 px-3 border-Grey placeholder:text-Grey ${error && ('bg-Tomato border-Tomato bg-opacity-20')}`} placeholder='email@company.com' onChange={(e) => setEmail(e.target.value)} value={email} />

                                {/* submit button  */}
                                <input type="submit" value="Subscribe to monthly newsletter" className='bg-Dark-Slate-Grey text-White py-3 rounded-md font-bold cursor-pointer hover:bg-gradient-to-r from-Tomato to-orange-400 hover:shadow-md' />
                            </form>
                        </div>

                        {/* image area  */}
                        <div className='order-first lg:order-last'>
                            <img className='mx-auto hidden lg:block' src={CardImageDesktop} alt="" />
                            <img className='w-full lg:hidden' src={CardImageMobile} alt="" />
                        </div>
                    </div>)}
        </>
    )
}

export default NewsLetterSignupCard