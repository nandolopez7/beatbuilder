import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { NavbarInitialPage } from "../components/navbar_initial_page_component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer_component";
import "../css/initial_page_style.css";


export function InitialPage() {
  return (
    <>
      <NavbarInitialPage/>
      <Container className="neon-bg"
        fluid
        style={{
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
                    <div className="item">that sets your rhythm</div>
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
            backgroundColor: "#ffff",
            color: "#000000",
          }}
        >
          <h1 style={{ marginTop: "5rem", fontWeight: "bolder" }}>
            Discover Your Perfect Playlist
          </h1>
          <h5 style={{ color: "grey", fontWeight: "bolder" }}>
            Choose your favorite genres and let us create the ultimate playlist
            for you.
          </h5>
          <Col style={{ marginTop: "5rem", marginBottom: "5rem" }}>
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>Pop</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>Rock</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>Hip Hop</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>Jazz</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>Country</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>R&B</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>Classical</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card className="card-playlist" style={{ marginTop: "2rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title>Electronic</Card.Title>
                    <Button variant="outline-primary">Create Playlist</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          className="justify-content-center align-items-center text-center"
          style={{
            backgroundColor: "#f3f4f6",
            color: "#000000",
          }}
        >
          <h1
            style={{
              marginTop: "5rem",
              fontWeight: "bolder",
              fontSize: "4rem",
            }}
          >
            Let us surprise you!
          </h1>
          <h5 style={{ color: "grey", fontWeight: "bolder" }}>
            Hit the button below, we will create you a special playlist with top
            songs!
          </h5>
          <div
            style={{
              marginBottom: "5rem",
              marginTop: "1rem",
              fontWeight: "bolder",
            }}
          >
            <Button variant="outline-dark" size="lg">Randomize!</Button>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
