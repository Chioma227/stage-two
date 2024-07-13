import React from 'react'

const CheckoutForm = () => {
    return (
        <main>
            <div>
                <label htmlFor="" className='text-[#adadad] text-[14px]'>First Name</label><span className='text-[#df1c4070]'>*</span><br />
                <input required type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
            </div>
            <div>
                <label htmlFor="" className='text-[#adadad] text-[14px]'>Last Name</label><br />
                <input required type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
            </div>
            <div>
                <label htmlFor="" className='text-[#adadad] text-[14px]'>Street Address</label><span className='text-[#df1c4070]'>*</span><br />
                <input required type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
            </div>
            <div>
                <label htmlFor="" className='text-[#adadad] text-[14px]'>Apartment, Floor,etc(optional)</label><br />
                <input required type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
            </div>
            <div>
                <label htmlFor="" className='text-[#adadad] text-[14px]'>Town / City</label><span className='text-[#df1c4070]'>*</span><br />
                <input required type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
            </div>
            <div>
                <label htmlFor="" className='text-[#adadad] text-[14px]'>Phone Number</label><span className='text-[#df1c4070]'>*</span><br />
                <input required type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
            </div>
            <div>
                <label htmlFor="" className='text-[#adadad] text-[14px]'>Email Address</label><span className='text-[#df1c4070]'>*</span><br />
                <input required type="text" className='outline-none border-none bg-inputBG px-[6px] py-[8px] md:w-[400px] w-full mb-[20px] rounded-[5px]' />
            </div>
            <div className='flex items-center '>
                <input required type="checkbox" className=' accent-orange text-white' /><span className='sm:text-base text-[12px]'>Save this information for fast checkout next time</span>
            </div>
        </main>
    )
}

export default CheckoutForm
