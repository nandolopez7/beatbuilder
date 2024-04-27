import { Container, Row, Col } from "react-bootstrap";
import { NavbarInitialPage } from "../components/navbar_initial_page_component";
import "../css/initial_page_style.css";

export function InitialPage() {
  return (
    <>
      <NavbarInitialPage />
      <Container
        fluid
        style={{
          backgroundImage: "linear-gradient(to bottom right, #4dcee1, #1184e1)",
          color: "#ffffff",
        }}
      >
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={12}>
            <Container
              fluid
              className="container-lista"
              style={{ marginTop: "5rem" }}
            >
              <div>
                <h1 className="titulo-lista">
                  Music
                  <div className="lista">
                    <div className="item">like never seen before</div>
                    <div className="item"> that sets your rhythm</div>
                    <div className="item">that harmonizes your day</div>
                    <div className="item">that resonates with you</div>
                  </div>
                </h1>
              </div>
            </Container>
            <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
              <h5>With us, you can explore a magnificent new world of music</h5>
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-center align-items-center text-center"
          style={{
            backgroundColor: "#f0f0f0", // Cambiar por el color deseado
            color: "#000000", // Cambiar el color del texto si es necesario
          }}
        >
          <Col xs={12}>
            <div style={{ height: "30vh" }}>
              Otra fila con un color diferente
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
