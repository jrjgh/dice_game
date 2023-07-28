'use client';
import './Combat.css';

export default function Combat(props) {
    const state = props.state

    return (
        <div id={"combatWindow"}>
            <StatsWindow character={state.player} className={"player"}/>
            <StatsWindow character={state.combat.enemy} className={"enemy"} />
            <div className={"player window"}>

            </div>
            <div className={"enemy window"}>

            </div>
        </div>
    )
}

function StatsWindow(props) {
    const {character} = props
    return (
        <div className={props.className + " stats"}>
            <p>{character.name}</p>
            <meter min={0}
                   low={character.health.max/3}
            max={character.health.max}
            value={character.health.current}
            ></meter><p>{character.health.current}/{character.health.max}</p>
        </div>
    )
}