'use client'

import Link from 'next/link'
import { useState } from 'react'

import stylesMain from '../main.module.css'
import styles from './header.module.css'

export default function Header() {
  const [menu, setMenu] = useState(false)

  const onClickMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={stylesMain.container}>
          <div className={`${styles.headerInner} ${menu ? styles.menuActive : ''}`}>
            <div className={styles.logo}>
              <span className={styles.logoText}>S</span>
              <span className={styles.logoDash}>/</span>
              <span className={styles.logoText}>S</span>
              <span className={styles.logoDash}>/</span>
              <span className={styles.logoText}>Q</span>
            </div>
            <button onClick={onClickMenu} className={styles.menuBtn}>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
            </button>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#about'}>Обо мне</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#projects'}>Проекты</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#skills'}>Навыки</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#contacts'}>Связаться/Сделать заказ</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}