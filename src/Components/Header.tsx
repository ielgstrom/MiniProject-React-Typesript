import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="headerMain">
        <div className="container-fluid contenedor-header pt-3">
          <div className="row">
            <h1 className="col-9">Shared</h1>
            <div className="col-3 formSearch">
              <input
                type="text"
                className="inputHeader"
                placeholder="Search for an album artist or track"
              />
              <button className="iconSearch">
                <BsSearch className="svgSearch" />
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="col-6">Share your experience with music</div>
            <div className="col-6">
              <div className="btnSignUp ms-3 mb-2">Sign up</div>
              <div className="btnSignUp me-3 mb-2">Log in</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
