import React from 'react';

const Taskform = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Task</h2>

      <form className="space-y-6">
        {/* Task Title */}
        <div>
          <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            placeholder="Enter task title"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Description */}
        <div className="flex items-center space-x-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={3} /* Adjust height to match input fields */
            placeholder="Enter task description"
            className="block w-3/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Assign To */}
        <div>
          <label htmlFor="assignTo" className="block text-sm font-medium text-gray-700">
            Assign To
          </label>
          <input
            type="text"
            id="assignTo"
            placeholder="Enter employee name"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="e.g., Design"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Taskform;
