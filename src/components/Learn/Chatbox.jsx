import React, { useState } from 'react';
import { MessageBox, Input } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([
    {
      position: 'left',
      text: 'Hello! How are you?',
      date: new Date(),
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9coir64W9UMekeAmN_X6Q0qU9v867TGp6A&s',
      title: 'John Doe' // Tiêu đề cho tin nhắn bên trái
    },
    {
      position: 'right',
      text: 'I am good, thanks! How about you?',
      date: new Date(),
      avatar: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/klee/image.png?strip=all&quality=75&w=256',
      title: 'You' // Tiêu đề cho tin nhắn bên phải
    },
  ]);

  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        {
          position: 'right',
          text: inputText,
          date: new Date(),
          avatar: 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/klee/image.png?strip=all&quality=75&w=256',
          title: 'You' // Tiêu đề cho tin nhắn mới
        },
      ]);
      setInputText('');
    }
  };

  return (
    <div className='bg-blue-100 m-auto'>
      <div className="p-4 text-center bg-blue-500 text-white font-bold">
        <h2>Đặt câu hỏi cho giáo viên</h2>
      </div>
      
      {/* Khu vực tin nhắn */}
      <div className='w-full'>
        <div style={{ height: '300px', overflowY: 'auto', padding: '10px' }}>
          {messages.map((msg, index) => (
            <MessageBox
              key={index}
              position={msg.position}
              type="text"
              text={msg.text}
              date={msg.date}
              avatar={msg.avatar}
              title={msg.title} 
            />
          ))}
        </div>
        <Input
          placeholder="Nhập một câu hỏi..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          rightButtons={
            <button onClick={handleSend} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
              Gửi
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Chatbox;
