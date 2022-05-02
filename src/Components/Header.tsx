import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const [inputSearcher, setInputSearcher] = useState<string>("");
  const setInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputSearcher(e.currentTarget.value);
  };
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
                value={inputSearcher}
                onChange={setInputChange}
              />
              <button className="iconSearch">
                <BsSearch className="svgSearch" />
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 tagName">
              Share your experience with music
            </div>
            <div className="col-6">
              <div className="btnSignUp ms-3 mb-2 headerUser">Sign up</div>
              <div className="btnSignUp me-3 mb-2 headerUser">Log in</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
