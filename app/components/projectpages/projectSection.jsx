import Image from "next/image";

export default function ProjectSection({ title, description, image }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full mb-10">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative h-fit">
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-3xl">
          {title}
        </p>
      </div>
      <div className="overflow-hidden flex items-center justify-center border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div>
          <p className="text-xl mb-10">{description}</p>
        </div>
        {image && (
          <Image
            src={image}
            width={400}
            height={400}
            alt={title}
            className="mx-10 ml-20 min-w-[40%] rounded-lg transition-all duration-1000 hover:scale-110"
          />
        )}
      </div>
    </div>
  );
}
