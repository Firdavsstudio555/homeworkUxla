import { Link } from "react-router-dom";
import { MainHead } from "../../components/mainhead";
import { Sidebar } from "../../components/sidebar";
import { Top } from "../../components/top";


export const MainHome = () => {
  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <MainHead />
      <div className="flex justify-between">
        <Sidebar />
        <Top />
        {/* <div> */}
        {/* </div> */}
      </div>
    </div>
  );
};