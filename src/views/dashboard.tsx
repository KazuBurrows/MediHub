import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

const Dashboard: React.FC = () => {
    // Demo data
    const fteData = [
        { name: "Doctors", value: 563 },
        { name: "Nurses", value: 750 },
        { name: "Allied Health", value: 125 },
        { name: "Admin", value: 62 },
    ];
    const totalFTEs = fteData.reduce((sum, d) => sum + d.value, 0);

    const bedData = [
        { name: "Total Beds", value: 800 },
        { name: "Occupied Beds", value: 680 },
        { name: "ICU Beds", value: 60 },
        { name: "ICU Occupied", value: 54 },
        { name: "Maternity Beds", value: 80 },
        { name: "Maternity Occupied", value: 68 },
    ];

    const budgetData = [
        { name: "Staff Costs", value: 1400000 },
        { name: "Supplies & Equipment", value: 500000 },
        { name: "Facilities & Maintenance", value: 200000 },
        { name: "Remaining", value: 400000 },
    ];
    const COLORS = ["#0073ea", "#00c49f", "#ffbb28", "#ff8042"];

    return (
        <div style={dashboardWrapper}>
            <h1 style={dashboardTitle}>Dashboard</h1>
            <h2>Forecast Overview (next 4 weeks)</h2>

            {/* Top row: FTEs + Budget */}
            <div style={cardGrid}>
                {/* FTEs */}
                <div style={cardStyle}>
                    <h3 style={cardHeader}>FTEs</h3>
                    <p style={cardValue}>{totalFTEs}</p>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={fteData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#0073ea" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p style={subText}>Overtime Hours: 320</p>
                </div>

                {/* Budget */}
                <div style={cardStyle}>
                    <h3 style={cardHeader}>Budget</h3>
                    <p style={cardValue}>$2,500,000</p>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={budgetData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                            >
                                {budgetData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <p style={subText}>Spent: $2,100,000 (84%)</p>
                </div>
            </div>

            {/* Bottom row: Beds full width */}
            <div style={fullWidthCard}>
                <h3 style={cardHeader}>Hospital Beds</h3>
                <p style={cardValue}>800</p>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={bedData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#00c49f" />
                    </BarChart>
                </ResponsiveContainer>
                <p style={subText}>Occupancy Rate: {(680 / 800 * 100).toFixed(1)}%</p>
                <p style={subText}>Avg Length of Stay: 4.3 days</p>
            </div>
        </div>
    );
};

// Styles
const dashboardWrapper: React.CSSProperties = {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
};

const dashboardTitle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "1.8rem",
    fontWeight: 600,
    color: "#323338",
};

const cardGrid: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    marginBottom: "2rem", // spacing before beds card
};

const cardStyle: React.CSSProperties = {
    flex: "1 1 300px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const fullWidthCard: React.CSSProperties = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const cardHeader: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: 500,
    marginBottom: "1rem",
    color: "#555",
};

const cardValue: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#0073ea",
};

const subText: React.CSSProperties = {
    marginTop: "0.5rem",
    fontSize: "0.9rem",
    color: "#444",
};

export default Dashboard;