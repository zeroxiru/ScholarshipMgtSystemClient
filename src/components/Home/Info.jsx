import React from 'react';
import { motion } from 'motion/react';
import { CiFaceSmile } from "react-icons/ci"
import CountUp from "react-countup"
import { BiBook, BiSolidGraduation, BiWorld } from "react-icons/bi"
import { FaMedal, FaUserTie } from "react-icons/fa"

const Info = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-800 backdrop-blur-md my-12 mt-16 py-5'>
            <div className='px-5 flex justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center py-4 flex-wrap max-w-2xl lg:max-w-6xl mx-auto'>
            <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} className="flex items-center border-r-ThirdColor  gap-1 w-fit">
                    <CiFaceSmile className="text-3xl text-black dark:text-white" />
                    <div className="font-bold text-orange-400 md:text-xl">
                        <CountUp className="text-2xl md:text-3xl" end={37} enableScrollSpy={true} duration={7} delay={3} /><span className="">K+</span>
                        <p className="text-SecondaryColor mr-10 dark:text-white">Satisfied Client</p>
                    </div>

                </motion.div>
                <motion.div initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} className="flex items-center border-r-ThirdColor  gap-1 w-fit">
                    <BiSolidGraduation className="text-3xl md:text-4xl text-ThirdColor dark:text-white" />
                    <div className="font-bold text-slate-600 md:text-xl">
                        <CountUp className="text-2xl md:text-3xl" end={100} enableScrollSpy={true} duration={3} delay={1} />
                        <span className="">+</span>
                        <p className="text-SecondaryColor mr-2 dark:text-white ">Scholarship Granted</p>
                    </div>

                </motion.div>
                <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} className="flex items-center  border-r-ThirdColor  gap-1 w-fit">
                    <FaUserTie className="text-3xl text-ThirdColor dark:text-white" />
                    <div className="font-bold text-orange-400 md:text-xl">
                        <CountUp className="text-2xl md:text-3xl" end={35} enableScrollSpy={true} duration={5} delay={1} /><span className="">+</span>
                        <p className="text-SecondaryColor mr-3 dark:text-white">Moderators</p>
                    </div>

                </motion.div>
                <motion.div initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} className="flex items-center border-r-ThirdColor  gap-1 w-fit">
                    <FaMedal className="text-3xl text-ThirdColor dark:text-white" />
                    <div className="font-bold text-slate-600 md:text-xl">
                        <CountUp className="text-2xl md:text-3xl" end={7} enableScrollSpy={true} duration={3} delay={1} /><span className="">+</span>
                        <p className="text-SecondaryColor mr-2 dark:text-white">Years of Experience</p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Info;