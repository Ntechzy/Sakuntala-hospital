import React from 'react'
import HoverCard from '../Card/HoverCard'

const OurDepartment = () => {
  return (
    <div>
        <div>
            <h1 className='font-bold text-2xl text-center'>Our Department</h1>
            <h3 className='text-lg text-center w-[70%] m-auto p-3'> our department Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sint. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, dignissimos. </h3>
        </div>

   <div className='flex flex-row gap-5 justify-center mt-4 w-[100%]  flex-wrap'>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   <HoverCard initialcontent='Our Department' newcontent='Our Department' hovertext='Our Department' title='Our Department'/>
   </div>
    </div>
  )
}

export default OurDepartment