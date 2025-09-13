  export default function Header() {
    return (
      <header className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            
            <div className="flex-fill text-start">
              <a className="navbar-brand logo_header" href="#">Aurora</a>
            </div>

            <div className="flex-fill text-center">
              <form className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Vestido"
                  aria-label="Search"
                />
                <button className="btn btn-light" type="submit">Buscar</button>
              </form>
            </div>

            <div className="flex-fill text-end">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categorias
                    </a>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Camisas</a></li>
                      <li><a className="dropdown-item" href="#">Jaquetas</a></li>
                      <li><a className="dropdown-item" href="#">Vestidos</a></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" href="#">Entre ou cadastre-se</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
      </header>
    );
  }
