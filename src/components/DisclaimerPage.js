/* eslint-disable */
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DisclaimerPage({ open, handleClose }) {
    const navigate = useNavigate();  // Hook for navigation

    const handleAgree = () => {
        navigate('/base/ask-to-pdf');  // Redirect user
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            
            <DialogContent>
                <DialogContentText>                
                <DialogTitle>{"Disclaimer for AI Model Usage"}</DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Welcome to our application. Before you begin using the AI services provided through Vertex AI models and Gemini Pro, please read this disclaimer carefully.
                </Typography>
                <Typography paragraph>
                    <strong>No Sensitive Data:</strong> You agree not to use the AI models to upload, share, process, or analyze any sensitive information, including but not limited to data containing personally identifiable information (PII), personal health information (PHI), financial records, or any other data that falls under regulatory or compliance-specific guidelines (such as GDPR, HIPAA, or CCPA).
                </Typography>
                <Typography paragraph>
                    <strong>Prohibited Data:</strong> You are expressly prohibited from submitting, uploading, or transmitting any customer data or any data that you do not have full rights to use within this platform. It is your responsibility to ensure that the data you provide complies with all applicable laws and regulations, and that you have obtained all necessary consents and permissions.
                </Typography>
                <Typography paragraph>
                    <strong>User Responsibilities:</strong> As a user, you are responsible for the data you input into the AI models. You must ensure that all data is anonymized and does not contain information that could be used directly or indirectly to identify an individual.
                </Typography>
                <Typography paragraph>
                    <strong>Limitation of Liability:</strong> The providers of Vertex AI models and Gemini Pro shall not be held liable for any improper or incorrect use of the information or data described and/or contained herein and assumes no responsibility for anyone's use of the information. In no event shall we be liable for any direct, indirect, incidental, special, exemplary, or consequential damages.
                </Typography>
                <Typography paragraph>
                    <strong>Indemnification:</strong> You agree to defend, indemnify, and hold harmless the providers of Vertex AI models and Gemini Pro and its affiliates from any and all claims, liabilities, damages, costs, and expenses, including reasonable attorneys' fees.
                </Typography>
                <Typography paragraph>
                    <strong>Governing Law:</strong> This disclaimer and any disputes arising out of or related to the services provided by Vertex AI models and Gemini Pro shall be governed and construed in accordance with the laws of the jurisdiction in which the provider is based.
                </Typography>
            </DialogContent>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAgree} color="primary">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DisclaimerPage;
