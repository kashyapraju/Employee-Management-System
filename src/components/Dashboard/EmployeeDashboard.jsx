// import React from 'react'
// import Header from '../other/Header';
// import TaskListNumber from '../other/TaskListNumber';
// import TaskList from '../TaskList/TaskList';


// const EmployeeDashboard = () => {
//   return (
//     <>
    
//     <Header/>
//     <TaskListNumber/>
//     <TaskList/>
    
    
//     </>

     
   
//   )
// }

// export default EmployeeDashboard ;



import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard