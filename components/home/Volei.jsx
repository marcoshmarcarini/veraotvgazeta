import style from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { brasb, montserrat } from '../../pages/_app'


/* Links das Modalidades com links de inscrição e fotos */
const linkVolei = `https://www.ticketsports.com.br/e/heroes-race-etapa-marataizes-es-34985`
const linkVoleiFotos = `Aguardando Link das fotos`

const txtData = {color: '#ffcd53',fontSize: '90px',textAlign: 'end'}
const txtLocalVol = {color: '#5200a8', fontSize: '15px', textAlign:'end', fontWeight: '900'}
const txtTitleVol = {fontSize: '40px', maxWidth: '250px', marginBottom: '20px'}
const btnVolei = {display: 'none', backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnVoleiFotos = {display:'none',backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}

const videoSize = { width: '640px', height: '360px', display: 'none' }

export default function Volei(){
    return(
        <div className={style.volei}>
                <div className={style.foto}>
                    <div className={style.fotoVolei}>
                        <Image src={`/img/Foto-volei.png`} width={300} height={343} quality={100} alt={`Torneio de Vôlei`}/>
                    </div>
                    <div className={style.videoVolei}>
                        <video controls style={videoSize} poster={`/videos/travessia-capa.png`}>
                            <source src={'/videos/video-travessia.mp4'} />
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
                            Prepara o saque, levanta e fecha o set! Participe direto das areia da Pérola Capixaba.
                        </p>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkVoleiFotos}`} style={btnVoleiFotos} target={`_blank`}>
                            Confira as Fotos
                         </Link> 
                    </div>
                </div>
        </div>
    )
}