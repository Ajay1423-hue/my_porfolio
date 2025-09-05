'use client';
import { motion } from 'framer-motion';
import site from '@/data/site';

export default function Experience(){
  return (
    <div className='min-h-screen relative py-12'>
      <div className='blob blob1'></div>
      <div className='blob blob2'></div>
      <h1 className='section-title relative z-10 dark:text-white'>Experience</h1>
      <div className='grid md:grid-cols-2 gap-6 relative z-10'>
        {site.experience.map((exp,idx)=>(
          <motion.div key={idx} className='card p-6'
            initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6, delay:idx*0.2 }}>
            <div className='font-semibold text-xl'>{exp.role}</div>
            <div className='text-sm text-gray-600 dark:text-gray-300'>{exp.company} • {exp.duration}</div>
            <ul className='mt-3 list-disc list-inside text-gray-700 dark:text-gray-300'>
              {exp.details.map((d,i)=>(<li key={i}>{d}</li>))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
