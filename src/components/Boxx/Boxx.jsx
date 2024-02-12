import React, { useState } from 'react';
import './box.css'
const MemberList = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'Rituraj', ieeeId: '123456', email: 'dekarituraj95@gmail.com', phone: '7086325788', address: 'Tezpur, City', status: 'Approved' },
    { id: 2, name: 'Achyut', ieeeId: '789012', email: 'Achyutkrishna32@gmail.com', phone: '9876xxxxx', address: 'Tezpur, Town', status: 'Pending' },
    // Add more member objects as needed
  ]);

  const handleDisapprove = (id) => {
    // Handle disapproval logic (update status, API call, etc.)
    console.log(`Disapprove member with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle deletion logic (remove from the list, API call, etc.)
    console.log(`Delete member with ID: ${id}`);
  };

  return (
    <div className="member-list">
      <table>
        <thead className='thead'>
          <tr>
            <th>Name</th>
            <th>IEEE ID</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.ieeeId}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.address}</td>
              <td>{member.status}</td>
              <td>
                <button onClick={() => handleDisapprove(member.id)}>Disapprove</button>
                <button onClick={() => handleDelete(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
