import "./App.css";
import featureImage from "./assets/images/Scarecrow.png";
const App = () => {
  return (
    <>
      <div className="wrapper">
        <section className="container">
          <h3 className="text-upper">404 not found</h3>
          <div className="content d-flex">
            <div className="feature-image">
              <img src={featureImage} alt="feature" />
            </div>
            <div className="message">
              <h1>I have bad news for you</h1>
              <p>
                The page you are looking for might be removed or is temporarily
                unavailable
              </p>
              <button className="text-upper">Back to homepage</button>
            </div>
          </div>
        </section>
        <footer>created by username - devChallenges.io</footer>
      </div>
    </>
  );
};

export default App;
