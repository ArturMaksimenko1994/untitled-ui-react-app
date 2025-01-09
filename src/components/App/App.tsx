import styles from "./App.module.scss";
import { Routes, Route } from 'react-router';
import routes from './../../pages/routes';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>

        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;
