import style from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { brasb, montserrat } from '../../pages/_app'


/* Links das Modalidades com links de inscrição e fotos */
const linkMTB = `https://forms.gle/dKZ84tUQVpPREntN9`
const linkMTBFotos = `https://flic.kr/s/aHBqjAqrKc`

const txtData = {color: '#ffcd53',fontSize: '60px',textAlign: 'end', }
const txtLocalMTB = {color: '#5200a8', fontSize: '15px', textAlign:'end', fontWeight: '900', marginLeft: "auto", maxWidth: "50px", transform: "TranslateX(-50px)"}
const txtTitleMTB = {fontSize: '35px', maxWidth: '250px', marginBottom: '0px'}
const btnMTB = {display: 'none', backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnMTBFotos = {display:'flex',backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}

const videoSize = { width: '640px', height: '360px', display: 'flex' }
const botoes = {display: 'flex', flexWrap: 'wrap', gap: '10px'}

export default function MTB(){
    return(
        <div className={style.mtb}>
                <div className={style.foto}>
                    <div className={style.fotoMTB}>
                        <Image src={`/img/Foto-mtb.png`} width={300} height={343} quality={100} alt={`8ª Corrida TV Gazeta Sul`}/>
                    </div>
                    <div className={style.videoMTB}>
                        <video controls style={videoSize} poster={`/videos/mtb-capa.png`}>
                            <source src={'/videos/video-mtb.mp4'} />
                        </video>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkMTB}`} style={btnMTB} target={`_blank`}>
                            Inscreva-se
                         </Link> 
                    </div>
                </div>
                <div className={style.txtMTB}>
                    <div className={style.txtMTB}>
                        <div className={style.txtDataMTB}>
                            <p className={brasb.className} style={txtData}>
                                29/01
                            </p>
                            <p className={montserrat.className} style={txtLocalMTB}>
                                PRESIDENTE KENNEDY
                            </p>
                        </div>
                        <p className={brasb.className} style={txtTitleMTB}>
                            CIRCUITO MTB
                        </p>
                        <p className={`${style.txtTexto} ${montserrat.className}`}>
                            O circuito MTB em Presidente Kennedy atraiu diversos ciclistas que se desafiaram em terrenos de todos os tipos.
                        </p>
                    </div>
                    <div className={brasb.className} style={botoes}>
                         <Link href={`${linkMTBFotos}`} style={btnMTBFotos} target={`_blank`}>
                            Confira as Fotos
                         </Link> 
                    </div>
                </div>
        </div>
    )
}