import React from 'react'

function OccuipedAndFreeStatus() {
    return (
        <div className=' flex items-center justify-center space-x-5'>
            <p className='h-[5vh] '>Occupied - </p> <span className=' bg-green-400 text-white p-1 px-2 rounded-full animate-bounce'>20</span>
            <p className='h-[5vh]'>Free - </p><span className=' bg-slate-400 text-white p-1 px-2 rounded-full animate-bounce'>20</span>
        </div>
    )
}

export default OccuipedAndFreeStatus