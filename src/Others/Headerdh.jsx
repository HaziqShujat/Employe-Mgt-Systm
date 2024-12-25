const HeaderName = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-end justify-between  p-5 text-white">
      <h1 className="text-xl text-black md:text-2xl font-medium text-center md:text-left">
        Hello <br />
        <span className="text-2xl md:text-3xl">Anyone</span>
      </h1>
      <button className="mt-4 md:mt-0 shadow-md bg-emerald-700 text-white px-5 py-3 text-base md:text-lg font-bold rounded-full hover:bg-emerald-950 transition duration-300">
        Log out
      </button>
    </div>
  );
};

export default HeaderName;
