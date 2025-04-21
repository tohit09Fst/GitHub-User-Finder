import React from 'react';
import { FaGithub } from 'react-icons/fa';

const UserList = ({ users, onSelectUser }) => (
  <div className="user-list">
    {users.length === 0 ? (
      <p className="no-users">No users found.</p>
    ) : (
      users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <div className="user-info">
            <h3>{user.login}</h3>
            <button className="details-btn" onClick={() => onSelectUser(user.login)}>
              <FaGithub className="icon" /> View Details
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);

export default UserList;
