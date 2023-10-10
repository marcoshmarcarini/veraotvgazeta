import style from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Topo(){
    return(
            <div className={`${style.topo} ${style.container}`}>
                <Image src='/img/logo-2024.svg' width={550} height={550} alt="Verão TV Gazeta 2023" quality={100} className={style.imgTopo}/>
                <p className={style.txtTopo}>
                    O verão tá aí! O Verão tá ON, tá conectado com você, tá pronto pra receber sua 
                    família, seus amigos e você de braços abertos. Foco na saúde: os cuidados continuam. 
                    É pra se cuidar, é pra você se divertir. Então, vem para o Verão! Faça suas inscrições 
                    em nossas atrações, participe dos campeonatos, chega chegando em primeiro lugar. 
                    É hora de celebrar, de encontrar e de reencontrar. <b>Vem para o Verão 2024 TV Gazeta Sul.</b>
                </p>
            </div>
    )
}