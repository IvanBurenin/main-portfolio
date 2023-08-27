'use client'

import { Typewriter } from 'react-simple-typewriter';

import styles from './TopText.module.css';

export default function TopText() {
    return (
        <>
            <div className={styles.topTitleContainer}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`style speed quality`]}
                        typeSpeed={100}
                    />
                </div>
            </div>

            <div className={styles.topTitleAdaptive}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`style`]}
                        typeSpeed={100}
                    />
                    <Typewriter
                        words={[`speed`]}
                        typeSpeed={100}
                    />
                    <Typewriter
                        words={[`quality`]}
                        typeSpeed={75}
                    />
                </div>
            </div>
        </>
    )
}