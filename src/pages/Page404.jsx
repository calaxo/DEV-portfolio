
import perdu from "@assets/perdu.jpg";
const Page404 = () => {
  return (
    <div className="container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Page introuvable</p>
      <p className="error-message">Désolé, la page que vous recherchez n'existe pas.</p>
      <img className="error-img" src={perdu} alt="Page introuvable" width="300" />
      <p className="error-message">
        Retournez à <a href="/">l'accueil</a>.
      </p>
    </div>
  );
};

export default Page404;
