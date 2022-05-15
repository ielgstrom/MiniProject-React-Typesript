import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NewReleases from "../Components/NewReleases";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="contenidoCentral">
        <NewReleases numberItems={5} />
        <NewReleases numberItems={4} />
        <NewReleases numberItems={3} />
        <NewReleases numberItems={2} />
        <NewReleases numberItems={1} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
