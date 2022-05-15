import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Album: React.FC = () => {
  let { albumIdentifier } = useParams();
  return (
    <>
      <Header />
      <div className="contenidoCentral centerContent">
        <div>{albumIdentifier}</div>
      </div>
      <Footer />
    </>
  );
};
export default Album;
