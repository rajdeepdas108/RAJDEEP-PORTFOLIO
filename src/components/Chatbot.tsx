import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState('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');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Rajdeep's AI assistant- Sri . I can help answer questions about his skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load API key from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const saveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    setShowSettings(false);
    toast({
      title: "Success",
      description: "OpenAI API key saved successfully!",
    });
  };

  const getOpenAIResponse = async (userMessage: string): Promise<string> => {
    if (!apiKey.trim()) {
      throw new Error('OpenAI API key is required');
    }

    const systemPrompt = `You are Rajdeep, a full-stack developer. Respond as if you are personally talking to visitors about your professional background. Use first person (I, me, my) and be friendly and conversational. Here's your background:

SKILLS & TECHNOLOGIES:
- Frontend: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Python, Express.js
- Databases: MongoDB, PostgreSQL, MySQL
- Cloud: AWS, Google Cloud Platform
- Tools: Git, Docker, VS Code
- Other: RESTful APIs, GraphQL, responsive design

EXPERIENCE:
- I'm a full-stack developer with experience in modern web technologies
- I'm passionate about creating innovative and user-friendly solutions
- I have experience with both frontend and backend development
- I have strong problem-solving skills and attention to detail

PROJECTS:
- I've built various web applications showcasing modern development practices
- This portfolio website demonstrates my design and development skills
- I have experience with AI-powered solutions and chatbot integration

CONTACT:
- You can reach me at: drajdeep00108@gmail.com
- I'm available for new opportunities and collaborations

Respond naturally as Rajdeep would, sharing personal insights about your work and experience. If asked about something you don't know specifically, mention that they can contact you directly for more details.`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from OpenAI');
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await getOpenAIResponse(inputMessage);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Sorry, I'm having trouble responding right now. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-space-cyan text-space-dark hover:bg-space-cyan/90 shadow-lg z-40 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] bg-space-deep/95 border-space-medium/50 shadow-xl z-50 flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-space-cyan flex items-center gap-2">
                <Bot size={20} />
                AI Assistant
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-gray-400 hover:text-white h-8 w-8"
                >
                  <Settings size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white h-8 w-8"
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-4 pt-0">
            {/* Settings Panel */}
            {showSettings && (
              <div className="mb-4 p-3 bg-space-medium/30 rounded-lg border border-space-medium/50">
                <h4 className="text-sm text-space-cyan mb-2">OpenAI API Key</h4>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your OpenAI API key"
                    className="bg-space-medium/50 border-space-medium/50 text-white placeholder-gray-400 text-xs"
                  />
                  <Button
                    onClick={saveApiKey}
                    size="sm"
                    className="bg-space-cyan text-space-dark hover:bg-space-cyan/90"
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-space-cyan text-space-dark'
                        : 'bg-space-medium/50 text-white border border-space-medium/30'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-space-medium/50 text-white border border-space-medium/30 p-3 rounded-lg text-sm">
                    <div className="flex items-center gap-2">
                      <div className="animate-pulse">Thinking...</div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Rajdeep..."
                className="bg-space-medium/50 border-space-medium/50 text-white placeholder-gray-400 focus:border-space-cyan flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-space-cyan text-space-dark hover:bg-space-cyan/90 px-3"
              >
                <Send size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
