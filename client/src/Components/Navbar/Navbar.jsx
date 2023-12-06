// import React from 'react'
// import './Navbar.css';
// import {VscBellDot} from 'react-icons/vsc';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Avatar from '@mui/material/Avatar';
// import { deepOrange, red } from '@mui/material/colors';
// import {BiSearchAlt2} from 'react-icons/bi';
// import Sidebar from '../Sidebar/Sidebar';





// const Navbar = (props) => {
//     const user = [
//         { label: 'John Smith' },
//         { label: 'Mary Johnson' },
//         { label: 'Michael Williams' },
//         { label: 'Jennifer Brown' },
//         { label: 'Robert Jones' },
//         { label: 'Lisa Davis' },
//     ]

//   return (
//     <div className="navbar">
       
//         <div className='nav-list'>
//             <span className='s1'>Courses</span>
//             <span className='s2'><input type='text' placeholder='Search for course..'/>
//                 <BiSearchAlt2 className='search-i'/>
//             </span>
//             <span className='s3'><VscBellDot className='bell'/></span>
//             <span className='s4'><Autocomplete 
//                     disablePortal
//                     id="combo-box-demo"
//                     options={user}
//                     sx={{ width: 200 }}
//                     renderInput={(params) => <TextField {...params}  />}/>
//             </span>
//             <span className='s5'> <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></span>
//         </div>

//        <Sidebar/>
       
//     </div>
//   )
// }

// export default Navbar