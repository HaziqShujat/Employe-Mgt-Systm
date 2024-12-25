const TaskCards = () => {
    return (
      <div className="flex flex-wrap  justify-center md:justify-between mt-10 gap-5 text-yellow-50">
        <div className="py-10 px-5 rounded-xl w-[90%] md:w-[30%] bg-gradient-to-r from-teal-500 to-teal-800 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-center">0</h1>
          <h1 className="text-2xl font-bold text-center">Tasks</h1>
        </div>
        <div className="py-10 px-5 rounded-xl w-[90%] md:w-[30%] bg-gradient-to-r from-stone-400 to-stone-700 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-center">0</h1>
          <h1 className="text-2xl font-bold text-center">Tasks</h1>
        </div>
        <div className="py-10 px-5 rounded-xl w-[90%] md:w-[30%] bg-gradient-to-r from-lime-500 to-lime-800 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-center">0</h1>
          <h1 className="text-2xl font-bold text-center">Tasks</h1>
        </div>
        <div className="py-10 px-5 rounded-xl w-[90%] md:w-[30%] bg-gradient-to-r from-cyan-400  to-sky-600 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-center">0</h1>
          <h1 className="text-2xl font-bold text-center">Tasks</h1>
        </div>
      </div>
    );
  };
  
  export default TaskCards;
  