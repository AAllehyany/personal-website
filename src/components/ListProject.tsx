import { spawn } from 'child_process';
import React from 'react';
import { IProject } from '../models/IProject';


const ListProject: React.FC<{project: IProject}> = ({project}) => (
  <div className="w-full max-w-sm border border-gray-800 rounded-sm m-1 p-2 flex flex-col">
    <span className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-yellow-700 w-4 h-4 mr-1">
      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
      <a href={project.link} className="text-base font-bold text-blue-800 hover:text-blue-900">{project.description}</a>
    </span>
    {project.info && project.info.map(text => <span className="px-2 py-1 text-base text-gray-900">{text}</span>)}
  </div>
)


export default ListProject;