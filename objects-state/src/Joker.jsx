import { useEffect } from "react";
import { useState } from "react";

export default function Joker(){
    let [joke,setJoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke"
    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
        }
        getFirstJoke();
    }, []);
    const getNewJokes=async ()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse)
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    }
    return <div>
        <h3>Jokes</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJokes}>Get Joke</button>
    </div>
}