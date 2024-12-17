// src/pages/Login.js
import React, { useState } from 'react';
import Menu from '../components/Menu';
import { Button, Grid, Typography } from '@mui/material';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
// import './LoginRegister.css';

const Login = () => {
  const [name, setName] = useState("")
  const [enrolmentNo, setEnrolmentNo] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
        <Grid container height={"100vh"} width={"100%"} padding={"1rem"}>
          <Grid item md={5.5} container justifyContent={"space-between"} gap={"1rem"} sx={{
            borderRadius: "15px",
            // backgroundImage: "url(/assets/images/login-image.jpg)",
            backgroundImage: "url(/assets/images/computer-test.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}>
            {/* <Grid itme component={"img"} width={"100%"} src={"/assets/images/login-image.jpg"} /> */}
          </Grid>
          <Grid item md={6.5} container justifyContent={"space-between"} gap={"1rem"} px={"7rem"} py={"10rem"} alignContent={"baseline"}>
            <Grid item xs={12} my={"2rem"}>
              <Typography variant={"h3"} textAlign={"center"}>
                EcoQuest - Login
              </Typography>
            </Grid>
            <Grid item xs={5.8}>
              <Input 
                label="Name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </Grid>
            <Grid item xs={5.8}>
              <Input label="Enrolment No" onChange={e => setEnrolmentNo(e.target.value)} value={enrolmentNo}/>
            </Grid>
            <Grid item xs={12}>
              <Input label="Password" type={"password"} onChange={e => setPassword(e.target.value)} value={password}/>
            </Grid>
            <Grid item xs={12}>
              <Button variant={"contained"} color={"primary"} fullWidth onClick={() => navigate("/student/instrunctions")} >Submit</Button>
            </Grid>
          </Grid>
        </Grid>
  );
};

export default Login;
