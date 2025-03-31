import React from 'react'
import { IoSend } from "react-icons/io5";
const Type = () => {
    return (
        <>
            <div className='flex space-x-3 h-[10vh] text-center bg-gray-800' >
                <div className='w-[70%] mx-4'>
                    <input
                        type='text'
                        placeholder='Type Here'
                        className='border-[1px] border-gray-700 w-full flex items-center  grow outline-none bg-slate-900 py-3 px-3 mt-1 rounded-xl' />
                </div>
                <button className='text-3xl'>
                    <IoSend />
                </button>
            </div>
        </>
    )
}

export default Type
