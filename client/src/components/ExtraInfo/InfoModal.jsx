import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const InfoModal = () => {
  const [close, setClose] = useState(true);

  let toggleModal = () => {
    setClose(!close);
  };

  return (
    <div className="hidden showbar:block">
      {close && (
        <div className="h-[60px] bg-purple-500 text-white fixed w-[100%] justify-center items-center bottom-0 left-0 z-10 flex space-x-3 ">
          <span className="text-xl cursor-pointer" onClick={toggleModal}>
            <IoMdClose />
          </span>
          <span className=" tracking-wide">
            SherpaThreads was an idea to deepen my understanding of MERN,
            curious to see what sherpaThread has to offer? Feel free to sign in
            (Google Browser)
          </span>
          <span className="border border-white p-[8px] hover:opacity-80 duration-75 rounded-sm">
            <a
              href="https://github.com/Ajit-khadka/SherpaThreads"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-2"
            >
              <span className="text-[20px]">
                <FaGithub />
              </span>
              <span>More info</span>
            </a>
          </span>
        </div>
      )}
    </div>
  );
};

export default InfoModal;
