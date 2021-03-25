import styles from './Aboutme.module.scss';
import Menu from '../../components/menu/Menu';
import Cursor from '../../components/cursor/cursor';
import CursorContextProvider from "../../components/cursorContext/cursorContext";


function Aboutme() {
  return (
    <CursorContextProvider>
      <div className={styles.homeContainer}>
        <Cursor />
        <Menu />
        Aboutme
      </div>
    </CursorContextProvider>
  );
}

export default Aboutme;
