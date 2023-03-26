import React, { useState, useEffect } from 'react';
import DraftsSection from './DraftsSection';
import './App.scss';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [siteUrl, setSiteUrl] = useState('https://shaunandrews.com');
  const [username, setUsername] = useState('shaunandrews');
  const [password, setPassword] = useState('mxsD eoRJ cB95 V9Mj csVz sjrz');

  const [siteInfo, setSiteInfo] = useState({});
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSiteInfo();
      fetchDrafts();
    }
  }, [isAuthenticated]);

  const authenticate = async () => {
    if (!siteUrl || !username || !password) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`${siteUrl}/wp-json/wp/v2/users/me`, {
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Helper function for getting data from the WordPress REST API
  const fetchFromWordPress = async (endpoint, query = {}) => {
    try {
      const url = new URL(`${siteUrl}/wp-json/wp/v2/${endpoint}`);
      Object.keys(query).forEach((key) => url.searchParams.append(key, query[key]));

      const response = await fetch(url, {
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error(`Failed to fetch data from ${endpoint}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      setIsAuthenticated(false);
      return null;
    }
  };

  // Get all draft posts
  const fetchDrafts = async () => {
    const data = await fetchFromWordPress('posts', { status: 'draft', context: 'edit' });
    if (data) {
      setDrafts(data);
    }
  };

  // Get a specific post
  const fetchPost = async (id) => {
    const data = await fetchFromWordPress(`posts/${id}`);
    if (data) {
      return data;
    }
  };


  // Get general site information
  const fetchSiteInfo = async () => {
    const data = await fetchFromWordPress('settings');
    if (data) {
      setSiteInfo(data);
    }
  };

  return (
    <div className="app">
      {isAuthenticated ? (
        <DraftsSection
          setIsAuthenticated={setIsAuthenticated}
          siteInfo={siteInfo}
          drafts={drafts}
        />
      ) : (
        <fieldset className="authentication">
          <h1>Sign In</h1>
          <label>WordPress Site URL</label>
          <input
            type="text"
            name="siteUrl"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={authenticate}>Sign In</button>
        </fieldset>
      )}
    </div>
  );
}

export default App;
