// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact me
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <p>
            If you have any questions or opportunities, please do not hesitate
            to contact me. I'd love to chat!
          </p>
        </div>
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <Link href={`mailto:${personalData.email}`}>
                <MdAlternateEmail
                  className="bg-[#8b98a5] active:bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
              </Link>
              <span>{personalData.email}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
