import Alltasks from "../../Others/Alltasks";
import HeaderName from "../../Others/Headerdh";
import Taskform from "../../Others/Taskform";

const AdminDashbord = () => {
  return (
    <div className="min-h-screen w-full p-10 bg-gray-100">
      <HeaderName />

     <Taskform/>
     <Alltasks/>
    </div>
  );
};

export default AdminDashbord;
