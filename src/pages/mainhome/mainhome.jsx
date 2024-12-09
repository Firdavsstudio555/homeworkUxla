import { Link } from "react-router-dom";
import { MainHead } from "../../components/mainhead";
import { Sidebar } from "../../components/sidebar";

export const MainHome = () => {
    return (
        <div>
            <MainHead />  
            <div>
              <Sidebar />
              <div>
                
              </div>
            </div>
        </div>    
    );
};