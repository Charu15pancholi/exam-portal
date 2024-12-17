import React from 'react';
import { Box, Typography, Button, Paper, List, ListItem, ListItemText, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ExamInstructions = () => {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate()

  const handleAgree = () => {
    navigate("/student/exam-page")
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        EcoQuest - Exam Instructions
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="1. Ensure a Stable Internet Connection"
            secondary="Before starting the exam, ensure that you have a stable internet connection to avoid disruptions. The system will not be responsible for any issues arising from connectivity problems."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. No Unauthorized Materials Allowed"
            secondary="During the exam, the use of external help, including books, notes, calculators, mobile phones, or any other devices, is strictly prohibited unless explicitly allowed by the exam guidelines."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3. Do Not Leave the Exam Page"
            secondary="Once the exam begins, do not navigate away from the exam window/tab. Doing so may result in automatic submission or disqualification."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="4. Maintain Exam Integrity"
            secondary="Any form of cheating, including sharing or discussing questions/answers with others, is strictly forbidden. Violations will lead to immediate disqualification and further disciplinary action."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="5. Time Management is Your Responsibility"
            secondary="The exam is time-bound. Ensure you submit your answers within the allocated time. Late submissions will not be accepted, and the exam may auto-submit when time expires."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="6. Technical Issues"
            secondary="In case of technical difficulties during the exam, immediately notify the exam administrator. Screenshots and error details must be provided as proof, but resolution is subject to the administrator's discretion."
          />
        </ListItem>
      </List>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            name="agreeCheckbox"
          />
        }
        label="I have read and agree to the instructions"
        sx={{ mt: 2 }}
      />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Make sure you understand all the instructions before proceeding. If you have any questions, contact the administrator before starting the exam.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAgree}
        disabled={!checked}
        fullWidth
      >
        I Agree
      </Button>
    </Paper>
  );
};

export default ExamInstructions;
