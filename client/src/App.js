import React from 'react';
import GoogleLogin from 'react-google-login';

import './App.css';

function App() {

  const responseSuccessGoogle = (response) => {
    console.log(response);
  }

  const responseErrorGoogle = (response) => {
    console.log(response);
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <GoogleLogin
          clientId="30907382547-824taveus218anrvdmomvsg046o1v57i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
        />,
        document.getElementById('googleButton')

      </header>
      </div>
  );
}

export default App;
