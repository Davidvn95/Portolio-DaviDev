import useChangePath from '@/Hooks/useChangePath';
import React from 'react'

const AboutPage = () => {
  // useChangePath('about')
  return (
      <section id='about' className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className='font-roboto text-5xl'>About me</h1>
      </section>
  );
}

export default AboutPage;