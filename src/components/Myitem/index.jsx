import { IconBank } from '../icons'
import styles from './myitem.module.css'

export const Myitem = ({ item }) => {


    return (
        <div className={styles.bank}>
            <div >
                <p><IconBank/>{item.bank}</p>
            </div>
            <div className={styles.balance}>
                <p>Saldo</p>
                <p>{item.balance}</p>
            </div>
        </div>
    )
}