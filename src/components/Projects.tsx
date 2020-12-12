import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IProject } from '../models/IProject';
import ListProject from './ListProject';


const Projects = () => {

  const [projects, setProjects] = useState<IProject[]>([]);

  async function loadProjects() {
    try {
      const {data} = await Axios.get('api/projects');
      setProjects(data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadProjects()
  }, []);

  return (
    <div className="flex flex-wrap justify-start">
    {projects.map((project: IProject) => <ListProject project={project} />)}
    </div>
  )
}

export default Projects;