import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with seamless checkout experience',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1489&q=80',
  },
  {
    title: 'Banking Dashboard',
    description: 'Intuitive financial management interface for modern banking',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Social Media App',
    description: 'Connected platform for sharing and engaging with content',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1474&q=80',
  },
];

export default function Work() {
  return (
    <div id="work" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Check out some of our recent projects and success stories.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}