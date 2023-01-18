import style from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { brasb, montserrat } from '../../pages/_app'


/* Links das Modalidades com links de inscrição e fotos */
const linkHeroes = `https://www.ticketsports.com.br/e/heroes-race-etapa-marataizes-es-34985`
const linkHeroesFotos = `https://flic.kr/s/aHBqjAoDAP`
const resHeroes = `http://www.chiptiming.com.br/resultados/heroes/heroes`

const txtData = {color: '#ffcd53',fontSize: '90px',textAlign: 'end'}
const txtLocalHer = {color: '#5200a8', fontSize: '15px', textAlign:'end', fontWeight: '900'}
const txtTitleHer = {fontSize: '40px', maxWidth: '250px', marginBottom: '20px'}
const btnHeroes = {display:'none', backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnHeroesFotos = {display:'flex',backgroundColor: '#5200a8',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const btnHeroesRes = {display:'flex',backgroundColor: '#e51a36',color:'#ffffff',fontWeight: '500',padding: '10px',borderRadius: '50px',textDecoration: 'none',marginBottom: '20px',fontSize: '1.2rem'}
const videoSize = { width: '640px', height: '360px', display: 'flex' }

export default function Heroes(){
    return(
        <div className={style.heroes}>
                <div className={style.foto}>
                    <div className={style.fotoHeroes}>
                        <Image src={`/img/Foto-heroes.jpeg`} width={300} height={343} quality={100} alt={`Corrida com Obstáculos Heroes Race`}/>
                    </div>
                    <div className={style.videoHeroes}>
                        <video controls style={videoSize} poster={`/videos/heroes-capa.png`}>
                            <source src={'/videos/video-heroes.mp4'} />
                        </video>
                    </div>
                    <div className={brasb.className}>
                         <Link href={`${linkHeroes}`} style={btnHeroes} target={`_blank`}>
                            Inscreva-se
                         </Link> 
                    </div>
                </div>
                <div className={style.txtHeroes}>
                    <div className={style.txtHer}>
                        <div className={style.txtDataHeroes}>
                            <p className={brasb.className} style={txtData}>
                                14/01
                            </p>
                            <p className={montserrat.className} style={txtLocalHer}>
                                ITAPEMIRIM
                            </p>
                        </div>
                        <p className={brasb.className} style={txtTitleHer}>
                            CORRIDA COM OBSTÁCULOS HEROES RACE
                        </p>
                        <p className={`${style.txtTexto} ${montserrat.className}`}>
                             No dia 14/01, Itapemirim recebeu mais de 100 competidores no desafio Heroes Race na praia de Itaóca. Agilidade, atenção e força foram os segredos para ganhar essa competição.
                        </p>
                    </div>
                    <div className={brasb.className}>
                        <Link href={`${resHeroes}`} style={btnHeroesRes} target={`_blank`}>
                            Confira o Resultado
                         </Link> 
                         <Link href={`${linkHeroesFotos}`} style={btnHeroesFotos} target={`_blank`}>
                            Confira as Fotos
                         </Link> 
                    </div>
                </div>
        </div>
    )
}