import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'

const Right = () => {
    return (
        <div className='w-[70%]  text-white bg-slate-950'>
            <Chatuser />
            <div className='py-2 flex-chemin overflow-y-auto' style={{ maxHeight: "calc(88vh - 8vh)" }}>
                <Messages />
            </div>

            <Type />
        </div>
    )
}

export default Right
