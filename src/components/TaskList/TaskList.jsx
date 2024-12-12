// import React from 'react'

// const TaskList = () => {
//   return (

//     <div  id = "tasklist"  className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full bg-gray-900 mt-10 pl-5 pr-5'>
//     <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-red-400 h-72">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-800">Card Heading</h2>
//         <p className="text-sm text-gray-500 mt-2">December 6, 2024</p>
//         <p className="text-gray-700 mt-4">
//           This is the content area of the card. You can use it to display any information such as a brief description, notes, or other details.
//         </p>
//       </div>
//     </div>



//     <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-green-400 h-72">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-800">Card Heading</h2>
//         <p className="text-sm text-gray-500 mt-2">December 6, 2024</p>
//         <p className="text-gray-700 mt-4">
//           This is the content area of the card. You can use it to display any information such as a brief description, notes, or other details.
//         </p>
//       </div>
//     </div>




//     <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-orange-400 h-72">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-800">Card Heading</h2>
//         <p className="text-sm text-gray-500 mt-2">December 6, 2024</p>
//         <p className="text-gray-700 mt-4">
//           This is the content area of the card. You can use it to display any information such as a brief description, notes, or other details.
//         </p>
//       </div>
//     </div>



//     <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-gray-400 h-72">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-800">Card Heading</h2>
//         <p className="text-sm text-gray-500 mt-2">December 6, 2024</p>
//         <p className="text-gray-700 mt-4">
//           This is the content area of the card. You can use it to display any information such as a brief description, notes, or other details.
//         </p>
//       </div>
//     </div>




  
    

//     </div>
//   )
// }

// export default TaskList ;



import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList