//Dependency imports
import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Central Part of the network of parts (no membership required)
//Pages in HD
import HD from './parts/HD/HD.js';
import ModernSolutions from './parts/HD/ModernSolutions';
import MEPCo from './parts/HD/MEPColumbus'
  import Login from './pages/Login';
  import Signup from './pages/Signup';
//

//Types of profiles(top-down hirearchy features underwhom their available to)
import Developer from './parts/DevProfile/DevProfile.js'
  import Clientell from './parts/ClientellProfile/ClientellProfile.js';
    import Member from './parts/EndUserProfile/Member.js';
      import SingleThought from './pages/SingleThought';
      import Profile from './parts/EndUserProfile/Profile.js';
//

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return ( 
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img 
              src={logo} 
              className="App-logo"
              alt="logo" 
            />
          </header>
          <div>
            <Route exact path="/">
              <HD />
            </Route>
            <Route exact path="/HD">
              <HD />
            </Route>
            <Route exact path="/ModernSolutions">
              <ModernSolutions />
            </Route>
            <Route exact path="/MEPColumbus">
              <MEPCo />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/developer/me">
              <Developer />
            </Route>
            <Route exact path="/partner/me">
              <Clientell />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/forMe">
              <Member />
            </Route>
            <Route exact path="/thoughts/:thoughtId">
              <SingleThought />
            </Route>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
