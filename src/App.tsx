import { useState } from "react"
import { Tweet } from "./components/Tweet"
import {AppRoutes} from "./Routes"
import './App.css';

function App() {
  return <AppRoutes />
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
