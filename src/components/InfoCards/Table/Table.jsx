import React from "react";

const Table = () => {
  const tableData = [
    {
      requestId: "RQ-002-2024",
      requester: "Name Of Requested",
      subject: "Marriage Leave Request",
      dueDate: "21 Apr 2024",
    },
    // Repeat the same row for as many times as needed
    {
      requestId: "RQ-002-2024",
      requester: "Name Of Requested",
      subject: "Marriage Leave Request",
      dueDate: "21 Apr 2024",
    },
    {
      requestId: "RQ-002-2024",
      requester: "Name Of Requested",
      subject: "Marriage Leave Request",
      dueDate: "21 Apr 2024",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#579EE0", textAlign: "left" }}>
            <th style={{ padding: "8px", border: "1px solid #a3d0ff", color: "#FFFFFF" }}>
              Request ID
            </th>
            <th style={{ padding: "8px", border: "1px solid #a3d0ff", color: "#FFFFFF" }}>
              Requester
            </th>
            <th style={{ padding: "8px", border: "1px solid #a3d0ff", color: "#FFFFFF" }}>Subject</th>
            <th style={{ padding: "8px", border: "1px solid #a3d0ff", color: "#FFFFFF" }}>
              Due Date
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td style={{ padding: "8px", border: "1px solid #a3d0ff" }}>
                {row.requestId}
              </td>
              <td style={{ padding: "8px", border: "1px solid #a3d0ff" }}>
                {row.requester}
              </td>
              <td style={{ padding: "8px", border: "1px solid #a3d0ff" }}>
                {row.subject}
              </td>
              <td style={{ padding: "8px", border: "1px solid #a3d0ff" }}>
                {row.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
