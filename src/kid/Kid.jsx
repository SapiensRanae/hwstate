import React, {useState} from 'react';


function Kid({pMin = 0, pMax = 10, idU, nameU}) {
    const [id, setId] = useState(idU);
    const [name, setName] = useState(nameU);
    const [points, setPoints] = useState(0);

    const handlePointsI = () => {
      if (points < pMax) {
          setPoints(points + 1);
      }
    }

    const handlePointsD = () => {
        if (points > pMin) {
            setPoints(points - 1);
        }
    }

    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Points: {points}</p>
            <button onClick={handlePointsD}>-</button>
            <button onClick={handlePointsI}>+</button>
        </div>

    );
}

export default Kid;