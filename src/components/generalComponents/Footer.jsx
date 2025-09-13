export default function Footer() {
  return (
    <div className="container-fluid bg-dark">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top border-secondary">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-white">© 2025 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href="#"><i className="bi bi-instagram"></i></a>
          </li>
          <li className="ms-3">
            <a className="text-white" href="#"><i className="bi bi-facebook"></i></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
