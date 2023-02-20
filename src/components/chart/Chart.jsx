// import "./chart.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function Chart({ title, data, dataKey, grid }) {
//   return (
//     <div className="chart">
//       <h3 className="chartTitle">{title}</h3>
//       {/* <ResponsiveContainer width="100%" aspect={4 / 1}></ResponsiveContainer> */}
//       <ResponsiveContainer
//         width="100%"
//         aspect={3 / 1}
//         // height="40vh"
//       >
//         <LineChart data={data}>
//           <XAxis dataKey="name" stroke="#5550bd"></XAxis>
//           <Line
//             type="monotone"
//             dataKey={dataKey}
//             stroke="#5550bd"
//             // width="30"
//           />
//           <Tooltip />
//           {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3.4 / 1.5}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
