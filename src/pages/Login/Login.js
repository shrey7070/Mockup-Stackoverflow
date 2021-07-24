import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const Login = () => {
  //useHistory Hook for using history instance
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // validator for checking password length
    ValidatorForm.addValidationRule("isPasswordMinLength", (value) => {
      if (value === "") return true;
      if (value && value.length >= 6) {
        return true;
      }
      return false;
    });
  }, []);

  // function handles the submit event on button
  const submitbtnHandler = (e) => {
    e.preventDefault();

    // saving email to localStorage for authorisation purposes in privateRoute
    localStorage.setItem("email", email);

    // rendering the questions page
    history.push("/questions");
  };

  return (
    <div className="container">
      <div className="header w-75 m-auto mt-5">
        <h1 className="text-center">LOGIN PAGE</h1>
      </div>
      <div className="border border-2 p-3 p-md-5 mt-5 w-50 mx-auto">
        <ValidatorForm onSubmit={submitbtnHandler} className="w-100 mx-auto">
          <div className="mt-3 form-group">
            <label htmlFor="email">Email address</label>
            <TextValidator
              autoFocus={true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Email is not valid"]}
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="mt-3 form-group">
            <label htmlFor="password">Password</label>
            <TextValidator
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="off"
              type="password"
              validators={["required", "isPasswordMinLength"]}
              errorMessages={[
                "This field is required",
                "Password must be at least 6 characters long",
              ]}
              className="form-control"
              value={password}
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary my-5 d-block w-100"
          >
            Submit
          </button>
        </ValidatorForm>
      </div>
    </div>
  );
};

export default Login;
