import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NewReleases from "../Components/NewReleases";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="contenidoCentral">
        <NewReleases numberItems={5} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
