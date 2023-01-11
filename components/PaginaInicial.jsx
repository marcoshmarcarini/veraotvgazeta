import Topo from './home/Topo'
import Travessia from './home/Travessia'
import Heroes from './home/Heroes'
import Volei from './home/Volei'
import Corrida from './home/Corrida'
import MTB from './home/MTB'

export default function PaginaInicial(){
    return(
        <>
            <Topo />
            <Travessia />
            <Heroes />
            <Volei />
            <Corrida />
            <MTB />
        </>
    )
}