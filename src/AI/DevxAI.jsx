import { useState, useEffect } from 'react';

const DevxAI = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem(`chatMessages_${currentUser.email}`);
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem(`chatMessages_${currentUser.email}`, JSON.stringify(messages));
  }, [messages, currentUser.email]);

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem(`chatMessages_${currentUser.email}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    // Add user message to chat
    const newMessage = {
      role: 'user',
      content: inputMessage.trim(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Call Hugging Face Inference API
      const response = await fetch(
        'https://api-inference.huggingface.co/models/facebook/seamless-m4t-v2-large',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
          },
          body: JSON.stringify({
            inputs: inputMessage.trim(), // Send the user's message as input
          }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error('API Error:', errorDetails);
        throw new Error('Failed to fetch AI response.');
      }

      const result = await response.json();

      // Extract and use the response text
      const aiResponse = result[0]?.generated_text || "I could not process that. Please try again with a different query.";

      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: aiResponse,
        },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Mujhe abhi banaya jaa raha hai right now. Mere se mat puchho naa !!"
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex max-w-[1000px] flex-1 justify-center p-4 h-[calc(100vh-196px)] md:h-[calc(100vh-66px)]">
      <div className="bg-white rounded-lg flex flex-col w-full px-8">
        {/* Chat messages */}
        <div className="flex justify-end px-4 py-1 border-b">
          <button
            onClick={handleClearChat}
            className="text-rose-500 hover:text-rose-700 px-2 py-2 font-semibold border border-rose-500 rounded-md text-sm"
          >
            Clear Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about your studies..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-emerald-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 disabled:bg-blue-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DevxAI;
