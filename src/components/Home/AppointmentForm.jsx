import React from 'react'

const AppoinmentForm = () => {
    return (
        <section id='appointment' className='md:max-w-[1140px] sm:max-w-[720px] w-full flex md:flex-row flex-col py-[20px] md:py-[100px] justify-between m-auto gap-7'>


            <div className='relative w-full md:w-[90%] overflow-hidden md:p-0  p-[10px]'>
                <img src="/assets/homebanner.jpg" alt="" />
               
            </div>
            <div className='w-full md:w-1/2 px-[15px] flex flex-col leading-[1.6] mt-5 md:p-0 p-[24px]'>
                <h1 className='text-[#223a66] font-bold text-2xl md:text-[44px] pb-4  '>
                    Book appoinment
                </h1>
                <p className='mb-4'>
                    Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.
                </p>


                <form action="" className="mt-[40px]">
                    <div className="mb-[1rem] flex flex-col md:flex-row justify-between gap-3">
                        <input
                            className="h-[55px] w-full md:w-1/2 bg-[#f4f9fc] p-[.375rem_.75rem]"
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            className="h-[55px] w-full md:w-1/2 bg-[#f4f9fc] p-[.375rem_.75rem]"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="mb-[1rem] flex flex-col md:flex-row justify-between gap-3">
                        <input
                            className="h-[55px] w-full md:w-1/2 bg-[#f4f9fc] p-[.375rem_.75rem]"
                            type="email"
                            placeholder="Email Address"
                        />
                        <input
                            className="h-[55px] w-full md:w-1/2 bg-[#f4f9fc] p-[.375rem_.75rem]"
                            type="tel"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="mb-[1rem] flex flex-col md:flex-row justify-between gap-3">
                        <input
                            className="h-[55px] w-full md:w-1/2 bg-[#f4f9fc] p-[.375rem_.75rem]"
                            type="text"
                            placeholder="Preferred Date"
                        />
                        <input
                            className="h-[55px] w-full md:w-1/2 bg-[#f4f9fc] p-[.375rem_.75rem]"
                            type="text"
                            placeholder="Preferred Time"
                        />
                    </div>
                    <div>
                        <textarea
                            name=""
                            className="mb-4 w-full bg-[#f4f9fc] p-[.375rem_.75rem]"
                            rows={6}
                            placeholder="Write a message"
                            id=""
                        ></textarea>
                    </div>

                    <div className="flex w-full m-auto">
                        <button className="bg-[#ab2f5d] hover:bg-rose transition-[all_ease_.35s] font-semibold uppercase text-sm py-[12px] text-white px-[32px] rounded-full m-auto">
                            Make Appointment
                        </button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default AppoinmentForm