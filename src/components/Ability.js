import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell } from 'recharts';
import './Ability.css';

const data = [
  {
    subject: 'Javascript', A: 80, fullMark: 150,
  },
  {
    subject: 'Matlab', A: 90, fullMark: 150,
  },
  {
    subject: 'C++(Arduino)', A: 60, fullMark: 150,
  },
  {
    subject: 'Python', A: 40, fullMark: 150,
  },
  {
    subject: 'Go', A: 10, fullMark: 150,
  },
  {
    subject: 'Java(Processing)', A: 50, fullMark: 150,
  },
];

const data2 = [
  { name: 'My Score', value: 720 },
  { name: 'TOEIC', value: 270 }
];

const renderActiveShape = (props) => {

  const { cx, cy, fill} = props;

  return (
  		<g>
        <text x={cx} y={cy - 15} dy={8} textAnchor="middle" fill={fill} fontSize={30}>TOEIC</text>
        <text x={cx} y={cy + 15} dy={8} textAnchor="middle" fill={fill} fontSize={30}>720</text>
      </g>
  );
};

export default function Ability () {
    return (
        <div class="grid-ability">
        <RadarChart cx={300} cy={250} outerRadius={110} width={500} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="JinYagi" dataKey="A" stroke="#889e81" fill="#889e81" fillOpacity={0.6} />
        </RadarChart>

        <PieChart width={500} height={500}>
          <Pie data={data2} cx={150} cy={230} stroke="#889e81" innerRadius={90} outerRadius={120} fill="#889e81" dataKey="value" activeIndex={1} activeShape={renderActiveShape} >
            <Cell key={0} fill={"#889e81"} />
            <Cell key={1} fill={"#889e81"} />
          </Pie>
        </PieChart>
        
      </div>
    );
}