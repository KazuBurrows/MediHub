import React, { useState } from "react";



const ScheduleMatrix: React.FC<ScheduleMatrixProps> = ({ facility, theatres }) => {
  const [selectedCell, setSelectedCell] = useState<ScheduleCell | null>(null);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleCellClick = (cell: ScheduleCell) => {
    setSelectedCell(cell);
  };

  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Facility</th>
            <th style={thStyle}>Theatre</th>
            <th style={thStyle}>AM/PM</th>
            {daysOfWeek.map((day) => (
              <th key={day} style={thStyle}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {theatres.map((theatreBlock, tIndex) => (
            <>
              {/* AM row */}
              <tr key={`${tIndex}-AM`}>
                {tIndex === 0 && (
                  <td style={facilityCell} rowSpan={theatres.length * 2}>
                    {facility}
                  </td>
                )}
                <td style={tdStyle} rowSpan={2}>{theatreBlock.theatre}</td>
                <td style={amCell}>AM</td>
                {theatreBlock.am.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    style={{ ...hoverableCell, cursor: "pointer" }}
                    onClick={() => handleCellClick(cell)}
                  >
                    <div style={cellFlexWrapper}>
                      {cell.session && <span style={pillStyle}>{cell.session}</span>}
                      {cell.speciality && <span style={pillStyle}>{cell.speciality}</span>}
                      {cell.datetime && <span style={pillStyle}>{cell.datetime}</span>}
                    </div>
                  </td>
                ))}
              </tr>
              {/* PM row */}
              <tr key={`${tIndex}-PM`}>
                <td style={pmCell}>PM</td>
                {theatreBlock.pm.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    style={{ ...hoverableCell, cursor: "pointer" }}
                    onClick={() => handleCellClick(cell)}
                  >
                    <div style={cellFlexWrapper}>
                      {cell.session && <span style={pillStyle}>{cell.session}</span>}
                      {cell.speciality && <span style={pillStyle}>{cell.speciality}</span>}
                      {cell.datetime && <span style={pillStyle}>{cell.datetime}</span>}
                    </div>
                  </td>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedCell && (
        <div style={modalOverlay} onClick={() => setSelectedCell(null)}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>Cell Details</h3>

            <p><strong>Session:</strong> {selectedCell.session || "—"}</p>
            <p><strong>Speciality:</strong> {selectedCell.speciality || "—"}</p>
            <p><strong>Subspeciality:</strong> {selectedCell.subspeciality || "—"}</p>
            <p><strong>Acute Cases:</strong> {selectedCell.acute == null
              ? "—"
              : selectedCell.pediatric === 0
                ? "No"
                : "Yes"}</p>
            <p><strong>Pediatric Cases:</strong> {selectedCell.pediatric == null
              ? "—"
              : selectedCell.pediatric === 0
                ? "No"
                : "Yes"}
            </p>
            <p><strong>Anaesthetic Type:</strong> {selectedCell.anaestheticType || "—"}</p>
            <p><strong>Date/Time:</strong> {selectedCell.datetime || "—"}</p>
            <p>
              <strong>Staff:</strong>{" "}
              {selectedCell.staff && selectedCell.staff.length > 0
                ? selectedCell.staff.join(", ")
                : "—"}
            </p>

            <button style={closeButton} onClick={() => setSelectedCell(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};


const tableStyle: React.CSSProperties = {
  borderCollapse: "separate",
  borderSpacing: "0",
  width: "100%",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};

const thStyle: React.CSSProperties = {
  minWidth: "5rem",
  padding: "12px 16px",
  backgroundColor: "#f5f6f8",
  color: "#323338",
  fontWeight: 600,
  textAlign: "center",
  borderBottom: "2px solid #e0e0e0",
};

const tdStyle: React.CSSProperties = {
  padding: "12px 16px",
  textAlign: "center",
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "#fff",
};

const hoverableCell: React.CSSProperties = {
  ...tdStyle,
  transition: "background-color 0.2s ease",
};

const facilityCell: React.CSSProperties = {
  ...tdStyle,
  backgroundColor: "#f0f4ff",
  fontWeight: 600,
};

const amCell: React.CSSProperties = {
  ...tdStyle,
  backgroundColor: "#e8f7ff",
  height: "5rem",
};

const pmCell: React.CSSProperties = {
  ...tdStyle,
  backgroundColor: "#fff7e6",
  height: "5rem",
};

const cellFlexWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
};

const pillStyle: React.CSSProperties = {
  backgroundColor: "#f5f6f8",
  borderRadius: "12px",
  padding: "4px 8px",
  fontSize: "0.85rem",
  color: "#323338",
  fontWeight: 500,
  whiteSpace: "nowrap",
};

const modalOverlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContent: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  minWidth: "300px",
};

const closeButton: React.CSSProperties = {
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#0073ea", // Monday.com blue
  color: "#fff",
  cursor: "pointer",
};



export default ScheduleMatrix;