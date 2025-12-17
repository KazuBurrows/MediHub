import React, { useState } from "react";

const ScheduleList: React.FC<ScheduleMatrixProps> = ({ facility, theatres }) => {
  const [specialityFilter, setSpecialityFilter] = useState<string>("");
  const [pediatricFilter, setPediatricFilter] = useState<string>("");

  // Helper to check if a session matches filters
  const matchesFilters = (session: Schedule) => {
    // Speciality partial match
    if (specialityFilter) {
        const speciality = session.speciality?.toLowerCase() ?? "";
        if (!speciality.includes(specialityFilter.toLowerCase())) {
        return false;
        }
    }

    // Pediatric exact match
    if (pediatricFilter) {
        if (pediatricFilter === "Yes" && session.pediatric !== 1) return false;
        if (pediatricFilter === "No" && session.pediatric !== 0) return false;
    }

    return true;
    };

  return (
    <div style={listWrapper}>
      <h2 style={titleStyle}>{facility} — Spreadsheet View</h2>

      {/* Filter bar */}
      <div style={filterBar}>
        <label>
          Speciality:
          <input
            type="text"
            value={specialityFilter}
            onChange={(e) => setSpecialityFilter(e.target.value)}
            placeholder="e.g. Surgery"
            style={filterInput}
          />
        </label>
        <label>
          Pediatric:
          <select
            value={pediatricFilter}
            onChange={(e) => setPediatricFilter(e.target.value)}
            style={filterSelect}
          >
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>

      {theatres.map((theatre, tIndex) => (
        <div key={tIndex} style={theatreBlock}>
          <h3 style={theatreTitle}>{theatre.theatre}</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Session</th>
                <th style={thStyle}>Period</th>
                <th style={thStyle}>Speciality</th>
                <th style={thStyle}>Subspeciality</th>
                <th style={thStyle}>Anaesthetic</th>
                <th style={thStyle}>Acute</th>
                <th style={thStyle}>Pediatric</th>
                <th style={thStyle}>Date/Time</th>
                <th style={thStyle}>Staff</th>
              </tr>
            </thead>
            <tbody>
              {[...theatre.am, ...theatre.pm]
                .filter(matchesFilters)
                .map((session, sIndex) => (
                  <SessionRow
                    key={`${theatre.theatre}-${sIndex}`}
                    session={session}
                    period={sIndex < theatre.am.length ? "AM" : "PM"}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

interface SessionRowProps {
  session: Schedule;
  period: string;
}

const SessionRow: React.FC<SessionRowProps> = ({ session, period }) => {
  // Check if all relevant fields are empty
  const hasData =
    session.session ||
    session.speciality ||
    session.subspeciality ||
    session.anaestheticType ||
    session.datetime ||
    (session.staff && session.staff.length > 0) ||
    session.acute !== undefined ||
    session.pediatric !== undefined;

  if (!hasData) {
    return null; // ✅ skip rendering this row
  }

  return (
    <tr style={rowStyle}>
      <td style={tdStyle}>{session.session ?? "Unnamed"}</td>
      <td style={tdStyle}>{period}</td>
      <td style={tdStyle}>{session.speciality ?? "—"}</td>
      <td style={tdStyle}>{session.subspeciality ?? "—"}</td>
      <td style={tdStyle}>{session.anaestheticType ?? "—"}</td>
      <td style={tdStyle}>
        {session.acute === 1 ? "Yes" : session.acute === 0 ? "No" : "—"}
      </td>
      <td style={tdStyle}>
        {session.pediatric === 1 ? "Yes" : session.pediatric === 0 ? "No" : "—"}
      </td>
      <td style={tdStyle}>{session.datetime ?? "—"}</td>
      <td style={tdStyle}>
        {session.staff?.length ? session.staff.join(", ") : "—"}
      </td>
    </tr>
  );
};

// Styles
const listWrapper: React.CSSProperties = {
  padding: "1.5rem",
  backgroundColor: "#f9f9f9",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
  marginBottom: "1rem",
  color: "#323338",
};

const theatreBlock: React.CSSProperties = {
  marginBottom: "2rem",
};

const theatreTitle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 600,
  marginBottom: "1rem",
  color: "#0073ea",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  overflow: "hidden",
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "0.75rem",
  backgroundColor: "#f0f4ff", // light blue header
  color: "#323338",
  fontWeight: 600,
  borderBottom: "2px solid #e0e0e0",
};

const tdStyle: React.CSSProperties = {
  padding: "0.75rem",
  borderBottom: "1px solid #e0e0e0",
  fontSize: "0.95rem",
  color: "#444",
};

const rowStyle: React.CSSProperties = {
  transition: "background-color 0.2s ease",
};

(rowStyle as any)[":hover"] = {
  backgroundColor: "#f9fafc", // subtle hover effect
};

const filterBar: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
  backgroundColor: "#f0f4ff",
  padding: "0.75rem",
  borderRadius: "8px",
};

const filterInput: React.CSSProperties = {
  marginLeft: "0.5rem",
  padding: "0.4rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const filterSelect: React.CSSProperties = {
  marginLeft: "0.5rem",
  padding: "0.4rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default ScheduleList;