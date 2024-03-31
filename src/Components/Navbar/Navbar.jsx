import styles from './Navbar.module.css'
import Button from '../Button/Button'

const Navbar = ({update}) => {
  

  return (
    <nav className={styles.navbar}>
      <Button name="Home" update={update} />
      <Button name="Marines" update={update} />
      <Button name="Pirates" update={update} />
    </nav>
  )
}

export default Navbar