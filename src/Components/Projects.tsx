import React from 'react'
import Card from './Card';
import { myProjects } from '@/Utils/Constants';

const Projects = () => {
  return (
      <section
          id="projects"
          className="flex h-full w-full flex-col items-center justify-center py-7 gap-10">
          <h1 className="text-6xl">My Projects</h1>
          <div>
              {myProjects.map(({name, image, linkCode, linkDemo}) => (
                  <Card name={name} image={image} linkCode={linkCode} linkDemo={linkDemo} />
              ))}
          </div>
      </section>
  );
}

export default Projects