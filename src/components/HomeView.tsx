import React from 'react';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';


const HomeView = () => (
  <div className="container mx-auto">
    <div className="flex w-full border-b border-gray-500 justify-start">
      <Education />
    </div>
    <div className="flex w-full justify-start">
      <Skills />
    </div>

    <Projects />
  </div>
)

export default HomeView;