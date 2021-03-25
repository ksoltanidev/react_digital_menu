import styles from './Freestyle.module.scss';
import Menu from '../../components/menu/Menu';
import Cursor from '../../components/cursor/cursor';
import CursorContextProvider from "../../components/cursorContext/cursorContext";


function Freestyle() {
  return (
    <CursorContextProvider>
      <div className={styles.homeContainer}>
        <Cursor />
        <Menu />
        Freestyle
      </div>
    </CursorContextProvider>
  );
}

export default Freestyle;
