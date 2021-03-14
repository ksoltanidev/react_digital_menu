import styles from './Home.module.scss';
import Menu from '../../components/menu/Menu';
import Cursor from '../../components/cursor/cursor';
import CursorContextProvider from "../../components/cursorContext/cursorContext";


function Home() {
  return (
    <CursorContextProvider>
      <div className={styles.homeContainer}>
        <Cursor />
        <Menu />
      </div>
    </CursorContextProvider>
  );
}

export default Home;
