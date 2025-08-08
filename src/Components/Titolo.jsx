import "../Components/Titolo.css";
import { Button } from "react-bootstrap";

function Titolo() {
  return (
    <div className="titolo-container d-flex justify-content-between align-items-center px-4 py-3 mt-5">
      <h1 className="text-light fw-bold m-0">Tv Show</h1>
      <div className="d-flex gap-2">
        <Button variant="outline-light" size="sm">
          <i className="bi bi-list"></i>
        </Button>
        <Button variant="outline-light" size="sm">
          <i className="bi bi-list"></i>
        </Button>
      </div>
    </div>
  );
}

export default Titolo;
