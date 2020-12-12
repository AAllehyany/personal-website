import Axios from 'axios';
import React, { useEffect, useState } from 'react';


const Skills = () => {

  const [skills, setSkills] = useState<string[]>([]);

  async function loadSkills() {
    try {
      const {data} = await Axios.get('.netlify/functions/skills');
      setSkills(data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadSkills()
  }, []);


  return (
    <div className="flex flex-col md:flex-row w-full items-center p-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="fill-current text-green-700 w-12 h-12 md:w-8 md:h-8 mr-1">
          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
        </svg>
      <div className="flex flex-wrap p-2">
        {skills.map(skill => <p className="text-blue-800 text-base p-1">{skill}</p>)}
      </div>
    </div>
  )
}

export default Skills;