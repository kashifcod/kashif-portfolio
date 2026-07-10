import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";

const inputWrapStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: theme.colors.inkSoft,
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: theme.radius.sm,
  padding: "12px 16px",
  marginBottom: "16px",
};

const inputStyle = {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#fff",
  fontFamily: theme.fonts.body,
  fontSize: "0.95rem",
};

// EDIT ME: update with your real contact details
const CONTACT_INFO = [
  { icon: FaEnvelope, label: "kashif07sw@gmail.com" },
  { icon: FaPhoneAlt, label: "+92 314 7179170" },
  { icon: FaMapMarkerAlt, label: "Karachi, Sindh Pakistan" },
];

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: this form is front-end only for now. To actually send emails,
    // wire this up to a service like EmailJS, Formspree, or your own API,
    // and call it here instead of the local setStatus below.
    setStatus("✅ Thanks! Your message has been noted — I'll get back to you soon.");
    setFormDetails({ name: "", email: "", message: "" });
  };

  return (
    <section id="connect" style={{ background: theme.colors.ink, padding: "100px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <Row className="g-5">
          <Col xs={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span style={{ ...eyebrowStyle, color: theme.colors.accent }}>SAY HELLO</span>
                  <h2
                    style={{
                      ...sectionHeadingStyle,
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      color: "#fff",
                      margin: "10px 0 20px",
                    }}
                  >
                    Get In Touch
                  </h2>
                  <p style={{ fontFamily: theme.fonts.body, color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", marginBottom: "26px" }}>
                    Have a project in mind or just want to say hi? Send a message below.
                  </p>

                  {CONTACT_INFO.map(({ icon: Icon, label }, i) => (
                    <div key={i} className="d-flex align-items-center gap-3 mb-3">
                      <span
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          background: theme.colors.inkSoft,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: theme.colors.accent,
                        }}
                      >
                        <Icon size={14} />
                      </span>
                      <span style={{ fontFamily: theme.fonts.body, color: "rgba(255,255,255,0.75)", fontSize: "0.92rem" }}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <form onSubmit={handleSubmit}>
                    <div style={inputWrapStyle}>
                      <AiOutlineUser color={theme.colors.accent} />
                      <input
                        type="text"
                        value={formDetails.name}
                        placeholder="Your Name"
                        style={inputStyle}
                        onChange={(e) => onFormUpdate("name", e.target.value)}
                        required
                      />
                    </div>
                    <div style={inputWrapStyle}>
                      <AiOutlineMail color={theme.colors.accent} />
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Your Email"
                        style={inputStyle}
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        required
                      />
                    </div>
                    <div style={{ ...inputWrapStyle, alignItems: "flex-start" }}>
                      <AiOutlineMessage color={theme.colors.accent} style={{ marginTop: "4px" }} />
                      <textarea
                        rows="4"
                        value={formDetails.message}
                        placeholder="Your Message"
                        style={{ ...inputStyle, resize: "none" }}
                        onChange={(e) => onFormUpdate("message", e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        fontFamily: theme.fonts.body,
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#fff",
                        background: theme.colors.accent,
                        border: "none",
                        borderRadius: theme.radius.sm,
                        padding: "13px 28px",
                        width: "100%",
                      }}
                    >
                      Send Message
                    </button>

                    {status && (
                      <p style={{ fontFamily: theme.fonts.body, color: "#D7FFEF", fontSize: "0.9rem", marginTop: "14px" }}>
                        {status}
                      </p>
                    )}
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
