import styles from './Face.module.css'
import {Pip} from './Pip.tsx'
import {Face as f} from '@/game/dice.ts'

function c(classname1, classname2: string): string {
    return `${classname1} ${classname2}`
}

export function Face(props) {
    const face: f = props.face
    switch (face.pips.length) {
        case 1:
            return <One face={face} scale={props.scale}/>
        case 2:
            return <Two face={face} scale={props.scale} />
        case 3:
            return <Three face={face} scale={props.scale} />
        case 4:
            return <Four face={face} scale={props.scale} />
        case 5:
            return <Five face={face} scale={props.scale} />
        case 6:
            return <Six face={face} scale={props.scale} />
        case 7:
            return <Seven face={face} scale={props.scale} />
        case 8:
            return <Eight face={face} scale={props.scale} />
        case 9:
            return <Nine face={face} scale={props.scale} />
    }
}

export function One(props) {
    return (
        <div className={c(styles.face, styles.one)} style={{scale: props.scale}}>
            <div>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

export function Two(props) {
    return (
        <div className={c(styles.face, styles.two)} style={{scale: props.scale}}>
            <div className={styles.g22}>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

export function Three(props) {
    return (
        <div className={c(styles.face, styles.three)} style={{scale: props.scale}}>
            <div className={styles.g33}>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

export function Four(props) {
    return (
        <div className={c(styles.face, styles.four)} style={{scale: props.scale}}>
            <div className={styles.g22}>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

export function Five(props) {
    return (
        <div className={c(styles.face, styles.five)} style={{scale: props.scale}}>
            <div className={styles.g33}>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

export function Six(props) {
    return (
        <div className={c(styles.face, styles.six)} style={{scale: props.scale}}>
            <div>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

export function Seven(props) {
    return (
        <div className={c(styles.face, styles.seven)} style={{scale: props.scale}}>
            <div className={styles.g33}>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

export function Eight(props) {
    return (
        <div className={c(styles.face, styles.eight)} style={{scale: props.scale}}>
            <div className={styles.g33}>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}


export function Nine(props) {
    return (
        <div className={styles.face} style={{scale: props.scale}}>
            <div className={styles.g33}>
                {...props.face.pips.map((pip, i) => <Pip key={i} pip={pip}/>)}
            </div>
        </div>
    )
}

