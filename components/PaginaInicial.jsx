import Link from 'next/link'
import style from '../styles/Home.module.css'
import Image from 'next/image'
import { brasb, montserrat } from '../pages/_app'


/* Links das Modalidades com links de inscrição e fotos */
const linkTravessia = `https://www.ticketsports.com.br/e/TRAVESSIA+DE+IRIRI-34956`
const linkTravessiaFotos = `https://flic.kr/s/aHBqjAny4h`

const txtData = {color: '#ffcd53',fontSize: '90px',textAlign: 'start'}
const btnTravessia = {backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const videoSize = { width: '640px', height: '360px' }

export default function PaginaInicial(){
    return(
        <>
            <div className={`${style.topo} ${style.container}`}>
                <Image src='/img/logo-2023.png' width={700} height={700} alt="Verão TV Gazeta 2023" quality={75}/>
                <p className={style.txtTopo}>
                    O verão tá aí! O Verão tá ON, tá conectado com você, tá pronto pra receber sua 
                    família, seus amigos e você de braços abertos. Foco na saúde: os cuidados continuam. 
                    É pra se cuidar, é pra você se divertir. Então, vem para o Verão! Faça suas inscrições 
                    em nossas atrações, participe dos campeonatos, chega chegando em primeiro lugar. 
                    É hora de celebrar, de encontrar e de reencontrar. <b>Vem para o Verão 2023 TV Gazeta Sul.</b>
                </p>
            </div>
            <div className={style.travessia}>
                <div className={style.foto}>
                    <div className={style.fotoTravessia}>
                        <Image src={`/img/Foto-travessia.png`} width={300} height={343} />
                    </div>
                    <div className={style.videoTravessia}>
                        <video controls style={videoSize} poster={`/videos/travessia-capa.png`}>
                            <source src={'/videos/video-travessia.mp4'} />
                        </video>
                    </div>
                </div>
                <div className={style.txtTravessia}>
                    <div className={style.txtTrav}>
                        <p className={brasb.className} style={txtData}>
                            07/01
                        </p>
                        <p className={`${style.txtTexto} ${montserrat.className}`}>
                            No dia 07/01, o mar de Iriri recebeu 200 competidores numa travessia que foi um sucesso!
                        </p>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkTravessiaFotos}`} style={btnTravessia} target={`_blank`}>
                            Confira as Fotos
                         </Link> 
                    </div>
                </div>
            </div>
            <div className={style.heroes}>
                <div className={style.foto}>
                    <div>foto</div>
                </div>
                <div className={style.txtHeroes}>
                    <div>text</div>
                    <div>botão</div>
                </div>
            </div>
            <div className={style.volei}>
                <div className={style.foto}>
                    <div>foto</div>
                </div>
                <div className={style.txtvolei}>
                    <div>text</div>
                    <div>botão</div>
                </div>
            </div>
            <div className={style.corrida}>
                <div className={style.foto}>
                    <div>foto</div>
                </div>
                <div className={style.txtCorrida}>
                    <div>text</div>
                    <div>botão</div>
                </div>
            </div>
        </>
    )
}