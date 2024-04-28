import { Container, Row, Col } from "react-bootstrap";
import "../css/initial_page_style.css";

export function PlaylistPage() {
  return (
    <>
      <Container
        fluid
        className="neon-bg"
      >
        <Row
          className="justify-content-center align-items-center text-center"
        >
          <Col xs={12}>
            <Container
              fluid
              className="container-lista"
              style={{ marginTop: "5rem" }}
            >
              <div>
                <h1 className="titulo-lista">
                  Your
                  <div className="lista">
                    <div className="item">custom playlist is ready for you!</div>
                    <div className="item">jam session lineup is ready for you!</div>
                    <div className="item">Your ultimate party playlist is ready for you!</div>
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
      </Container>
    </>
  );
}
