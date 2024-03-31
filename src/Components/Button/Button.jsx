import styles from './Button.module.css'

const Button = ({name, update}) => {
  const handleClick = () => {
    {name === "Home" ? update(null) : update(name)}
  }

  return (
    <div className={styles.button} onClick={handleClick}>
      {name}
    </div>
  )
}

export default Button