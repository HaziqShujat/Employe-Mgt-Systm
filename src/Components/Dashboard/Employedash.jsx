
import HeaderName from '../../Others/Headerdh'
import TaskCards from '../../Others/TaskCards'
import TaskListSp from '../Tasklist/TaskListSp'

// eslint-disable-next-line react/prop-types
const EmployeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-full'>

      <HeaderName data={data}/>
      <TaskCards  data={data} />
      <TaskListSp data={data} />
    </div>
  )
}

export default EmployeDashboard