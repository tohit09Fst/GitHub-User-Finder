import React from 'react';
import {
  FaGithub, FaUserFriends, FaUsers, FaBookOpen, FaTimes,
  FaMapMarkerAlt, FaEnvelope, FaBuilding, FaLink, FaTwitter,
  FaUserShield, FaCalendarAlt, FaCheckCircle, FaUserTie
} from 'react-icons/fa';

const iconColors = {
  repo: '#4285F4',
  followers: '#FFD600',
  following: '#34A853',
  location: '#8e44ad',
  email: '#e74c3c',
  company: '#1abc9c',
  website: '#e67e22',
  twitter: '#1da1f2',
  hireable: '#e84393',
  type: '#636e72',
  staff: '#fdcb6e',
  joined: '#00b894',
  updated: '#0984e3',
};

const UserDetails = ({ user, onClose }) => (
  <div className="w-full overflow-y-auto bg-gray-50 flex justify-center items-start  px-4">
    <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-8 relative">
      <button
        className="absolute top-4 right-4 text-red-500 text-xl hover:scale-110 transition"
        onClick={onClose}
        title="Close"
      >
        <FaTimes />
      </button>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-full w-32 h-32 object-cover shadow-md"
        />
        <h2 className="text-2xl font-semibold">{user.name || user.login}</h2>
        <p className="text-gray-500 text-sm">@{user.login}</p>
        {user.bio && <p className="text-center text-gray-700 max-w-xl">{user.bio}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
        <div className="flex items-center justify-center space-x-2">
          <FaBookOpen style={{ color: iconColors.repo }} />
          <span><strong>Repos:</strong> {user.public_repos}</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaUsers style={{ color: iconColors.followers }} />
          <span><strong>Followers:</strong> {user.followers}</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaUserFriends style={{ color: iconColors.following }} />
          <span><strong>Following:</strong> {user.following}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-gray-700 text-sm">
        {user.location && (
          <div><FaMapMarkerAlt style={{ color: iconColors.location }} className="inline-block mr-2" />
            <strong>Location:</strong> {user.location}</div>
        )}
        {user.email && (
          <div><FaEnvelope style={{ color: iconColors.email }} className="inline-block mr-2" />
            <strong>Email:</strong> <a href={`mailto:${user.email}`} className="text-blue-600">{user.email}</a></div>
        )}
        {user.company && (
          <div><FaBuilding style={{ color: iconColors.company }} className="inline-block mr-2" />
            <strong>Company:</strong> {user.company}</div>
        )}
        {user.blog && (
          <div><FaLink style={{ color: iconColors.website }} className="inline-block mr-2" />
            <strong>Website:</strong> <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{user.blog}</a></div>
        )}
        {user.twitter_username && (
          <div><FaTwitter style={{ color: iconColors.twitter }} className="inline-block mr-2" />
            <strong>Twitter:</strong> <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">@{user.twitter_username}</a></div>
        )}
        {user.hireable !== null && (
          <div><FaUserTie style={{ color: iconColors.hireable }} className="inline-block mr-2" />
            <strong>Hireable:</strong> {user.hireable ? <span className="text-green-600"><FaCheckCircle className="inline-block mr-1" />Yes</span> : 'No'}</div>
        )}
        <div><FaUserShield style={{ color: iconColors.type }} className="inline-block mr-2" />
          <strong>Type:</strong> {user.type}</div>
        {user.site_admin && (
          <div><FaCheckCircle style={{ color: iconColors.staff }} className="inline-block mr-2" />
            <strong>GitHub Staff</strong></div>
        )}
        <div><FaCalendarAlt style={{ color: iconColors.joined }} className="inline-block mr-2" />
          <strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}</div>
        <div><FaCalendarAlt style={{ color: iconColors.updated }} className="inline-block mr-2" />
          <strong>Last Updated:</strong> {new Date(user.updated_at).toLocaleDateString()}</div>
      </div>

      <div className="mt-6 text-center">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          <FaGithub className="mr-2" /> View GitHub Profile
        </a>
      </div>
    </div>
  </div>
);

export default UserDetails;
