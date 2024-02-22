import styles from './styles.module.scss' 
import Image from 'next/image';
import Dash from '../../resources/dashboard example.png'

const Dashboards = ()=>{
  

    return(

        <>
        <div className={styles.container} > 
        <h1 className={styles.title}>Dashboards</h1>
        <Image
        className={styles.fundo}
        src={Dash}
        alt="Dashboard Example"
        quality={100}
        />
        
        </div>
        </>
    )
}

export default Dashboards;