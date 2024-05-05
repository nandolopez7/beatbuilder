
import React, { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shuffle from 'lodash/shuffle'; // Importa la función shuffle de lodash
import {
  faSpotify,
  faItunes,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/footer_component";
import "../css/playlist_page_style.css";

export function PlaylistPage() {
  const [canciones, setCanciones] = useState([]);
  const datos = [
    {
      id: 1,
      image: "backslide.png",
      songTitle: "Backslide",
      songSinger: "Twenty One Pilots",
      audioSrc: "/audio/backslide.mp3", // Corrección de la ruta
    },
    {
      id: 2,
      image: "mockingbird.png",
      songTitle: "Mockingbird",
      songSinger: "Eminem",
      audioSrc: "/audio/mockingbird.mp3", // Corrección de la ruta
    },
  ];


  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await db.collection('rock').get();
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const cancionesAleatorias = shuffle(arrayData).slice(0, 10); // Obtener 10 canciones aleatorias
        console.log(cancionesAleatorias);
        setCanciones(cancionesAleatorias);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerDatos();
  }, []);

  const navigate = useNavigate(); // Inicializa useNavigate
  const redirectToMenu = () => {
    navigate('/'); // Redirige a la URL /playlist al hacer clic en la tarjeta
  };

  return (
    <>
      <Container fluid style={{ backgroundColor: "#f3f4f6" }}>
        <Row className="text-center">
          <h1
            style={{
              marginTop: "5rem",
              fontWeight: "bold",
              marginRight: "2rem",
            }}
          >
            YOUR PLAYLIST IS
          </h1>
          <ul style={{ marginBottom: "5rem" }}>
            <li>R</li>
            <li>E</li>
            <li>A</li>
            <li>D</li>
            <li>Y</li>
          </ul>
        </Row>

        <Row
          className="justify-content-center align-items-center text-center"
          style={{ backgroundColor: "#fff" }}
        >
          {canciones.map((dato) => (
            <Col
              lg={3}
              md={6}
              sm={12}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              key={dato.id}
            >
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={dato.image} />
                <Card.Body>
                  <Card.Title>{dato.songTitle}</Card.Title>
                  <Card.Text>{dato.songSinger}</Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <audio controls style={{ marginRight: "10px" }}>
                      <source src={dato.audioSrc} type="audio/mpeg" />
                      Tu navegador no soporta el elemento de audio.
                    </audio>
                    <a
                      href={`https://open.spotify.com/search/${dato.songTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10px" }}
                    >
                      <FontAwesomeIcon
                        icon={faSpotify}
                        size="2xl"
                        style={{ color: "#1ed760" }}
                      />
                    </a>
                    <a
                      href={`https://music.apple.com/us/search?term=${dato.songTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10px" }}
                    >
                      <FontAwesomeIcon
                        icon={faItunes}
                        size="2xl"
                        style={{ color: "#fc2f45" }}
                      />
                    </a>
                    <a
                      href={`https://music.youtube.com/search?q=${dato.songTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="2xl"
                        style={{ color: "#fe0001" }}
                      />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <div style={{marginBottom:"2rem"}}>
            <Button variant="outline-dark" onClick={redirectToMenu}>Back to menu</Button>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
