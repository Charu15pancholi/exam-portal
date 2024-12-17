import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Chip, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const QuestionNavigation = () => {
  const navigate = useNavigate();

  // Dummy data for chapters
  const chapters = [
    {
      name: "Chapter 1",
      totalQuestions: 20,
      statusCount: { attempted: 9, notAttempted: 7, bookmarked: 3, revisited: 1 },
      questions: [
        { number: 1, status: "attempted" },
        { number: 2, status: "notAttempted" },
        { number: 3, status: "notAttempted" },
        { number: 4, status: "notAttempted" },
        { number: 5, status: "notAttempted" },
        { number: 6, status: "attempted" },
        { number: 7, status: "notAttempted" },
        { number: 8, status: "bookmarked" },
        { number: 9, status: "revisited" },
        { number: 10, status: "unvisited" },
        { number: 15, status: "bookmarked" },
        { number: 20, status: "attempted" },
      ],
    },
    {
      name: "Chapter 2",
      totalQuestions: 20,
      statusCount: { attempted: 20, notAttempted: 0, bookmarked: 0, revisited: 0 },
      questions: Array.from({ length: 20 }, (_, i) => ({
        number: i + 1,
        status: "attempted",
      })),
    },
    {
      name: "Chapter 3",
      totalQuestions: 20,
      statusCount: { attempted: 20, notAttempted: 0, bookmarked: 0, revisited: 0 },
      questions: Array.from({ length: 20 }, (_, i) => ({
        number: i + 1,
        status: "attempted",
      })),
    },
  ];

  // Color mapping for question status
  const statusColors = {
    attempted: "primary",
    notAttempted: "error",
    bookmarked: "secondary",
    revisited: "success",
    unvisited: "default",
  };

  // Handle chip click to navigate
  const handleNavigation = (chapterName, questionNumber) => {
    // Example: Navigate to "/chapter1/question/3"
    navigate(`/chapter/${chapterName}/question/${questionNumber}`);
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      {chapters.map((chapter, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {chapter.name} ({chapter.totalQuestions})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="row" spacing={1} sx={{ marginBottom: 2 }}>
              <Chip label={`Attempted: ${chapter.statusCount.attempted}`} color="primary" variant="outlined" />
              <Chip label={`Not Attempted: ${chapter.statusCount.notAttempted}`} color="error" variant="outlined" />
              <Chip label={`Bookmarked: ${chapter.statusCount.bookmarked}`} color="secondary" variant="outlined" />
              <Chip label={`Revisited: ${chapter.statusCount.revisited}`} color="success" variant="outlined" />
            </Stack>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {chapter.questions.map((q) => (
                <Chip
                  key={q.number}
                  label={q.number}
                  clickable
                  color={statusColors[q.status] || "default"}
                  onClick={() => handleNavigation(chapter.name, q.number)} // Navigate on click
                  sx={{ width: 40, height: 40, borderRadius: "50%" }}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default QuestionNavigation;
