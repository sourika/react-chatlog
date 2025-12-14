import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const onToggleLike = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  const likeCount = entries.filter((e) => e.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <span className="widget" id="heartWidget">{`${likeCount} ❤️s`}</span>
        </section>
      </header>
      <main>
        <ChatLog entries={entries} onToggleLike={onToggleLike} />
      </main>
    </div>
  );
};

export default App;
