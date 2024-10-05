import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { experiences } from '../constants'

const ExperiencedCard = ({ experience }) => (

  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}

    contentArrowStyle={{ borderRight: '7px solid #232631' }}

    date={experience.date}
    iconStyle={{vackground: experience.iconBg}}
    icon={
      <div>
        <img
        src={experience.icon}
        alt={experience.company_name}
        className='w-[60%] h-[60%] object-contain'
        >
        </img>
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    </div>
  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}
        >What I have done so far</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>

      </motion.div>

      <div className='mt-20 flex flex-col '>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperiencedCard key={index} experience=
              {experience} />
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")