import React from 'react'

import MasonryGallery from './MasonryGallery'
import RatingWorks from './RatingWorks'
import Footer from './Footer'
import { motion } from 'framer-motion'
import ReelsSection from './ReelsSection'


function NewWorkWithUs() {
  return (
    <section>
    <motion.h2
        className="text-4xl md:text-5xl font-bold text-center  mt-6 "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work <span className="text-green-800">with us</span>
      </motion.h2>

  
    <div className='md:px-12 lg:px-14 xl:px-20 bg-[#f8f7f0]'>
    
    <section className=' mt-20'>
        <ReelsSection/>
    </section>
        <MasonryGallery/>
        <RatingWorks/>
        
     <section className=' mt-20'>
           <Footer/>
     </section>
    </div>
      </section>
  )
}

export default NewWorkWithUs