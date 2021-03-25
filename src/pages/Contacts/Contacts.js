import styles from './Contacts.module.scss';
import Menu from '../../components/menu/Menu';
import Cursor from '../../components/cursor/cursor';
import CursorContextProvider from "../../components/cursorContext/cursorContext";


function Contacts() {
  return (
    <CursorContextProvider>
      <div className={styles.homeContainer}>
        <Cursor />
        <Menu />
        Contacts
      </div>
    </CursorContextProvider>
  );
}

export default Contacts;
