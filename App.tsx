import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div>
        <p>hi {username} welcome to lab internal -II</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

sudo apt update
 sudo apt install docker.io -y
 sudo systemctl start docker
 sudo systemctl enable docker
 docker –version