
import React, { useState, useEffect } from 'react';
import Card from './Card';
import classes from './Login.module.css';
import Button from './Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState('');
  const [collegeIsValid, setCollegeIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') &&
      enteredPassword.trim().length > 6 &&
      enteredCollege.trim() !== ''
    );
  }, [enteredEmail, enteredPassword, enteredCollege]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEmailIsValid(event.target.value.includes('@'));
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setPasswordIsValid(event.target.value.trim().length > 6);
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
    setCollegeIsValid(event.target.value.trim() !== '');
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      // Simulate login request (replace with actual login logic)
      props.onLogin(enteredEmail, enteredPassword, enteredCollege);
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={() => setEmailIsValid(enteredEmail.includes('@'))}
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={() => setPasswordIsValid(enteredPassword.trim().length > 6)}
          />
        </div>
        <div
          className={`${classes.control} ${collegeIsValid === false ? classes.invalid : ''}`}
        >
          <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={() => setCollegeIsValid(enteredCollege.trim() !== '')}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;