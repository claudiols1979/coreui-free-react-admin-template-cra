/* eslint-disable */
import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Paper } from '@mui/material';


function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newMessages = [...messages, { id: messages.length + 1, text: input, sender: 'user' }];
            setMessages(newMessages);
            setInput('');

            // Simulate a response
            setTimeout(() => {
                const response = { id: messages.length + 2, text: "This is a simulated response based on a real interaction with Gemini Pro.", sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, response]);
            }, 500);
        }
    };

    const clearChat = () => {
        setMessages([]);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper elevation={0} sx={{ width: '100%', maxWidth: '90%', p: 2, border: 'none' }}>
                <div className="mb-3">
                    <Button className="btn btn-primary me-2" variant="contained">Upload PDF</Button>
                    <Button className="btn btn-secondary me-2" variant="contained">Process PDF</Button>
                    <Button className="btn btn-danger" variant="contained" onClick={clearChat}>Clear Chat</Button>
                   
                </div>
                <List sx={{ maxHeight: 300, overflow: 'auto', mb: 2 }}>
                    {messages.map((msg, index) => (
                        <ListItem key={index} disableGutters>
                            <ListItemText
                                primary={msg.text}
                                sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', border: 'none' }}
                            />
                        </ListItem>
                    ))}
                </List>
                <Box component="form" onSubmit={sendMessage} sx={{ display: 'flex' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask questions to your PDF here..."
                        sx={{ border: 'none', "& .MuiOutlinedInput-notchedOutline": { border: 'none' } }}
                    />
                    <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                        Send
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default ChatWindow;

