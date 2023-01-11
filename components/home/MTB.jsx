import style from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { brasb, montserrat } from '../../pages/_app'


/* Links das Modalidades com links de inscrição e fotos */
const linkMTB = `https://forms.gle/dKZ84tUQVpPREntN9`
const linkMTBFotos = `Aguardando Link das fotos`

const txtData = {color: '#ffcd53',fontSize: '90px',textAlign: 'end'}
const txtLocalMTB = {color: '#5200a8', fontSize: '15px', textAlign:'end', fontWeight: '900'}
const txtTitleMTB = {fontSize: '40px', maxWidth: '250px', marginBottom: '0px'}
const btnMTB = {backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnMTBFotos = {display:'none',backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}

const videoSize = { width: '640px', height: '360px', display: 'none' }

export default function MTB(){
    return(
        <div className={style.mtb}>
                <div className={style.foto}>
                    <div className={style.fotoMTB}>
                        <Image src={`/img/Foto-mtb.png`} width={300} height={343} quality={100} alt={`8ª Corrida TV Gazeta Sul`}/>
                    </div>
                    <div className={style.videoMTB}>
                        <video controls style={videoSize} poster={`/videos/travessia-capa.png`}>
                            <source src={'/videos/video-travessia.mp4'} />
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
                            Essa é pra quem não dispensa uma boa pedalada! Presidente Kennedy vai ser palco de altas manobras com bikes incríveis! Venha e participe!
                        </p>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkMTBFotos}`} style={btnMTBFotos} target={`_blank`}>
                            Confira as Fotos
                         </Link> 
                    </div>
                </div>
        </div>
    )
}