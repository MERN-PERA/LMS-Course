import useState from "react";
import "./Sidebar.css";
import Logo from "../../Assets/Evotech.png";
import { SideBarData } from "../Data.js/Data";
import { Link } from "react-router-dom";
import Learn from "../Video/Learn.mp4";

const Sidebar = () => {
  // const[selected,setSelected]=useState(0)

  // const profilelog =()=>{

  // }

  return (
    <div className="Sidebar">
      {/*logo */}
      {/* <div className="logo">
            <img src={Logo} alt=''/>
        </div> */}
      <div className="headertitle">
        <div className="evotectlogo"></div>
        <div className="tex"></div>
        <div className="dashboardtitle">
          <h1>
            LEARNING MANAGEMENT SYSTEM | EVOTEC HIGHER EDUCATIONAL INSTITUTE
          </h1>
        </div>
      </div>

      <div className="menudrop">
        <div className="left">
          <div className="hllspace"></div>

          <Link to="/">
            <div className="onetex">
              <button className="btnone">Dashboard</button>
            </div>
          </Link>

          <div className="hllspace"></div>


          <Link to="/courses">
            <div className="onetex">
              <button className="btnone">Courses</button>
            </div>
          </Link>
         

          <div className="hllspace"></div>

          <Link to="/profile">
            <div className="onetex">
              <button className="btnone">Student Profile</button>
            </div>
          </Link>


          <div className="hllspace"></div>

          <Link to="/payment">
            <div className="onetex">
              <button className="btnone">Payment</button>
            </div>
          </Link>

          <div className="hllspace"></div>

          {/* <Link to="/settings">
            <div className="onetex">
              <button className="btnone">Admin</button>
            </div>
          </Link> */}

        </div>

        <div className="right">
          <video src={Learn} autoPlay loop muted />
        </div>
      </div>

      {/*menu */}
      {/* <div className="menu">
            {SideBarData.map((item,index)=>{
              return(
                  <div className={selected===index?'menuItem active':'menuItem'}
                  key={index}
                  onClick={()=>setSelected(index)}
                  >
                    <item.icon/>
                    <span>
                      {item.heading}
                    </span>
                  </div>
              )
            })} */}
      {/* <div className="menuItem">
            
          </div> */}

      {/* </div> */}
    </div>
  );
};

export default Sidebar;
