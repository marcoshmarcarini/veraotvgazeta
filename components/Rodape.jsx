import styles from '../styles/Home.module.css'
import Image from 'next/image'

const linhaHorizontal = `<hr className={styles.linha}/>`

export default function Rodape(){
    return(
        <div>
            <footer className={styles.footer}>
                
                <p className={styles.txtRodape}>&copy 2022. Todos os direitos reservados a <b>TV Gazeta Sul.</b></p>
            </footer>
        </div>
    )
}