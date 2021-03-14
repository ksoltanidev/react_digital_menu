import styles from './test.module.scss';

import Losange from "../components/losange/losange";

function Test() {
  return (
    <div className={styles.testBackground}>
    <div className={styles.testContainer}>
            <Losange/>

    </div>
    </div>
  );
}

export default Test;
