import { useState } from 'react'
import './App.css'
import Kid from './kid/Kid.jsx'

function App() {
    // State lifted up: manage kids as an array of objects with id, name, and points
    const [kids, setKids] = useState([
        { id: 0, name: 'Artem', points: 0 },
        { id: 1, name: 'Ivan', points: 0 },
        { id: 2, name: 'Oleg', points: 0 },
    ]);

    const pMin = 0;
    const pMax = 10;

    const changePoints = (id, delta) => {
        setKids(prev => prev.map(k => {
            if (k.id !== id) return k;
            const next = { ...k, points: k.points + delta };
            if (next.points < pMin) next.points = pMin;
            if (next.points > pMax) next.points = pMax;
            return next;
        }));
    };

    const kidsRender = kids.map(kid => (
        <Kid
            key={kid.id}
            idU={kid.id}
            nameU={kid.name}
            points={kid.points}
            onInc={() => changePoints(kid.id, +1)}
            onDec={() => changePoints(kid.id, -1)}
            pMin={pMin}
            pMax={pMax}
            style={{ margin: '10px' }}
        />
    ));

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                padding: '30px',
                background: '#f5f5f5',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
                {kidsRender}
            </div>
        </>
    )
}

export default App;
