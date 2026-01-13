import { IconSearch } from '../icons'
import styles from './searchinput.module.css'


export const SearchInput = (props) => {
    return (
        <div className={styles.container}>
            <IconSearch/>
            <input placeholder='Procure seu dinheiro...' className={styles.input} {...props}/>
        </div>
    )
}