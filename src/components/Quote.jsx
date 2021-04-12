import React, {useState, useEffect, useLayoutEffect} from 'react';

function Quote() {

    const[phrase, setPhrase] = useState({});

    useLayoutEffect(() => {

        const apiObj = fetch('https://api.taylor.rest/')
        .then(response => response.json())
        .then(res=> setPhrase(res))
    }, [])




    function handleClick(e) {
        
        fetch('https://api.taylor.rest/').then(response => response.json()).then(res=>setPhrase(res));

        return;

    } 
    

  

    return(
        <div>
            <div style={{backgroundColor: 'rgb(255, 255, 255, 0.72)', fontSize: "65%", width: '500px', height: '12em', margin: '0 auto', borderRadius: '25px', display: 'flex', flexDirection: 'column'}}>
                <h1>{phrase.quote}</h1>
            </div>
            <button style={{width: 'min-content', margin: '0 auto'}}onClick={handleClick}>random</button>
        </div>

    )
}

export default Quote;