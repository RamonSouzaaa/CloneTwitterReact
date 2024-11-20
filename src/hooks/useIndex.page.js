import { useState } from 'react'

function useIndex(){
    const LIMIT = 125;
    const [text, setText]  = useState('');
    const [tweetList, setTweetList]  = useState([]);
    const tweet = {
        date: new Date(),
        text: text,
        user: {
            name: "Ramon de Souza",
            username: "@RamonSouzaaa",
            avatar_url: "https://avatars.githubusercontent.com/u/25990110?v=4"
        }
    }

    return {
        text,
        tweetList,
        tweet,
        LIMIT,
        setText,
        setTweetList
    }
}

export default useIndex;
