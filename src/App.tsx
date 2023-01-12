import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../src/utils/usePersistedState'
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";


import  React, { useContext,
                 useState } 
                 from 'react';

//import './App.css';
import GlobalStyle from "./styles/global";
import {AppRoutes} from "./Routes"
//import Form from "./components/Form";
import Input from "./components/Input";
import Header from "./components/header/index";



function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme ={ theme }>
      <div>
        <GlobalStyle />
        <Header toggleTheme={ toogleTheme }/>
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
/*   const [tweets, setTweets] = useState<string[]>([
      'Tweet1',
      'Tweet2',
      'Tweet3',
      'Tweet4',
  ])

  function createTweet (){
    setTweets([...tweets, 'Tweet' + (Number(tweets.length) + 1)])
  }

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet texto={tweet} />
      })} 

      <button onClick={createTweet} 
      style={{
        backgroundColor: '#8257e6',
        padding: '6px 10px'}}>
        Adicionar Tweet
      </button>
    </div>
  ) */
}

export default App
