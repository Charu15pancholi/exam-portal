// src/pages/Register.js
import React from 'react';
import Menu from '../components/Menu';
// import './LoginRegister.css';

const Register = () => {
  return (
    <div>
      <Menu />
      <div id="mydata">
        <center>
          <form action="rg">
            <table cellPadding="12">
              <tbody>
                <tr>
                  <td>Enter Name:</td>
                  <td><input type="text" className="A" name="un" placeholder="enter name" /></td>
                </tr>
                <tr>
                  <td>Enter Password:</td>
                  <td><input type="password" className="A" name="up" placeholder="enter password" /></td>
                </tr>
                <tr>
                  <td>Enter Contact:</td>
                  <td><input type="text" className="A" name="uc" placeholder="enter contact" /></td>
                </tr>
                <tr>
                  <th colSpan="2"><input type="submit" className="B" value="Register" /></th>
                </tr>
              </tbody>
            </table>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Register;
