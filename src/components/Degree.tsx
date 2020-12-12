import React from 'react';
import { IDegree } from '../models/IDegree';


const Degree: React.FC<{degree: IDegree}> = ({degree}) => (
  <div className="flex items-center p-2 ">
    <h1 className="text-base font-bold text-blue-700">{degree.type}, {degree.field}</h1>
    <span className="text-sm text-gray-700 px-1">{degree.university}</span>
    <span className="text-sm text-gray-700 px-1">{degree.completed}</span>
    <span className="text-sm text-green-500 px-1">GPA: {degree.gpa}</span>
  </div>

)

export default Degree;