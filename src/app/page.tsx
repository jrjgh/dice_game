import Image from 'next/image'
import styles from './page.module.css'
import {One, Two, Three, Four, Five, Six, Seven, Eight, Nine} from './components/Face'

export default function Home() {
    return (
        <main>
            <h1>Hello, world!</h1>
            <One scale={"50%"}/>
            <Two scale={"50%"}/>
            <Three scale={"50%"}/>
            <Four scale={"50%"}/>
            <Five scale={"50%"}/>
            <Six scale={"50%"}/>
            <Seven scale={"50%"}/>
            <Eight scale={"50%"}/>
            <Nine scale={"50%"}/>
        </main>
    )
}
