import style from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { brasb, montserrat } from '../../pages/_app'


/* Links das Modalidades com links de inscrição e fotos */
const linkTravessia = `https://www.ticketsports.com.br/e/TRAVESSIA+DE+IRIRI-34956`
const linkTravessiaFotos = `https://flic.kr/s/aHBqjAny4h`

const txtData = {color: '#ffcd53',fontSize: '60px',textAlign: 'end' }
const txtLocalTrav = {color: '#5200a8', fontSize: '15px', textAlign:'end', fontWeight: '900'}
const txtTitleTrav = {fontSize: '35px', maxWidth: '200px', marginBottom: '10px'}
const btnTravessia = {display:'none',backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnTravessiaFotos = {backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const videoSize = { width: '640px', height: '360px' }
const botoes = {display: 'flex', flexWrap: 'wrap', gap: '10px'}

/** Como nesse caso nós temos os vídeos e as fotos, a div que contém a foto principal do evento fica com o display: none. */

export default function Travessia(){
    return(
        <div className={style.travessia}>
                <div className={style.foto}>
                    <div className={style.fotoTravessia}>
                        <Image src={`/img/Foto-travessia.png`} width={300} height={343} alt={`Travessia Aquática`}/>
                    </div>
                    {/* <div className={style.videoTravessia}>
                        <video controls style={videoSize} poster={`/videos/travessia-capa.png`}>
                            <source src={'/videos/video-travessia.mp4'} />
                        </video>
                    </div> */}
                    <div className={brasb.className}>
                         <Link href={`${linkTravessia}`} style={btnTravessia} target={`_blank`}>
                            Inscreva-se
                         </Link> 
                    </div>
                </div>
                <div className={style.txtTravessia}>
                    <div className={style.txtTrav}>
                        <div className={style.txtDataTrav}>
                            <h1 className={brasb.className} style={txtData}>
                                07/01
                            </h1>
                            <p className={montserrat.className} style={txtLocalTrav}>
                                ANCHIETA-IRIRI
                            </p>
                        </div>
                        <p className={brasb.className} style={txtTitleTrav}>
                            TRAVESSIA AQUÁTICA
                        </p>
                        
                        {/* <p className={`${style.txtTexto} ${montserrat.className}`}>
                            No dia 06/01, o mar de Iriri recebeu 200 competidores numa travessia que foi um sucesso!
                        </p> */}
                    </div>
                    <div className={brasb.className} style={botoes}>
                         <Link href={`${linkTravessia}`} style={btnTravessiaFotos} target={`_blank`}>
                            Inscreva-se
                         </Link> 
                    </div>
                </div>
        </div>
    )
}