import React from 'react'

const Chatuser = () => {
    return (
        <>
            <div className='pl-5 pt-5 flex space-x-4 h-[12vh] bg-gray-900 hover:bg-gray-600 duration-300 cursor-pointer'>
                <div>
                    <div className="avatar avatar-online">
                        <div className="w-14 rounded-full">
                            <img src="https://www.shutterstock.com/shutterstock/photos/2440478803/display_1500/stock-photo-handsome-indian-young-man-posing-for-photograph-outdoors-2440478803.jpg" />
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl'>Saif Ali</h1>
                    <span className='text-sm'>Online</span>
                </div>
            </div>
        </>
    )
}

export default Chatuser
