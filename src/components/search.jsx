import React from "react";

const search = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="h-20 text-center justify-center mt-[50px]">
        <h1 className="font-semibold text-[2.5vw] text-white">Add Your Details</h1>
          <form className="flex flex-row text-center gap-2 justify-center ">
          <input
            type="text"
            className="w-[600px] px-[20px] py-4 rounded-[50px] text-zinc-400 text-[1.2vw] border-none mt-[10px] bg-zinc-900/70"
          />
          <button type="submit" className="px-[60px] py-3 rounded-[50px] bg-zinc-700 hover:bg-zinc-900 hover:text-white text-[1.5vw] font-semibold">Submit</button>
        </form>
          </div>
          
      </div>
    </>
  );
};

export default search;
