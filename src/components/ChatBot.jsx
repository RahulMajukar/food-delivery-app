import React, { useState } from 'react';

function ChatBot() {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendButton = () => {
        if (userInput.trim() !== '') {
            addUserMessage(userInput);
            respondToUser(userInput);
            setUserInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendButton();
        }
    };

    const addUserMessage = (message) => {
        setChatMessages([
            ...chatMessages,
            { text: message, sender: 'user' }
        ]);
    };

    const addBotMessage = (message) => {
        setChatMessages([
            ...chatMessages,
            { text: message, sender: 'bot' }
        ]);
    };

    const respondToUser = (userMessage) => {
        // Replace this with your chatbot logic
        setTimeout(() => {
            addBotMessage('This is a response from the chatbot.');
        }, 500);
    };

    return (
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
            {!isChatboxOpen && (<button
                onClick={toggleChatbox}
                className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                data-state="closed"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white block border-gray-200 align-middle"
                >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-gray-200" />
                </svg>
                {/* {isChatboxOpen ? 'Close Chat' : 'Open Chat'} */}
            </button>

            )}


            {isChatboxOpen && (
                <div className="max-w-md mx-auto p-4">
                    {/* Chat Container */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="ml-3">
                                <p className="text-xl font-medium">Your AI Assistant</p>
                                <p className="text-gray-500">Online</p>
                            </div>
                            <button onClick={toggleChatbox} className="text-gray-500 hover:text-gray-700">
                                <svg className="dark:text-white" width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8799 15.9996L23.6133 10.2796C23.8643 10.0285 24.0054 9.688 24.0054 9.33293C24.0054 8.97786 23.8643 8.63733 23.6133 8.38626C23.3622 8.13519 23.0217 7.99414 22.6666 7.99414C22.3115 7.99414 21.971 8.13519 21.7199 8.38626L15.9999 14.1196L10.2799 8.38626C10.0288 8.13519 9.68832 7.99414 9.33325 7.99414C8.97818 7.99414 8.63766 8.13519 8.38659 8.38626C8.13551 8.63733 7.99446 8.97786 7.99446 9.33293C7.99446 9.688 8.13551 10.0285 8.38659 10.2796L14.1199 15.9996L8.38659 21.7196C8.26161 21.8435 8.16242 21.991 8.09473 22.1535C8.02704 22.316 7.99219 22.4902 7.99219 22.6663C7.99219 22.8423 8.02704 23.0166 8.09473 23.179C8.16242 23.3415 8.26161 23.489 8.38659 23.6129C8.51054 23.7379 8.658 23.8371 8.82048 23.9048C8.98296 23.9725 9.15724 24.0073 9.33325 24.0073C9.50927 24.0073 9.68354 23.9725 9.84602 23.9048C10.0085 23.8371 10.156 23.7379 10.2799 23.6129L15.9999 17.8796L21.7199 23.6129C21.8439 23.7379 21.9913 23.8371 22.1538 23.9048C22.3163 23.9725 22.4906 24.0073 22.6666 24.0073C22.8426 24.0073 23.0169 23.9725 23.1794 23.9048C23.3418 23.8371 23.4893 23.7379 23.6133 23.6129C23.7382 23.489 23.8374 23.3415 23.9051 23.179C23.9728 23.0166 24.0077 22.8423 24.0077 22.6663C24.0077 22.4902 23.9728 22.316 23.9051 22.1535C23.8374 21.991 23.7382 21.8435 23.6133 21.7196L17.8799 15.9996Z" fill="#1F2937" />
                                </svg>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="space-y-4 max-h-60 overflow-y-auto">
                            {chatMessages.map((msg, index) => (
                                <div key={index} className={`flex items-${msg.sender === 'user' ? 'end justify-end' : 'start'}`}>
                                    {msg.sender === 'bot' && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100"
                                            width="100"
                                            height="100"
                                            fill="#009688"
                                            className="w-8 h-8 rounded-full"
                                        >
                                            {/* Robot Face */}
                                            <circle cx="50" cy="50" r="20" fill="#009688" />
                                            <circle cx="50" cy="40" r="2" fill="#fff" />
                                            <rect x="47" y="45" width="6" height="10" fill="#fff" />
                                            <circle cx="50" cy="65" r="3" fill="#009688" />
                                            {/* Robot Eyes */}
                                            <circle cx="45" cy="45" r="3" fill="#fff" />
                                            <circle cx="55" cy="45" r="3" fill="#fff" />
                                            <circle cx="45" cy="45" r="1" fill="#000" />
                                            <circle cx="55" cy="45" r="1" fill="#000" />
                                            {/* Robot Antennas */}
                                            <line x1="50" y1="30" x2="40" y2="20" stroke="#009688" strokeWidth="2" />
                                            <line x1="50" y1="30" x2="60" y2="20" stroke="#009688" strokeWidth="2" />
                                        </svg>
                                    )}
                                    <div className={`ml-3 p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500' : 'bg-gray-100'}`}>
                                        <p className={`text-sm ${msg.sender === 'user' ? 'text-white' : 'text-gray-800'}`}>{msg.text}</p>
                                    </div>
                                    {msg.sender === 'user' && (
                                        <img
                                            src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg"
                                            alt="User Avatar"
                                            className="w-8 h-8 rounded-full ml-3"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Chat Input */}
                        <div className="mt-4 flex items-center">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={userInput}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
                            />
                            <button
                                onClick={handleSendButton}
                                className="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBot;
