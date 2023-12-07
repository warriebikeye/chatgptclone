import './App.css';
import {useState} from 'react'; 
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png'; 
import msgicon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import usericon from './assets/user-icon.png';
import gptimglogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai'; 

function App() {

const [input, setInput] = useState("");
const [messages, setMessages] = useState([
  {
    text: "Hi i am a state of the art chatGPT clone created by Warri Ebikeye Cyprian , I am designed to understand and generate human-like text based on the input i receive. You can ask me questions, have conversations, seek informations and request assistance with various tasks. Let me know how i can help you  ",
    isBot: true,
  }
]);

const handleSend = async () => {
  const text=input;
  setInput('');
  setMessages([
      ...messages,
      {text, isBot:false}
  ])
  const res= await sendMsgToOpenAI(input);
  setMessages([
    ...messages,
    {text, isBot: false},
    {text: res, isBot: true}
  ]);
}

  return (
    <div className="App">
    <div className='sideBar'>
    <div className='upperSide'>
      <div className='uppersideTop'><img src={gptLogo} alt='Logo' className='logo'/><span className='brand'>Warri's ChatGPT</span></div>
      <button className='midBtn'><img src={addBtn} alt='New Chat' className='addBtn'/>New Chat</button>
      <div className='upperSideButton'>
        <button className='query'><img src={msgicon} alt='query' /> what is programming?</button>
        <button className='query'><img src={msgicon} alt='query' /> How to use an API?</button> 
      </div>
</div> 
<div className='lowerside'>
  <div className='ListItems'><img src={home} alt='Home' className='listitemsimg' />Home</div>
  <div className='ListItems'><img src={saved} alt='saved' className='listitemsimg' />Saved</div>
  <div className='ListItems'><img src={rocket} alt='upgrade' className='listitemsimg' />Upgrade to Pro</div>
</div>
    </div>
    <div className='main'>
      <div className='chats'>
        {messages.map((message, i) =>
        <div key={i} className={message.isBot?'chat bot':'chat'}>
        <img src={message.isBot?gptimglogo:usericon} className='chtimg' alt=''/><p className='txt'>{message.text}</p>
      </div> 
        )}
      </div>
      <div className='chatfooter'>
        <div className='inp'>
        <input type='text' placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className='send' onClick={handleSend} ><img src={sendBtn} alt='send'></img></button>
        </div>
        <p>Warri's chatGPT was created to showcase my Mern skills to recruiters.</p>
      </div>
    </div>
    </div>  
  );
}

export default App;
