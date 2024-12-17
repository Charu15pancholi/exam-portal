import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function QuestionComponent({sNo, title, description}) {
  return (
    <Grid container item xs={12} gap={"0.5rem"}>
        <Grid item xs={12} sx={{bgcolor: "#fff", p: 1.5}}>
            <Typography variant={"h6"} textAlign={"center"}>Question Number {sNo}</Typography>
        </Grid>

        <Grid item xs={12} sx={{bgcolor: "#fff", p: 1.5}}>
            <Typography variant={"body1"}>{title}</Typography>
            {/* <Divider sx={{my: 1}} variant={"fullWidth"} /> */}
            <pre>
                <code>
                    {description}
                </code>
            </pre>
            {/* <div dangerouslySetInnerHTML={{__html: description.replaceAll("\n", "<br/>")}}></div> */}
        </Grid>
    </Grid>
  )
}

export default QuestionComponent