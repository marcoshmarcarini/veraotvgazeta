import style from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { brasb, montserrat } from '../../pages/_app'


/* Links das Modalidades com links de inscrição, fotos e documentos*/
const linkVolei = `https://www.ticketsports.com.br/e/heroes-race-etapa-marataizes-es-34985`
const linkVoleiFotos = `https://flic.kr/s/aHBqjApu8t`
const linkVoleiResultado = `/pdf/resultado_volei.pdf`

/* Css dentro de variáveis */
const txtData = {color: '#ffcd53',fontSize: '60px',textAlign: 'end', }
const txtLocalVol = {color: '#5200a8', fontSize: '15px', textAlign:'end', fontWeight: '900'}
const txtTitleVol = {fontSize: '35px', maxWidth: '250px', marginBottom: '10px'}
const btnVolei = {display: 'none', backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnVoleiFotos = {display:'block',backgroundColor: '#ffb705',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnVoleiResultado = {display:'block',backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}

const videoSize = { width: '640px', height: '360px', display: 'block' }
const botoes = {display: 'flex', flexWrap: 'wrap', gap: '10px'}

export default function Volei(){
    return(
        <div className={style.volei}>
                <div className={style.foto}>
                    <div className={style.fotoVolei}>
                        <Image src={`/img/Foto-volei.png`} width={300} height={343} quality={100} alt={`Torneio de Vôlei`}/>
                    </div>
                    <div className={style.videoVolei}>
                        <video controls style={videoSize} poster={`/videos/volei-capa.png`}>
                            <source src={'/videos/video-volei.mp4'} />
                        </video>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkVolei}`} style={btnVolei} target={`_blank`}>
                            Inscreva-se
                         </Link> 
                    </div>
                </div>
                <div className={style.txtVolei}>
                    <div className={style.txtVol}>
                        <div className={style.txtDataVolei}>
                            <p className={brasb.className} style={txtData}>
                                21/01
                            </p>
                            <p className={montserrat.className} style={txtLocalVol}>
                                MARATAÍZES
                            </p>
                        </div>
                        <p className={brasb.className} style={txtTitleVol}>
                            TORNEIO DE VÔLEI
                        </p>
                        <p className={`${style.txtTexto} ${montserrat.className}`}>
                            A perola capixaba recebeu 60 atletas que esbanjaram talento e deram um show no torneio de vôlei feminino que foi um sucesso!
                        </p>
                    </div>
                    <div className={brasb.className} style={botoes}>
                         <Link href={`${linkVoleiResultado}`} style={btnVoleiFotos} target={`_blank`}>
                            Confira o Resultado
                         </Link> 
                         <Link href={`${linkVoleiFotos}`} style={btnVoleiResultado} target={`_blank`}>
                            Confira as Fotos
                         </Link> 
                    </div>
                </div>
        </div>
    )
}