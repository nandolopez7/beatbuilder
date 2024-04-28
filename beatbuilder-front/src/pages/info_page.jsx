import { NavbarInitialPage } from "../components/navbar_initial_page_component";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMusic,
  faHeadphones,
  faDatabase,
  faArrowsRotate,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer_component";
import "../css/info_page_style.css";
export function InfoPage() {
  return (
    <>
      <NavbarInitialPage />
      <Container
        fluid
        style={{
          color: "#ffffff",
        }}
      >
        <Row
          className="justify-content-center align-items-center text-center"
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
        >
          <h1
            style={{
              marginTop: "5rem",
              fontWeight: "bolder",
              fontSize: "5rem",
            }}
          >
            How We Create Your Playlist
          </h1>
          <h4 style={{ color: "grey", fontWeight: "500" }}>
            Our advanced algorithm analyzes your genre preferences and creates a
            personalized playlist just for you.
          </h4>
          <Col style={{ marginTop: "5rem", marginBottom: "5rem" }}>
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={3} md={6} sm={12}>
                <Card
                  className="card-info-style"
                  style={{
                    marginTop: "2rem",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
                    </Card.Title>
                    <Card.Title style={{ marginTop: "2rem" }}>
                      Analyze Preferences
                    </Card.Title>
                    <Card.Body>
                      We use your selected genres to understand your musical
                      tastes.
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card
                  className="card-info-style"
                  style={{
                    marginTop: "2rem",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faMusic} size="2xl" />
                    </Card.Title>
                    <Card.Title style={{ marginTop: "2rem" }}>
                      Curate Playlist
                    </Card.Title>
                    <Card.Body>
                      Our algorithm selects the perfect songs to match your
                      preferences.
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card
                  className="card-info-style"
                  style={{
                    marginTop: "2rem",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faHeadphones} size="2xl" />
                    </Card.Title>
                    <Card.Title style={{ marginTop: "2rem" }}>
                      Deliver Playlist
                    </Card.Title>
                    <Card.Body>
                      We provide you with a personalized playlist tailored to
                      your taste.
                    </Card.Body>
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
            Leveraging Web Scraping for Playlist Curation
          </h1>
          <h4 style={{ color: "grey", fontWeight: "400", marginTop: "1rem", }}>
            To ensure we provide you with the most up-to-date and relevant
            playlist, <br />
            we leverage web scraping techniques to gather data from popular
            music charts and industry-leading websites.
          </h4>
          <Col style={{ marginTop: "5rem", marginBottom: "5rem" }}>
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={3} md={6} sm={12}>
                <Card
                  className="card-info-style"
                  style={{
                    marginTop: "2rem",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faDatabase} size="2xl" />
                    </Card.Title>
                    <Card.Title style={{ marginTop: "2rem" }}>
                      Comprehensive Data Collection
                    </Card.Title>
                    <Card.Body>
                      Our web scraping algorithms continuously monitor and
                      extract data from leading music charts, industry blogs,
                      and streaming platforms to stay up-to-date with the latest
                      trends and popular songs.
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card
                  className="card-info-style"
                  style={{
                    marginTop: "2rem",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faArrowsRotate} size="2xl" />
                    </Card.Title>
                    <Card.Title style={{ marginTop: "2rem" }}>
                      Real-Time Playlist Updates
                    </Card.Title>
                    <Card.Body>
                      By constantly updating our music library through web
                      scraping, we ensure that your personalized playlist is
                      always fresh and reflects the latest musical trends and
                      releases.
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6} sm={12}>
                <Card
                  className="card-info-style"
                  style={{
                    marginTop: "2rem",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <FontAwesomeIcon icon={faGears} size="2xl" />
                    </Card.Title>
                    <Card.Title style={{ marginTop: "2rem" }}>
                      Seamless Accessibility
                    </Card.Title>
                    <Card.Body>
                      Your personalized playlist is available across all your
                      devices, allowing you to enjoy your music seamlessly
                      whether you're at home, on the go, or anywhere in between.
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <h6 style={{marginTop:"2rem", color: "grey"}}>
                By combining our advanced machine learning algorithms with
                real-time data from leading music sources, we're able to provide <br />
                you with a truly personalized and up-to-date playlist that will
                keep you entertained and engaged.
              </h6>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
