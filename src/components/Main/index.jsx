import styles from './main.module.css'

export const Main = (props) => {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
    )
}