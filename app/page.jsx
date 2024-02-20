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
            <img src="./main/bureninprod.png" alt="BURENIN PRODUCTION" style={{width: "550px"}}/>
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
                <Link className={styles.contact} href='https://www.instagram.com/burenin.production/' target='a_blank' rel="noreferrer">
                  <svg className={styles.linkIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z" fill="white"/>
                  </svg>
                  <span className={styles.contactLink}>@burenin.production</span>
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://www.youtube.com/channel/UC9Srz26hYKaPG89NP8yG1Nw' target='a_blank' rel="noreferrer">
                  <svg className={styles.linkIcon} xmlns="http://www.w3.org/2000/svg" width="896" height="650" viewBox="0 0 896 650" fill="none">
                    <path d="M896 322.2C896 320 896 317.5 895.9 314.6C895.8 306.5 895.6 297.4 895.4 287.7C894.6 259.8 893.2 232 891 205.8C888 169.7 883.6 139.6 877.6 117C871.268 93.415 858.857 71.905 841.607 54.6198C824.357 37.3345 802.872 24.8797 779.3 18.5001C751 10.9001 695.6 6.20009 617.6 3.30009C580.5 1.90009 540.8 1.00009 501.1 0.500092C487.2 0.300092 474.3 0.200098 462.7 0.100098H433.3C421.7 0.200098 408.8 0.300092 394.9 0.500092C355.2 1.00009 315.5 1.90009 278.4 3.30009C200.4 6.30009 144.9 11.0001 116.7 18.5001C93.1201 24.864 71.6269 37.3136 54.3744 54.6013C37.1219 71.8889 24.716 93.4073 18.4 117C12.3 139.6 8 169.7 5 205.8C2.8 232 1.4 259.8 0.599998 287.7C0.299998 297.4 0.199998 306.5 0.0999985 314.6C0.0999985 317.5 0 320 0 322.2V327.8C0 330 -1.52737e-06 332.5 0.0999985 335.4C0.199998 343.5 0.399998 352.6 0.599998 362.3C1.4 390.2 2.8 418 5 444.2C8 480.3 12.4 510.4 18.4 533C31.2 580.9 68.8 618.7 116.7 631.5C144.9 639.1 200.4 643.8 278.4 646.7C315.5 648.1 355.2 649 394.9 649.5C408.8 649.7 421.7 649.8 433.3 649.9H462.7C474.3 649.8 487.2 649.7 501.1 649.5C540.8 649 580.5 648.1 617.6 646.7C695.6 643.7 751.1 639 779.3 631.5C827.2 618.7 864.8 581 877.6 533C883.7 510.4 888 480.3 891 444.2C893.2 418 894.6 390.2 895.4 362.3C895.7 352.6 895.8 343.5 895.9 335.4C895.9 332.5 896 330 896 327.8V322.2ZM824 327.4C824 329.5 824 331.8 823.9 334.5C823.8 342.3 823.6 350.9 823.4 360.2C822.7 386.8 821.3 413.4 819.2 438.1C816.5 470.3 812.7 496.7 808 514.4C801.8 537.5 783.6 555.8 760.6 561.9C739.6 567.5 686.7 572 614.8 574.7C578.4 576.1 539.2 577 500.1 577.5C486.4 577.7 473.7 577.8 462.3 577.8H433.7L395.9 577.5C356.8 577 317.7 576.1 281.2 574.7C209.3 571.9 156.3 567.5 135.4 561.9C112.4 555.7 94.2 537.5 88 514.4C83.3 496.7 79.5 470.3 76.8 438.1C74.7 413.4 73.4 386.8 72.6 360.2C72.3 350.9 72.2 342.2 72.1 334.5C72.1 331.8 72 329.4 72 327.4V322.6C72 320.5 72 318.2 72.1 315.5C72.2 307.7 72.4 299.1 72.6 289.8C73.3 263.2 74.7 236.6 76.8 211.9C79.5 179.7 83.3 153.3 88 135.6C94.2 112.5 112.4 94.2001 135.4 88.1001C156.4 82.5001 209.3 78.0001 281.2 75.3001C317.6 73.9001 356.8 73.0001 395.9 72.5001C409.6 72.3001 422.3 72.2001 433.7 72.2001H462.3L500.1 72.5001C539.2 73.0001 578.3 73.9001 614.8 75.3001C686.7 78.1001 739.7 82.5001 760.6 88.1001C783.6 94.3001 801.8 112.5 808 135.6C812.7 153.3 816.5 179.7 819.2 211.9C821.3 236.6 822.6 263.2 823.4 289.8C823.7 299.1 823.8 307.8 823.9 315.5C823.9 318.2 824 320.6 824 322.6V327.4ZM359 459L591 324L359 191V459Z" fill="white"/>
                  </svg>
                  <span className={styles.contactLink}>BURENIN PRODUCTION</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
