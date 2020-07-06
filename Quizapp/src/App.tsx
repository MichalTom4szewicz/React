import Menu from './components/Menu';
import Page from './pages/Page';
import React, {useState, useEffect} from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, IonInput, IonButton} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Quizchoice from './pages/Quizchoice';
import Quiz from './pages/Quiz'
import Quizcreate from './pages/Quizcreate';

import loginService from './services/login'

import Togglable from './components/Togglable';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      loginService.setToken(user.token)   
    }
    
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      

      loginService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      
    } catch (exception) {
      console.log(exception)
      setErrorMsg('username or password is incorrect')
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)
    }
  }
 
  const loginForm = () => {
    return (
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        />
    )
  }



  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu errorMsg={errorMsg} user={user} loginForm={loginForm} setUser={setUser} />
          <IonRouterOutlet id="main">
            <Route path="/page/:name" component={Page} exact />
            <Route path='/quizchoice' component={Quizchoice} exact />
            <Route path='/quizchoice/:id' component={Quiz} exact />
            <Route path="/quizcreate" component={Quizcreate} exact={true} /> 
            <Redirect from="/" to="/page/Main" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
