import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import './App.css';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Debounced search effect
  useEffect(() => {
    if (!query) {
      setUsers([]);
      return;
    }
    const timeoutId = setTimeout(() => {
      setLoading(true);
      setError('');
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
          if (!res.ok) throw new Error('Error fetching users');
          return res.json();
        })
        .then(data => setUsers(data.items || []))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, 500); // debounce
    return () => clearTimeout(timeoutId);
  }, [query]);

  // Fetch user details when selected
  useEffect(() => {
    if (!selectedUser) {
      setUserDetails(null);
      return;
    }
    setLoading(true);
    setError('');
    fetch(`https://api.github.com/users/${selectedUser}`)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching user details');
        return res.json();
      })
      .then(data => setUserDetails(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedUser]);

  return (
    <div className="App">
      <header className="app-header">
        <FaGithub className="header-icon" />
        <h1>GitHub User Finder</h1>
      </header>
      <SearchBar query={query} setQuery={setQuery} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!userDetails ? (
        <UserList users={users} onSelectUser={setSelectedUser} />
      ) : (
        <UserDetails user={userDetails} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
