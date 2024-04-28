import { Container, Row } from "react-bootstrap";

export function PlaylistPage() {
  return (
    <>
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
          Playlist
        </Row>
      </Container>
    </>
  );
}
