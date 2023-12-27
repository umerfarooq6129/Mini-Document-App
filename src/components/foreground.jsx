import React, { useRef } from "react";
import Card from "./card";
import Search from "./search";
const foreground = () => {
  const ref = useRef();

  const data = [
    {
      desc: "lorem Ips but tristique senectum dolor sit amet, consectetur adipiscing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem Ips but tristique senectum dolor sit amet, consectetur adipiscing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem Ips but tristique senectum dolor sit amet, consectetur adipiscing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem Ips but tristique senectum dolor sit amet, consectetur adipiscing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem Ips but tristique senectum dolor sit amet, consectetur adipiscing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem Ips but tristique senectum dolor sit amet, consectetur adipiscing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
 
  ];
  return (
    <>
      <div className="w-full h-screen fixed z-[3] top-[0] left-0 p-[20px]  overflow-scroll overflow-x-hidden">
          <Search className="fixed" />
        <div ref={ref} className="gap-5 flex flex-wrap mt-[80px] ">
          {data.map((item, index) => (
              <Card
                data={item}
                reference={ref}
                key={index}
                className=""
              />
          ))}
          
        </div>
      </div>
    </>
  );
};

export default foreground;
