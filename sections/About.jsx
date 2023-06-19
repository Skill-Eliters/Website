'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Skill Eliters" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">We at Skill Eliters</span>  are on a mission to help the budding entrepreneurs in 
        converting their idea into a full fledged startup by providing them technical support .{' '}
        <span className="font-extrabold text-white">
        We are a community of 60+ members
        </span>{' '}
        currently, 
        <span className="font-extrabold text-white"></span> Our main objective is to lit the spirit of entrepreneurship among the youths and use their    {' '}
        <span className="font-extrabold text-white">revolutionary ideas</span>to solve the real world problems. Henceforth we invite all of you to come and join us in revolutionising the world.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
