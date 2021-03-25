import styles from './Portofolio.module.scss';
import Menu from '../../components/menu/Menu';
import Cursor from '../../components/cursor/cursor';
import CursorContextProvider from "../../components/cursorContext/cursorContext";


function Portofolio() {
  return (
    <CursorContextProvider>
      <div className={styles.homeContainer}>
        <Cursor />
        <Menu />
        Portofolio
      </div>
    </CursorContextProvider>
  );
}

export default Portofolio;
