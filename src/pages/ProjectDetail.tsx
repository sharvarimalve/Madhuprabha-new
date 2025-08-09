import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft } from 'lucide-react';
import { getProjectById } from '../data/projects';

type LocationState = {
  project?: any;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const projectFromState = state?.project;
  const projectFromData = id ? getProjectById(Number(id)) : undefined;
  const project = projectFromState || projectFromData;

  if (!project) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
          <Link to="/projects" className="text-amber-600 underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const galleryImages: string[] = project.images?.length
    ? project.images
    : project.image
    ? [project.image]
    : [];

  return (
    <div className="min-h-screen pt-28 pb-16">
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{project.location}</span>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">About the Project</h2>
            {project.description && (
              <p className="text-gray-700 mb-6">{project.description}</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {project.status && (
                <div className="p-4 rounded-xl bg-gray-50">
                  <div className="text-gray-500">Status</div>
                  <div className="font-semibold">{project.status}</div>
                </div>
              )}
              {project.duration && (
                <div className="p-4 rounded-xl bg-gray-50">
                  <div className="text-gray-500">Duration</div>
                  <div className="font-semibold">{project.duration}</div>
                </div>
              )}
              {project.team && (
                <div className="p-4 rounded-xl bg-gray-50">
                  <div className="text-gray-500">Team</div>
                  <div className="font-semibold">{project.team}</div>
                </div>
              )}
            </div>
          </div>

          {galleryImages.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryImages.map((src: string, i: number) => (
                  <img key={i} src={src} alt={`${project.title} ${i + 1}`} className="w-full h-64 md:h-80 object-cover rounded-xl shadow" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

 
