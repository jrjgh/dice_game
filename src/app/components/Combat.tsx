'use client';
import './Combat.css';
import {getActiveDice, combatRound} from '@/game/combat'
import {Face} from "@/app/components/Face";

export default function Combat(props) {
    const state = props.state
    const activeDice = getActiveDice(state.player, state.combat.enemy)
    const update = props.update

    function handleClick(e) {
        e.preventDefault()
        console.log("click")
        console.log(state)
        update(structuredClone(combatRound(state)))
    }

    return (
        <div id={"combatWindow"}>
            <StatsWindow onClick={handleClick} character={state.player} className={"player"}/>
            <StatsWindow character={state.combat.enemy} className={"enemy"} />
            <div className={"player window"}>
                {...activeDice.playerDice.map((d, i) => <Face key={i} face={d.faces[d.showingFace]} scale={"50%"}/>)}
            </div>
            <div className={"enemy window"}>
                {...activeDice.enemyDice.map((d, i) => <Face key={i} face={d.faces[d.showingFace]} scale={"50%"}/>)}
            </div>
        </div>
    )
}

function StatsWindow(props) {
    const {character, onClick} = props
    return (
        <div className={props.className + " stats"}>
            <p>{character.name}</p>
            <meter min={0}
                   low={character.health.max/3}
            max={character.health.max}
            value={character.health.current}
            ></meter><p className={"healthCount"}>{character.health.current}/{character.health.max}</p>
            {props.className == "player" ? <button onClick={onClick}>Roll!</button> : ''}
        </div>
    )
}