import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
    <div className="container">
        <div className="contan">
            <div className="img flex w-100 m-auto pt-9 ps-25 items-center gap-2">
                <img src="./imgs/img.png.png" alt="" className=' w-15' />
                <img src="./imgs/text (1).png" alt="" className=' w-25 y-25' />
            </div>
            <div className="txt text-center py-25">
                <h1 className='text-orange-500 text-8xl font-bold'>404</h1>
                <p className=' font-medium text-2xl py-5'>Page Not Found</p>
                <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
                <button className=' mt-9 border-orange-500 bg-orange-500 py-2 rounded-xl'>
                    <Link to={"/"} className=' px-5 text-white'> Go To Deshboard</Link>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Error404
