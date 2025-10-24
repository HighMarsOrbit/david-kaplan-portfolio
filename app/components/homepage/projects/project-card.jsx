// @flow strict
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative h-fit">
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-3xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden flex items-center justify-center border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div>
          <p className="text-xl mb-10">{project.description}</p>
          {project.link && (
            <Link href={project.link}>
              <span className="relative inline-block group transition-transform duration-500 hover:scale-110">
                <span className="block text-xl font-bold text-gray-400 whitespace-nowrap">
                  Explore more:
                </span>

                <span className="absolute inset-0 left-0 w-0 h-full group-hover:w-full overflow-hidden transition-[width] duration-700 ease-out whitespace-nowrap">
                  <span className="block text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Explore more:
                  </span>
                </span>
              </span>
            </Link>
          )}
        </div>
        {project.image && (
          <Image
            src={project.image}
            width={400}
            height={400}
            alt={project.name}
            className="mx-10 ml-20 min-w-[40%] rounded-lg transition-all duration-1000 hover:scale-110"
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
