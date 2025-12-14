import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';

const App = () => {
  const firstMessage = messages[0];
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatEntry
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
