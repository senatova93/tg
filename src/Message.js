import React from 'react';
import styles from './Message.module.css';
import NameMessage from "./NameMessage";
import MainMessage from "./MainMessage";
import Time from './Time'

function Message() {
  return (
    <div className={styles.message}>
        <div className={styles.cloud}>
     <NameMessage/>
     <MainMessage/>
     <Time/>

        </div>


    </div>
  );
}

export default Message;
