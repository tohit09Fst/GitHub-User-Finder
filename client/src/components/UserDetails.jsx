import React from 'react';
import { FaGithub, FaUserFriends, FaUsers, FaBookOpen, FaTimes, FaMapMarkerAlt, FaEnvelope, FaBuilding, FaLink, FaTwitter, FaUserShield, FaCalendarAlt, FaCheckCircle, FaUserTie } from 'react-icons/fa';

const iconColors = {
  repo: '#4285F4',      // Blue
  followers: '#FFD600', // Gold
  following: '#34A853', // Green
  location: '#8e44ad',  // Purple
  email: '#e74c3c',     // Red
  company: '#1abc9c',   // Teal
  website: '#e67e22',   // Orange
  twitter: '#1da1f2',   // Twitter Blue
  hireable: '#e84393',  // Pink
  type: '#636e72',      // Gray
  staff: '#fdcb6e',     // Yellow
  joined: '#00b894',    // Green
  updated: '#0984e3',   // Blue
};

const UserDetails = ({ user, onClose }) => (
  <div className="user-details">
    <button className="close-btn" onClick={onClose} title="Close">
      <FaTimes style={{ color: '#e74c3c' }} />
    </button>
    <img src={user.avatar_url} alt={user.login} className="avatar-large" />
    <h2>{user.name || user.login}</h2>
    <p style={{margin: 0, color: '#888', fontSize: '0.98rem'}}>@{user.login}</p>
    {user.bio && <p className="bio">{user.bio}</p>}
    <div className="stats">
      <span><FaBookOpen className="icon" style={{ color: iconColors.repo }} /> <strong>Repos:</strong> {user.public_repos}</span>
      <span><FaUsers className="icon" style={{ color: iconColors.followers }} /> <strong>Followers:</strong> {user.followers}</span>
      <span><FaUserFriends className="icon" style={{ color: iconColors.following }} /> <strong>Following:</strong> {user.following}</span>
    </div>
    <div className="profile-details">
      {user.location && (
        <div><FaMapMarkerAlt className="icon" style={{ color: iconColors.location }} /> <strong>Location:</strong> {user.location}</div>
      )}
      {user.email && (
        <div><FaEnvelope className="icon" style={{ color: iconColors.email }} /> <strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></div>
      )}
      {user.company && (
        <div><FaBuilding className="icon" style={{ color: iconColors.company }} /> <strong>Company:</strong> {user.company}</div>
      )}
      {user.blog && user.blog !== '' && (
        <div><FaLink className="icon" style={{ color: iconColors.website }} /> <strong>Website:</strong> <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer">{user.blog}</a></div>
      )}
      {user.twitter_username && (
        <div><FaTwitter className="icon" style={{ color: iconColors.twitter }} /> <strong>Twitter:</strong> <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer">@{user.twitter_username}</a></div>
      )}
      {user.hireable !== null && (
        <div><FaUserTie className="icon" style={{ color: iconColors.hireable }} /> <strong>Hireable:</strong> {user.hireable ? <span style={{color: '#27ae60'}}><FaCheckCircle /> Yes</span> : 'No'}</div>
      )}
      <div><FaUserShield className="icon" style={{ color: iconColors.type }} /> <strong>Type:</strong> {user.type}</div>
      {user.site_admin && (
        <div><FaCheckCircle className="icon" style={{color: iconColors.staff}} /> <strong>GitHub Staff</strong></div>
      )}
      <div><FaCalendarAlt className="icon" style={{ color: iconColors.joined }} /> <strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}</div>
      <div><FaCalendarAlt className="icon" style={{ color: iconColors.updated }} /> <strong>Last Updated:</strong> {new Date(user.updated_at).toLocaleDateString()}</div>
    </div>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-link" style={{ background: 'linear-gradient(90deg, #4285F4 0%, #34A853 100%)', border: 'none' }}>
      <FaGithub className="icon" style={{ color: '#fff' }} /> View GitHub Profile
    </a>
  </div>
);

export default UserDetails;
