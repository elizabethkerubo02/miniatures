import React, { useState, useEffect }  from 'react';
import MiniatureCard from './MiniatureCard';

function Home() {
    const [ newMinis, setNewMinis ] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:9292/miniatures/new')
        .then(res => res.json())
        .then(data => setNewMinis(data))
      }, [])

    const miniatureCards = newMinis.map((miniature, index)  => <MiniatureCard key={ index } miniature={ miniature }/>)

    return (
        <div className="set-page">
            <div className="quote"><b>
                <p><i>"Within the tiny realm of miniatures, worlds unfold, imagination takes flight, and the ordinary transforms into the extraordinary."</i></p></b>
                </div>
            <h3>Current Miniatures in your Collection:</h3>
            <div className="card-grid">{ miniatureCards }</div>
        </div>
    )
}

export default Home;