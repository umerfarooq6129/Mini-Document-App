import React from "react";

const background = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <p className="absolute bottom-[5%] w-full py-10 flex justify-center font-semibold text-zinc-500">
          Move your card anywhere on the screen
        </p>
        <h1 className="absolute top-1/2 left-1/2 text-[5vw] -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 leading-none tracking-tighter">
          Mini Document App.
        </h1>
      </div>
    </>
  );
};

export default background;
