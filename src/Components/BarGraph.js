// import React from "react";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import orangerec from "../Images/orangeRect.png";
// import pinkRect from "../Images/pinkRect.png";
// import greenRect from "../Images/greenRect.png";
// import "../Styles/bargraph.css"

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const data = [
//   { year: "Older", Disposed: 40, Pending: 70 },
//   { year: "2019", Disposed: 15, Pending: 35 },
//   { year: "2020", Disposed: 45, Pending: 20 },
//   { year: "2021", Disposed: 30, Pending: 15 },
//   { year: "2022", Disposed: 50, Pending: 20 },
//   { year: "2023", Disposed: 45, Pending: 25 },
//   { year: "2024", Disposed: 20, Pending: 40 },
// ];

// const BarGraph = () => {
//   return (
//     <div className="bar-container">
//     <div className="bar-graph">
//       <h2 className="text-xl font-bold mb-4">Cases</h2>
//       <ResponsiveContainer width="100%" height={350}>
//         <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="year" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="Disposed" fill="#2291EB" barSize={20} radius={[10, 10, 10, 10]} />
//           <Bar dataKey="Pending" fill="#D95F95" barSize={20} radius={[10, 10, 10, 10]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
  
//     <div className="upcoming-hearings">
//       <div className="frame">
//         <CalendarMonthIcon className="calendar-icon" />
//         <h2 className="title">Upcoming Hearings</h2>
//       </div>
//       <div className="frame2">
//         <div className="sub-frame1">
//           <img src={orangerec} alt="orangeRect" className="img" />
//           <h2 className="values">2</h2>
//           <h3 className="content">This Week</h3>
//         </div>
//         <div className="sub-frame2">
//           <img src={pinkRect} alt="pinkrect" className="img" />
//           <h2 className="values">9</h2>
//           <h3 className="content">This Month</h3>
//         </div>
//         <div className="sub-frame3">
//           <img src={greenRect} alt="greenrect" className="img" />
//           <h2 className="values">14</h2>
//           <h3 className="content">Next Month</h3>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default BarGraph;
