// import React from 'react';
// import Header from '../other/Header';
// import AllTask from '../other/AllTask';

// function TaskForm() {
//     return (

//        <div>

//         <div className="max-w-lg mx-auto bg-gray-900 shadow-md rounded-lg p-6 border border-gray-300 mt-8">
         
//             <h2 className="text-2xl font-semibold text-gray-200 mb-4">Create Task</h2>
//             <form>
              
//                 <div className="mb-4">
//                     <label className="block text-white font-medium mb-2" htmlFor="taskTitle">
//                         Task Title
//                     </label>
//                     <input
//                         type="text"
//                         id="taskTitle"
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-900"
//                         placeholder="Enter task title"
//                     />
//                 </div>

               

//                 <div className="mb-4">
//                     <label className="block text-white font-medium mb-2" htmlFor="date">
//                         Date
//                     </label>
//                     <input
//                         type="date"
//                         id="date"
//                         className="w-full  border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-900"
//                     />
//                 </div>

            
//                 <div className="mb-4">
//                     <label className="block text-white font-medium mb-2" htmlFor="assignee">
//                         Assign To
//                     </label>
//                     <input
//                         type="text"
//                         id="assignee"
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-900 "
//                         placeholder="Enter assignee name"
//                     />
//                 </div>

           
//                 <div className="mb-4">
//                     <label className="block text-white font-medium mb-2" htmlFor="category">
//                         Category
//                     </label>
//                     <select
//                         id="category"
//                         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-900"
//                     >
//                         <option value="">Select category</option>
//                         <option value="Work">Work</option>
//                         <option value="Personal">Personal</option>
//                         <option value="Shopping">Shopping</option>
//                         <option value="Others">Others</option>
//                     </select>
//                 </div>

               





//                  <div className="mb-4">
//                     <label className="block text-white font-medium mb-2" htmlFor="description">
//                         Description
//                     </label>
//                     <textarea
//                         id="description"
//                         className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-900"
//                         placeholder="Enter task description "
//                     />
//                 </div>






//                  <div className="mt-6">
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//                     >
//                         Create Task
//                     </button>
//                 </div>
//             </form>

//         </div>
        
//        <AllTask/>

//         </div>



//     );
// }

// export default TaskForm;





import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard