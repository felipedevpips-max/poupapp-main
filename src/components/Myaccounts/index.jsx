import { Button } from '../Button';
import { IconCurrency } from '../icons';
import { Myitem } from '../Myitem';

import styles from './myaccounts.module.css'

export const Myaccounts = () => {
  const items = [
    {
      "bank": "Anybank",
      "balance": 1200
    },
    {
      "bank": "Bytebank",
      "balance": 800
    },
    {
      "bank": "Switch Bank",
      "balance": 1800
    }
  ]

  return (
      <>
        <ul className={styles.list}>
          {items.map((myitem, index) => {
            return (
              <li key={index}>
                <Myitem item={myitem}/>
              </li>
            );
          })}
        </ul>
  
        <div className={styles.actions}>
          <Button>
            <IconCurrency /> Adicionar conta
          </Button>
        </div>
      </>
    );

}