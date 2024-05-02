/* eslint-disable */
import React from 'react';
import { Paper, Typography, Box, Container, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const HowToGuide = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom component="div" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
        How to Do Prompt Engineering Effectively
      </Typography>
      <Divider />
      <Box my={4}>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" component="h3">Step 1: Understand Your Tool</Typography>
          <Typography variant="body1" sx={{ mt: 1.5 }}>
            Begin by understanding the capabilities and limitations of your AI model. Knowing what your tool can and cannot do is crucial for crafting effective prompts.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" component="h3">Step 2: Define Clear Objectives</Typography>
          <Typography variant="body1" sx={{ mt: 1.5 }}>
            Clearly define what you want to achieve with your prompts. For example, if you want to generate a PDF report, determine the specific information that needs to be included.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" component="h3">Step 3: Create Detailed Prompts</Typography>
          <Typography variant="body1" sx={{ mt: 1.5 }}>
            Detailed prompts yield better results. Be specific about the information you need. Use structured queries and clear, concise language.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" component="h3">Step 4: Iterative Testing and Refinement</Typography>
          <Typography variant="body1" sx={{ mt: 1.5 }}>
            Test your prompts iteratively. Refine them based on the outputs you receive. This process will help you fine-tune the prompts for better accuracy and relevance.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" component="h3">Step 5: Implement and Monitor</Typography>
          <Typography variant="body1" sx={{ mt: 1.5 }}>
            Once you are satisfied with the prompt’s effectiveness, implement them in your application. Continuously monitor the results and be prepared to make adjustments as needed.
          </Typography>
        </Paper>
      </Box>
      <Divider />
      <Box my={2}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Follow these steps to optimize your prompt engineering efforts, ensuring that your application performs effectively and efficiently.
        </Typography>
      </Box>
    </Container>
  );
};

export default HowToGuide;
