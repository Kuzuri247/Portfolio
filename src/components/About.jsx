import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../constants';
import { textVariant } from '../utils/motion';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient  rouded-[20-px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280-px] flex justify-center-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-20 object-contain"
          ></img>
          <h3 className="text-white text-[20-px]font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-center text-[17px] w-full leading-[30px]  "
      >
        As a newcomer to web development, I have built a solid foundation in key
        technologies, particularly the MERN stack, which includes MongoDB,
        Express.js, React, and Node.js. I am familiar with Object-Relational
        Mappers like Sequelize and Mongoose for database interactions.
        Additionally, I have begun exploring Next.js for server-side rendering
        and static site generation, as well as Docker for automating application
        deployment through containerization. With this diverse skill set, I am
        well-equipped to tackle various projects and am eager to deepen my
        expertise through hands-on practice.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10  ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
