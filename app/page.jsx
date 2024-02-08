import Link from 'next/link'

import mainStyles from './main.module.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.top}>
        <div className={mainStyles.container}>
          <div className={styles.topInner}>
            <p className={styles.minTitle}>Веб-разработка и веб-дизайн</p>
            <img src="./main/bureninprod.png" alt="BURENIN PRODUCTION" style="width: 530px"/>
            <Link href='#contacts' className={styles.button}>Сделать заказ</Link>
          </div>
        </div>
      </section>

      <section id='about' className={styles.about}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>Обо мне</h2>
          <div className={styles.aboutInner}>
            <div className={styles.aboutLeft}>
              <p className={styles.text}>
                Всем привет, меня зовут Иван Буренин, мне 20 лет, я являюсь Front-end разработчиком. Качество выполненного  продукта является приоритетом для меня. При работе гарантирую вежливое общение и обратную связь по верстке.
              </p>
              <p className={styles.text}>
                Работаю с HTML, CSS, JavaScript, React, Next. 
              </p>
              <p className={styles.text}>
                Могу перенести готовую верстку или сверстать специально для Wordpress.
              </p>
              <p className={styles.text}>
                При верстке с макета использую Figma, Photoshop. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className={styles.projects}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>Мои проекты</h2>
          <div className={styles.projectsInner}>
            <p className={styles.text}>
              Все представленные здесь веб-сайты являются полноценными многостраничными проектами, в которых полностью функционируют все интерактивные элементы. Точно так же, как и данное портфолио, эти сайты разработаны с использованием Next.js. Подчеркну, что бренды, представленные на этих сайтах, являются вымышленными, и данные проекты разработаны исключительно с целью продемонстрировать мои умения и навыки в области веб-разработки.
            </p>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <Link href='https://ivanburenin.github.io/rich-tales/' target='a_blank'>
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/rich-tales-link.jpg" alt="" />
                    <h3 className={styles.projectTitle}>Интернет-магазин премиум часов «Rich Tales»</h3>
                  </div>
                </Link>
              </div>
              <div className={styles.gridItem}>
                <Link href='https://ivanburenin.github.io/la-vien/' target='a_blank'>
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/la-vien-link.jpg" alt="" />
                    <h3 className={styles.projectTitle}>Московский ресторан французской кухни «La Vien»</h3>
                  </div>
                </Link>
              </div>
              <div className={styles.gridItem}>
                <Link href='https://ivanburenin.github.io/miami-oasis/' target='a_blank'>
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/miami-oasis-link.jpg" alt="" />
                    <h3 className={styles.projectTitle}>Туристический сайт «Miami Oasis», организующий путевки в Майами</h3>
                  </div>
                </Link>
              </div>
              <div className={styles.gridItem}>
                <Link href='https://ivanburenin.github.io/fusion-fitness/' target='a_blank'>
                  <div className={styles.gridItemInner}>
                    <img src="./main/links/fusion-link.jpg" alt="" />
                    <h3 className={styles.projectTitle}>Фитнес-клуб «FUSION» в центре Екатеринбурга</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='skills' className={styles.skills}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>Мои навыки</h2>
          <div className={styles.skillsInner}>
            <p className={styles.text}>Я осуществляю свою работу в:</p>
            <div className={styles.skillsList}>
              <img className={styles.skillImg} src="./main/skills/html-skill.png" alt="" />
              <img className={styles.skillImg} src="./main/skills/css-skill.png" alt="" />
              <img className={styles.skillImg} src="./main/skills/js-skill.png" alt="" />
              <img className={styles.skillImg} src="./main/skills/wp-skill.png" alt="" />
              <img className={styles.skillImg} src="./main/skills/react-skill.png" alt="" />
              <img className={styles.skillImg} src="./main/skills/next-skill.png" alt="" />
              <img className={styles.skillImg} src="./main/skills/redux-skill.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id='contacts' className={styles.contacts}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>Связаться со мной</h2>
          <div className={styles.contactsInner}>
            <div className={styles.textSection}>
              <p className={styles.text}>
                Совместными усилиями мы сможем добиться впечатляющих результатов и обеспечить успех вашего проекта. Гарантирую предоставление высококачественной работы в оговоренные сроки, полностью удовлетворяя ваши потребности и требования.
              </p>
              <p className={styles.text}>
                Если у Вас появилось желание сделать заказ или связаться со мной, не стесняйтесь написать. Всегда рад начать плодотворное сотрудничество:
              </p>
            </div>
            <ul className={styles.contactsList}>
              <li>
                <Link className={styles.contact} href='https://kwork.ru/user/bureninivan22' target='a_blank' rel="noreferrer">
                  <span className={styles.kwork}>KWORK</span>
                  <span className={styles.contactLink}>https://kwork.ru/user/ivanburenin</span>
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://vk.com/ivanburenin77' target='a_blank' rel="noreferrer"> 
                  <svg className={styles.linkIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M25.1217 3.33325H14.895C5.555 3.33325 3.33334 5.55492 3.33334 14.8783V25.1049C3.33334 34.4433 5.53834 36.6666 14.8783 36.6666H25.105C34.4433 36.6666 36.6667 34.4616 36.6667 25.1216V14.8949C36.6667 5.55492 34.4617 3.33325 25.1217 3.33325ZM30.2433 27.1166H27.8117C26.8917 27.1166 26.615 26.3716 24.965 24.7216C23.525 23.3333 22.9167 23.1599 22.5517 23.1599C22.0483 23.1599 21.91 23.2983 21.91 23.9933V26.1799C21.91 26.7716 21.7183 27.1183 20.1733 27.1183C18.6739 27.0175 17.2199 26.5619 15.931 25.7891C14.6421 25.0163 13.5553 23.9484 12.76 22.6733C10.872 20.3232 9.55824 17.5651 8.92334 14.6183C8.92334 14.2533 9.06167 13.9233 9.75667 13.9233H12.1867C12.8117 13.9233 13.0367 14.2016 13.2817 14.8433C14.4617 18.3166 16.475 21.3366 17.2917 21.3366C17.605 21.3366 17.7417 21.1983 17.7417 20.4166V16.8399C17.6383 15.2083 16.7717 15.0699 16.7717 14.4799C16.7828 14.3243 16.8541 14.1791 16.9705 14.0752C17.0869 13.9713 17.2391 13.9168 17.395 13.9233H21.215C21.7367 13.9233 21.91 14.1833 21.91 14.8083V19.6349C21.91 20.1566 22.135 20.3299 22.2917 20.3299C22.605 20.3299 22.8467 20.1566 23.42 19.5833C24.6514 18.0815 25.6576 16.4084 26.4067 14.6166C26.4832 14.4014 26.6281 14.2171 26.8192 14.0919C27.0103 13.9667 27.2371 13.9075 27.465 13.9233H29.8967C30.625 13.9233 30.78 14.2883 30.625 14.8083C29.7408 16.789 28.6468 18.6692 27.3617 20.4166C27.1 20.8166 26.995 21.0249 27.3617 21.4933C27.6033 21.8583 28.455 22.5699 29.0283 23.2466C29.8615 24.0777 30.5534 25.0392 31.0767 26.0933C31.285 26.7699 30.9367 27.1166 30.2433 27.1166Z" fill="white"/>
                  </svg>
                  <span className={styles.contactLink}>https://vk.com/ivanburenin77</span>
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://github.com/IvanBurenin' target='a_blank' rel="noreferrer">
                  <svg className={styles.linkIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 3.33325C17.8113 3.33325 15.644 3.76435 13.6219 4.60193C11.5999 5.4395 9.76253 6.66716 8.21489 8.21481C5.08928 11.3404 3.33334 15.5796 3.33334 19.9999C3.33334 27.3666 8.11667 33.6166 14.7333 35.8333C15.5667 35.9666 15.8333 35.4499 15.8333 34.9999V32.1833C11.2167 33.1833 10.2333 29.9499 10.2333 29.9499C9.46667 28.0166 8.38334 27.4999 8.38334 27.4999C6.86667 26.4666 8.5 26.4999 8.5 26.4999C10.1667 26.6166 11.05 28.2166 11.05 28.2166C12.5 30.7499 14.95 29.9999 15.9 29.5999C16.05 28.5166 16.4833 27.7833 16.95 27.3666C13.25 26.9499 9.36667 25.5166 9.36667 19.1666C9.36667 17.3166 10 15.8333 11.0833 14.6499C10.9167 14.2333 10.3333 12.4999 11.25 10.2499C11.25 10.2499 12.65 9.79992 15.8333 11.9499C17.15 11.5833 18.5833 11.3999 20 11.3999C21.4167 11.3999 22.85 11.5833 24.1667 11.9499C27.35 9.79992 28.75 10.2499 28.75 10.2499C29.6667 12.4999 29.0833 14.2333 28.9167 14.6499C30 15.8333 30.6333 17.3166 30.6333 19.1666C30.6333 25.5333 26.7333 26.9333 23.0167 27.3499C23.6167 27.8666 24.1667 28.8833 24.1667 30.4333V34.9999C24.1667 35.4499 24.4333 35.9833 25.2833 35.8333C31.9 33.5999 36.6667 27.3666 36.6667 19.9999C36.6667 17.8112 36.2356 15.644 35.398 13.6219C34.5604 11.5998 33.3328 9.76245 31.7851 8.21481C30.2375 6.66716 28.4002 5.4395 26.3781 4.60193C24.356 3.76435 22.1887 3.33325 20 3.33325Z" fill="white"/>
                  </svg>
                  <span className={styles.contactLink}>https://github.com/IvanBurenin</span>
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='mailto:stylespeedquality@mail.ru' rel="noreferrer">
                  <svg className={styles.linkIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M6.66666 33.3334C5.75 33.3334 4.965 33.0068 4.31166 32.3534C3.65833 31.7001 3.33222 30.9156 3.33333 30.0001V10.0001C3.33333 9.08342 3.66 8.29842 4.31333 7.64508C4.96666 6.99175 5.75111 6.66564 6.66666 6.66675H33.3333C34.25 6.66675 35.035 6.99342 35.6883 7.64675C36.3417 8.30008 36.6678 9.08453 36.6667 10.0001V30.0001C36.6667 30.9168 36.34 31.7018 35.6867 32.3551C35.0333 33.0084 34.2489 33.3345 33.3333 33.3334H6.66666ZM20 21.6668L33.3333 13.3334V10.0001L20 18.3334L6.66666 10.0001V13.3334L20 21.6668Z" fill="white"/>
                  </svg>
                  <span className={styles.contactLink}>stylespeedquality@mail.ru</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
