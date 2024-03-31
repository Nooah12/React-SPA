import styles from './Home.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import background from '../../assets/one-piece.jpg';

const Home = ({ update }) => {
  return (
    <>
      <Header title="One Piece" update={update} />
      <section className={styles.homeContainer}>
        <div className={styles.bgImage} style={{ backgroundImage: `url(${background})` }}>
          <div className={styles.bgText}>
            <p>One Piece is the name the world gave to all the treasure gained by the Pirate King Gol D. Roger. At least a portion of it once belonged to Joy Boy during the Void Century. The treasure is said to be of unimaginable value, and is currently located on the final island of the Grand Line: Laugh Tale.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
