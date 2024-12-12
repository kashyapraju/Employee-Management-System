import React from 'react';

const TaskListNumbers = ({data}) => {
    return (
        <div className="p-4 bg-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-blue-400">
                    <h2 className="text-4xl font-bold text-blue-600 mb-2">{data.taskCounts.newTask}</h2>
                    <p className="text-lg font-medium text-gray-800">New Task</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  bg-red-400">
                    <h2 className="text-4xl font-bold text-blue-600 mb-2">{data.taskCounts.completed}</h2>
                    <p className="text-lg font-medium text-gray-800">completed Task</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-green-400">
                    <h2 className="text-4xl font-bold text-blue-600 mb-2">{data.taskCounts.active}</h2>
                    <p className="text-lg font-medium text-gray-800">Accepted Task</p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center justify-center  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-yellow-400">
                    <h2 className="text-4xl font-bold text-blue-600 mb-2">{data.taskCounts.failed}</h2>
                    <p className="text-lg font-medium text-gray-800">Failed Task</p>
                </div>
            </div>
        </div>
    );
};

export default TaskListNumbers;
