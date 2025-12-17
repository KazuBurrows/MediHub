import React from "react";
import ScheduleMatrix from "../components/matrix";


const scheduleData: { facility: string; theatres: TheatreSchedule[] }[] = [
  {
    facility: "Burwood",
    theatres: [
      {
        theatre: "BOT4",
        am: [
          { session: "Session A", speciality: "Orthopaedics", subspeciality: "Hip", acute: 0, pediatric: 0, anaestheticType: "General", datetime: "06:00-09:15", staff: ["Dr. Smith", "Nurse Lee"] },
          { session: "Session B", speciality: "Orthopaedics", subspeciality: "Knee", acute: 1, pediatric: 0, anaestheticType: "Spinal", datetime: "09:30-12:00", staff: ["Dr. Patel", "Nurse Wong"] },
          {}, {}, {}, {}, {}
        ],
        pm: [
          { session: "Session C", speciality: "General Surgery", subspeciality: "Colorectal", acute: 0, pediatric: 0, anaestheticType: "General", datetime: "13:00-16:00", staff: ["Dr. Brown", "Nurse Adams"] },
          {}, {}, {}, {}, {}, {}
        ]
      },
      {
        theatre: "BOT5",
        am: [
          {}, {}, {}, {}, {}, {
            session: "Session D", speciality: "Cardiology", subspeciality: "Electrophysiology", acute: 1, pediatric: 0, anaestheticType: "Sedation", datetime: "07:00-10:00", staff: ["Dr. Green", "Nurse Taylor"]
          }, {}
        ],
        pm: Array(7).fill({})
      }
    ]
  },
  {
    facility: "Parkside",
    theatres: [
      {
        theatre: "COT3",
        am: [
          {}, {}, {
            session: "Session E", speciality: "Paediatrics", subspeciality: "ENT", acute: 0, pediatric: 1, anaestheticType: "General", datetime: "08:00-11:00", staff: ["Dr. White", "Nurse Johnson"]
          }, {}, {}, {}, {}
        ],
        pm: [
          {}, {}, {}, {
            session: "Session F", speciality: "Dermatology", subspeciality: "Skin Cancer", acute: 0, pediatric: 0, anaestheticType: "Local", datetime: "12:30-15:00", staff: ["Dr. Black", "Nurse Evans"]
          }, {}, {}, {}
        ]
      }
    ]
  },
  {
    facility: "Womens",
    theatres: [
      {
        theatre: "OT21",
        am: [
          {}, {}, {}, {}, {
            session: "Session G", speciality: "Obstetrics", subspeciality: "C-section", acute: 0, pediatric: 1, anaestheticType: "Epidural", datetime: "07:30-10:30", staff: ["Dr. Grey", "Midwife Clark"]
          }, {}, {}
        ],
        pm: [
          {}, {}, {}, {}, {
            session: "Session H", speciality: "Gynaecology", subspeciality: "Laparoscopy", acute: 0, pediatric: 0, anaestheticType: "General", datetime: "13:00-16:00", staff: ["Dr. Hall", "Nurse Davis"]
          }, {}, {}
        ]
      }
    ]
  }
];

const ScheduleM: React.FC = () => {
  return (
    <div style={pageStyle}>
      {scheduleData.map((facilityBlock, index) => (
        <div key={index} style={matrixWrapper}>
          <ScheduleMatrix
            facility={facilityBlock.facility}
            theatres={facilityBlock.theatres}
          />
        </div>
      ))}

    </div>
  );
};

const pageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // centers horizontally
  padding: "2rem",
  paddingTop: "5rem",
  backgroundColor: "#f9f9f9",
};

const matrixWrapper: React.CSSProperties = {
  width: "80%",          // keeps table narrower than full page
  // maxWidth: "900px",     // optional max width
  marginBottom: "2rem",  // spacing between matrices
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // subtle shadow
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "8px",
};

export default ScheduleM;