import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './login';
import Vote from './voting';
import './App.css';


const App = ()=> {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);


  const clearinputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErr = () => {
    setEmailError('');
    setPasswordError('');
  };

  const loginHandler =()=> {
    clearErr();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/Invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        };
      });
  };

  const signUpHandler = () => {
    clearErr();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        };
      });
  };


  const authListener = ()=> {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearinputs();
        setUser(user);
      }else {
        setUser("");
      };
    });
  };



  useEffect(() =>{
    authListener();
  }, []);


  return (
    <div className="App">
      {user ? (
        < Vote 
              />
      ) : (
        <Login email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginHandler={loginHandler}
        signUpHandler={signUpHandler}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      )};
      
    </div>
  );
};

export default App;