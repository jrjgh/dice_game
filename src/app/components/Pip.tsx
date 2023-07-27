import './Pip.css'
import {Pip as p} from '@/game/dice.ts'

export function Pip(props) {
    switch (props.pip) {
        case p.Number:
            return <NumberPip />
        case p.Damage:
            return <DamagePip />
        case p.Healing:
            return <HealingPip />
        case p.Armor:
            return <ArmorPip />
    }
}

export function NumberPip() {
    return <div className="pip number"></div>
}

export function DamagePip() {
    return (<div className="pip damage">
        <img src="/sword.svg" />
    </div>)
}

export function HealingPip() {
    return (<div className="pip healing">
        <img src="/heart.svg" />
    </div>)
}

export function ArmorPip() {
    return (<div className="pip armor">
        <img src="/shield.svg" />
    </div>)
}
