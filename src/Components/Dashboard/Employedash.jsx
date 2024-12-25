
import HeaderName from '../../Others/Headerdh'
import TaskCards from '../../Others/TaskCards'
import TaskListSp from '../Tasklist/TaskListSp'

const EmployeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-full'>

      <HeaderName/>
      <TaskCards/>
      <TaskListSp/>
    </div>
  )
}

export default EmployeDashboard