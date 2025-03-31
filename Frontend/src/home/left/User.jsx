import React from 'react'

const User = () => {
    return (
        <div>
            <div className='flex space-x-3 px-8 py-7 hover:bg-slate-700 duration-300 cursor-pointer'>
                <div className="avatar avatar-online">
                    <div className="w-14 rounded-full">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2440478803/display_1500/stock-photo-handsome-indian-young-man-posing-for-photograph-outdoors-2440478803.jpg" />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>Saif Ali</h1>
                    <span>saif@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default User
