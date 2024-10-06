import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse  flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 rounded-2xl  justify-center'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Name label */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>

            <input
              type="text"
              name='name'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 
      placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />

          </label>

          {/* Email label */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>

            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 
      placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />

          </label>
          {/* Message label */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>

            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What is your message?"
              className='bg-tertiary py-4 px-6 
             placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />

          </label>
          <button type='submit'
            className='bg-secondary py-4 px-6 outline-none w-fit items-center text-white font-bold shadow-md shadow-primary rounded-xl flex-auto justify-center'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

      </motion.div>
    </div>
  )

}


export default SectionWrapper(Contact, "contact");
