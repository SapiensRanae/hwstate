import React from 'react';

function Kid({ pMin = 0, pMax = 10, idU, nameU, points = 0, onInc, onDec, style }) {
    const canDec = points > pMin;
    const canInc = points < pMax;

    return (
        <div style={style}>
            <p>ID: {idU}</p>
            <p>Name: {nameU}</p>
            <p>Points: {points}</p>
            <button onClick={onDec} disabled={!canDec}>-</button>
            <button onClick={onInc} disabled={!canInc}>+</button>
        </div>
    );
}

export default Kid;