import { NavbarInitialPage } from "../components/navbar_initial_page_component";
import { Container, Row } from "react-bootstrap";
import Footer from "../components/footer_component";
import "../css/terms_page_style.css";
export function TermsPage() {
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
            backgroundColor: "#f3f5f7",
            color: "#000000",
          }}
        >
          <h1 className="term-title">Terms and Conditions</h1>
          <h5>
            Welcome to our music playlist generation service. By using our
            service, you agree to the following terms and conditions:
          </h5>
          <div className="terms-list">
            <ol>
              <li>
                <b>Use of Service:</b> You may use our service to generate
                personalized playlists based on your selected genres. The
                playlists are for your personal, non-commercial use only and
                contain songs from various music providers.
              </li>

              <li>
                <b>Intellectual Property:</b> The music tracks and artwork
                included in the playlists are the property of their respective
                owners. You may not reproduce, distribute, or create derivative
                works from this content without the prior written consent of the
                copyright holders.
              </li>

              <li>
                <b>Privacy:</b> We take your privacy seriously. Any personal
                information you provide, such as your music preferences, will be
                used solely for the purpose of generating your personalized
                playlist and will not be shared with any third parties.
              </li>

              <li>
                <b>Limitation of Liability:</b> We strive to provide you with
                the best possible playlist generation experience, but we cannot
                guarantee that the playlists will be error-free or meet all of
                your expectations. We shall not be liable for any direct,
                indirect, or consequential damages arising from the use of our
                service.
              </li>

              <li>
                <b>Governing Law:</b> These terms and conditions shall be
                governed by the laws of the jurisdiction in which our company is
                located.
              </li>
            </ol>

            <h6>
              By using our music playlist generation service, you acknowledge
              that you have read, understood, and agree to these terms and
              conditions.
            </h6>
          </div>
        </Row>

        <Row
          className="justify-content-center align-items-center text-center"
          style={{
            backgroundColor: "#f3f5f7",
            color: "#000000",
          }}
        >
          <h1 className="term-slogan">BeatBuilder - Crafting the perfect playlist for you.</h1>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
