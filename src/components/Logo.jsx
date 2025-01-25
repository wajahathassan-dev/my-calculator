import yollLogo from '/yollo-logo.svg';

function Logo() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img src={yollLogo} className="w-50 pulse" alt="React logo" />
      </div>
      <h1 className="text-center mt-5 text-body-secondary fw-bold">
        Yoll Vite-React Template
      </h1>
    </div>
  );
}

export default Logo;
