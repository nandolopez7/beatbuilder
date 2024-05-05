import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { NavbarInitialPage } from "../components/navbar_initial_page_component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer_component";
import "../css/initial_page_style.css";
import { Bars } from "react-loader-spinner";

export function InitialPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate

  const redirectToPlaylist = (genre) => {
    localStorage.setItem("selectedGenre", genre); // Guardar el género en el almacenamiento local
    setLoading(true); // Activa la pantalla de carga
    setTimeout(() => {
      navigate("/playlist");
    }, 10000); // Simula una carga de 2 segundos antes de redirigir a la página de la lista de reproducción
  };

  const [randomQuote, setRandomQuote] = useState(""); // Estado para almacenar la frase aleatoria

  useEffect(() => {
    // Define un array con las frases
    const quotes = [
      "Spinning up your playlist, vibes loading...",
      "Mixing up your tunes, excitement on repeat...",
      "Building your vibe, energy on the rise...",
      "Curating your playlist, rhythm brewing...",
      '"We will, we will rock you!" - Crafting your playlist, get ready to rock!',
      '"We are the champions" - Creating your playlist, champion vibes incoming!',
    ];

    // Genera un índice aleatorio dentro del rango del array de frases
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Selecciona la frase correspondiente al índice aleatorio generado
    const randomQuote = quotes[randomIndex];
    // Establece la frase aleatoria en el estado
    setRandomQuote(randomQuote);
  }, []);

  return (
    <>
      {loading ? ( // Renderiza la pantalla de carga si loading es true
        <div
          className="d-flex justify-content-center align-items-center vh-100"
          style={{
            backgroundColor: "#f3f4f6",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Bars
            height="150"
            width="150"
            radius="9"
            color="#21a3f4"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />

          <h1 className="neon-text-footer">{randomQuote}</h1>
        </div>
      ) : (
        <>
          <NavbarInitialPage />
          <Container
            className="neon-bg"
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
                  <h5>
                    With us, you can explore a magnificent new world of music
                  </h5>
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
                Choose your favorite genres and let us create the ultimate
                playlist for you.
              </h5>
              <Col style={{ marginTop: "5rem", marginBottom: "5rem" }}>
                <Row className="justify-content-center align-items-center text-center">
                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Pop</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("pop")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Rock</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("rock")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Hip Hop</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("hiphop")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Jazz</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("jazz")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Country</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("country")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Streaming</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("streaming")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Classical</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("classical")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={3} md={6} sm={12}>
                    <Card
                      className="card-playlist"
                      style={{ marginTop: "2rem" }}
                    >
                      <Card.Body>
                        <Card.Title>
                          <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </Card.Title>
                        <Card.Title>Dance</Card.Title>
                        <Button
                          onClick={() => redirectToPlaylist("dance")}
                          variant="outline-primary"
                        >
                          Create Playlist
                        </Button>
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
                Hit the button below, we will create you a special playlist with
                top songs!
              </h5>
              <div
                style={{
                  marginBottom: "5rem",
                  marginTop: "1rem",
                  fontWeight: "bolder",
                }}
              >
                <Button
                  onClick={() => redirectToPlaylist("random")}
                  variant="outline-dark"
                  size="lg"
                >
                  Randomize!
                </Button>
              </div>
            </Row>
          </Container>

          <Footer />
        </>
      )}
    </>
  );
}
