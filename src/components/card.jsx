import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from 'react-icons/io5'
import { motion } from "framer-motion"

const card = ({data, reference}) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} className="relative w-60 h-72 rounded-[50px] p-10 overflow-hidden text-white bg-zinc-900/90">
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">
          {data.desc}
        </p>
        <div className="footer absolute w-full bottom-0 left-0   ">
          <div className="flex items-center justify-between px-8 py-3 ">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full  flex items-center justify-center">
              {data.close ? <IoClose /> : <LuDownload size=".7em" color="#ffff"className="cursor-pointer" /> }
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-3 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-green-200"} flex items-center justify-center cursor-pointer`}>
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
          )}
          
        </div>
      </motion.div>
    
    </>
  );
};

export default card;
