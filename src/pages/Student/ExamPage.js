import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import QuestionComponent from '../../components/QuestionComponent'
import OptionsComponent from '../../components/OptionsComponent'
import QuestionNavigation from '../../components/QuestionNavigation'

function ExamPage() {
  return (
    <Grid container>
        <Grid item xs={12} sx={{bgcolor: "#30B4C9", p: 1}}>
            <Typography variant={"h5"} textAlign={"center"}>EcoQuest</Typography>
        </Grid>
        <Grid item xs={12} container height={"calc(100vh - 50px)"}>
            <Grid item xs={9} container alignContent={"baseline"}>
                <Grid item xs={12} sx={{p: 1}}>
                    <Typography variant="body1">Time Left : 02:00:30 hrs</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"space-around"} alignContent={"baseline"} height={"calc(100vh - 175px)"} sx={{bgcolor: "#e2e2e2"}}>
                    <Grid item xs={10} mt={4}>
                        <QuestionComponent
                            sNo={1}
                            title={"What is the output of the following Java code?"}
                            description={'public class Main { \n    public static void main(String[] args) { \n         int a = 5, b = 10; \n       System.out.println(a > b ? "A is greater" : "B is greater");\n    } \n }'}
                        />
                        <Divider variant={"fullWidth"} />
                    </Grid>
                    <Grid item xs={10}>
                        <OptionsComponent 
                            options={[
                                "A is greater",
                                "B is greater",
                                "Compilation Error",
                                "Runtime Error"
                            ]}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} sx={{bgcolor: "#e1e1e1", p: 1}} justifyContent={"center"} gap={"15rem"}>
                    <Grid item>
                        <Button variant={"outlined"} color={"primary"} fullWidth onClick={() => {}} >Previous</Button>
                    </Grid>
                    <Grid item>
                        <Button variant={"contained"} color={"primary"} fullWidth onClick={() => {}} >Next</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{bgcolor: "#e1e1e1", p: 1}}>
                    bottom
                </Grid>
            </Grid>
            <Grid item xs={3} container  sx={{borderLeft: "1px solid #e1e1e1"}}>
                <QuestionNavigation />
            </Grid>
        </Grid>
    </Grid>
  )
}

export default ExamPage