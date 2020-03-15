import React from 'react';
import styles from './Cloud.module.css';
import Name from "../Name/Name";
import Text from "../Text/Text";
import Time from '../Time/Time'

function Cloud() {
  return (
    <div className={styles.message}>
        <div className={styles.cloud}>
     <Name/>
     <Text/>
     <Time/>

        </div>


    </div>
  );
}

export default Cloud;
