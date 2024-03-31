import styles from './Marines.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { marines } from '../../data/characters'

const Marines = ({update}) => {
  return (
    <>
    <Header title="Marines" update={update} />
    <div className={styles.container}>

      {marines.map((character, index) => 
      <div className={styles.character} key={index}>
            <p><img className={styles.marineImg} src={character.image} alt={character.name} /></p>
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

export default Marines