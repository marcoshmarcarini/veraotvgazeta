import Image from "next/image"
import styles from "../styles/Patrocinadores.module.css"
export default function Patrocinadores(){
    return(
        <div className={styles.patrocinadores}>
            <Image src={`/img/Patrocinadores.png`} width={500} height={90} alt={`Patrocinadores`} />
        </div>
    )
}