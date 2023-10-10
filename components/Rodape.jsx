import styles from '../styles/Home.module.css'

const linhaHorizontal = `<hr className={styles.linha}/>`
const rodape = {textAlign: 'center'}

export default function Rodape(){
    return(
        <div style={rodape}>
            <footer className={styles.footer}>
                <p className={styles.txtRodape}>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2024. Todos os direitos reservados a <b>TV Gazeta Sul.</b></p>
            </footer>
        </div>
    )
}