import styles from './Pirates.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { pirates } from '../../data/characters'

const Pirates = ({update}) => {
  return (
    <>
    <Header title="Pirates" update={update} />
    <div className={styles.container}>

      {pirates.map((character, index) => 
      <div className={styles.character} key={index}>
            <p><img className={styles.pirateImg} src={character.image} alt={character.name} /></p>
            <p><span><b>Name:</b> </span>{character.name}</p>
            <p><span><b>Role:</b> </span>{character.role}</p>
            <p><span><b>Skill:</b> </span>{character.skill}</p>
            <p><span><b>Origin:</b> </span>{character.origin}</p>
            <p><span><b>Alias:</b> </span>{character.alias}</p>
            <p><span><b>Bounty:</b> </span>{character.bounty}</p>
        </div>
      )}
    </div>
    <Footer />
    </>
  )
}

export default Pirates
