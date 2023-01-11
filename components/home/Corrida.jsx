import style from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { brasb, montserrat } from '../../pages/_app'


/* Links das Modalidades com links de inscrição e fotos */
const linkCorrida = `https://www.ticketsports.com.br/e/8-corrida-tv-gazeta-sul-e-corridinha-tv-gazeta-sul--34986`
const linkCorridaFotos = `Aguardando Link das fotos`

const txtData = {color: '#ffcd53',fontSize: '90px',textAlign: 'end'}
const txtLocalCor = {color: '#5200a8', fontSize: '15px', textAlign:'end', fontWeight: '900'}
const txtTitleCor = {fontSize: '40px', maxWidth: '200px', marginBottom: '20px'}
const btnCorrida = {backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnCorridaFotos = {display:'none',backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}

const videoSize = { width: '640px', height: '360px', display: 'none' }

export default function Corrida(){
    return(
        <div className={style.corrida}>
                <div className={style.foto}>
                    <div className={style.fotoCorrida}>
                        <Image src={`/img/Foto-corrida.jpeg`} width={300} height={343} quality={100} alt={`8ª Corrida TV Gazeta Sul`}/>
                    </div>
                    <div className={style.videoCorrida}>
                        <video controls style={videoSize} poster={`/videos/travessia-capa.png`}>
                            <source src={'/videos/video-travessia.mp4'} />
                        </video>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkCorrida}`} style={btnCorrida} target={`_blank`}>
                            Inscreva-se
                         </Link> 
                    </div>
                </div>
                <div className={style.txtCorrida}>
                    <div className={style.txtCor}>
                        <div className={style.txtDataCorrida}>
                            <p className={brasb.className} style={txtData}>
                                28/01
                            </p>
                            <p className={montserrat.className} style={txtLocalCor}>
                                MARATAÍZES
                            </p>
                        </div>
                        <p className={brasb.className} style={txtTitleCor}>
                            8ª CORRIDA TV GAZETA SUL
                        </p>
                        <p className={`${style.txtTexto} ${montserrat.className}`}>
                            Nossa já tradicional corrida volta a acontecer com força total. Prepara o tênis, o kit corrida e corre pra cá!
                        </p>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkCorridaFotos}`} style={btnCorridaFotos} target={`_blank`}>
                            Confira as Fotos
                         </Link> 
                    </div>
                </div>
        </div>
    )
}