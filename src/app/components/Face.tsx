import styles from './Face.module.css'

function c(classname1, classname2: string): string {
    return `${classname1} ${classname2}`
}

export function One(props) {
    return (
        <div className={c(styles.face, styles.one)} style={{scale: props.scale}}>
            <div>
                <ul>
                </ul>
                <ul>
                    <div></div>
                </ul>
                <ul>
                </ul>
            </div>
        </div>
    )
}

export function Two(props) {
    return (
        <div className={c(styles.face, styles.two)} style={{scale: props.scale}}>
            <div>
                <ul className={"firstRow"}>
                    <div></div>
                    <div></div>
                </ul>
                <ul className={"secondRow"}>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}

export function Three(props) {
    return (
        <div className={c(styles.face, styles.three)} style={{scale: props.scale}}>
            <div>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}

export function Four(props) {
    return (
        <div className={c(styles.face, styles.four)} style={{scale: props.scale}}>
            <div>
                <ul>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}

export function Five(props) {
    return (
        <div className={c(styles.face, styles.five)} style={{scale: props.scale}}>
            <div>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}

export function Six(props) {
    return (
        <div className={c(styles.face, styles.six)} style={{scale: props.scale}}>
            <div>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}

export function Seven(props) {
    return (
        <div className={c(styles.face, styles.seven)} style={{scale: props.scale}}>
            <div>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}

export function Eight(props) {
    return (
        <div className={c(styles.face, styles.eight)} style={{scale: props.scale}}>
            <div>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}


export function Nine(props) {
    return (
        <div className={c(styles.face, styles.nine)} style={{scale: props.scale}}>
            <div>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
                <ul>
                    <div></div>
                    <div></div>
                    <div></div>
                </ul>
            </div>
        </div>
    )
}

