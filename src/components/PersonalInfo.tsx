import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IPersonalInfo } from '../models/IPersonalInfo';


const PersonalInfo = () => {

  const [info, setInfo] = useState<IPersonalInfo>({} as IPersonalInfo);
  
  async function loadInfo() {
    try {
      const {data} = await axios.get('.netlify/functions/personal-info');
      setInfo(data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadInfo()
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center mb-2">
        <h1 className="text-4xl font-squada text-blue-800">{info.fullName}</h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row">
        <span className="text-sm font-bold text-gray-700 mr-1">{info.phone}</span>
        <span className="text-sm font-bold text-gray-700 mr-1">{info.email}</span>
        <a href="https://github.com/AAllehyany" className="text-sm font-bold text-gray-700 hover:text-blue-300">{info.github}</a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full border-b border-gray-400 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="fill-current text-yellow-600 w-12 h-12 md:w-8 md:h-8 mr-3">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p>{info.about}</p>
      </div>
    </div>
  )
}

export default PersonalInfo;