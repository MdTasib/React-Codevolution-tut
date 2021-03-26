import React from 'react';
import './stylesheet.css';
import styles from './style.module.css';

function ModuleStyle() {
    return (
        <div>
            <h2 className='error'>Error</h2>
            <h3 className={styles.success}>Success</h3>
        </div>
    );
}

export default ModuleStyle;