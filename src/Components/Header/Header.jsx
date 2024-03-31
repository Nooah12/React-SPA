import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'

const Header = ({title, update}) => {
  return (
    <>
    <header className={styles.header}>
        <h1>{title}</h1>
    </header>
    <Navbar update={update} />
    </>

  )
}

export default Header