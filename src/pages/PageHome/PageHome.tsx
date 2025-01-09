import styles from "./PageHome.module.scss"
const PageHome: React.FC = () => {
  return (
    <>
      <div className="container">
        <section className={styles.block}>
          тут блок вступительбный
        </section>

        <section className={styles.block}>
          тут блок категории
        </section>

        <section className={styles.block}>
          тут блок собрать индивидуально (будет конструктор)
        </section>

        <section className={styles.block}>
          тут блок Хиты продаж
        </section>

        <section className={styles.block}>
          тут блок Акции
        </section>
      </div>
    </>
  )
};

export default PageHome;
