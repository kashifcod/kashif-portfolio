import { Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";
import project1 from "../asset/project-1.webp";
import project2 from "../asset/project-2.webp";
import project3 from "../asset/project-3.webp";
import project4 from "../asset/project-4.webp";
import project5 from "../asset/JOGA-Starz.webp";
import project6 from "../asset/Bark Strength.png";
import project7 from "../asset/The-Hookery.webp";
import project8 from "../asset/Killer-Labs.webp";
import project9 from "../asset/About-Work.webp";


const projects = [
  {
    title:  "Ring & Diamond · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "A responsive online store with cart, filters, and checkout flow built in Shopify, all custom dynamic sections.",
    image: project1,
    gradient: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentDark})`,
    liveUrl: "https://carat-filters-jewellery-trading-llc.myshopify.com/", 
    codeUrl: "#",
  },
    {
    title:  "The Robinson Family Store",
    // tag: "E-Commerce Storefront",
    description: "Developed custom dynamic Shopify homepage sections, category banners, and product carousels for a household essentials store.",
    image: project4,
    gradient: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentDark})`,
    liveUrl: "https://therobinsonfamilystore.com/", 
    codeUrl: "#",
  },
    {
 title:  "Punk Rave · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "Developed custom Shopify sections and improved user experience for an international fashion brand.",
    image: project3,
    gradient: "linear-gradient(135deg, #FF6B4A, #B33A20)",
    liveUrl: "https://punkrave.ch/",
    codeUrl: "#",
  },
   {
    title:  "JogaStarz · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "A responsive online store with cart, filters, and checkout flow built in Shopify, all custom dynamic sections.",
    image: project5,
    gradient: "linear-gradient(135deg, #3B82F6, #1E3A8A)",
    liveUrl: "https://jogastarz.com/",
    codeUrl: "#",
  },
  {
 title:  "Bark Strength · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "A responsive online store with cart, filters, and checkout flow built in Shopify, all custom dynamic sections.",
    image: project6,
    gradient: "linear-gradient(135deg, #FF6B4A, #B33A20)",
    liveUrl: "https://barkstrength.com/",
    codeUrl: "#",
  },
      {
    title:  "The Hookery · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "A responsive online store with cart, filters, and checkout flow built in Shopify, all custom dynamic sections.",
    image: project7,
    gradient: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentDark})`,
    liveUrl: "https://thehookery.com.au/", 
    codeUrl: "#",
  },
   {
    title:  "Killer Labs · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "A responsive online store with cart, filters, and checkout flow built in Shopify, all custom dynamic sections.",
    image: project8,
    gradient: "linear-gradient(135deg, #3B82F6, #1E3A8A)",
    liveUrl: "https://killerlabs.co.uk/",
    codeUrl: "#",
  },
  {
 title:  "About Work · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "Built custom homepage sections, category layouts, and customer-focused content for a workwear brand.",
    image: project9,
    gradient: "linear-gradient(135deg, #FF6B4A, #B33A20)",
    liveUrl: "https://aboutwork.online/",
    codeUrl: "#",
  },
    {
    title:  "IUM · E-commerce",
    // tag: "E-Commerce Storefront",
    description: "A responsive online store with cart, filters, and checkout flow built in Shopify, all custom dynamic sections.",
    image: project2,
    gradient: "linear-gradient(135deg, #3B82F6, #1E3A8A)",
    liveUrl: "#",
    codeUrl: "#",
  },

];

export const Projects = () => {
  return (
    <section id="projects" style={{ background: theme.colors.surface, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>SELECTED WORK</span>
                <h2
                  style={{
                    ...sectionHeadingStyle,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: theme.colors.ink,
                    marginTop: "10px",
                    marginBottom: "12px",
                  }}
                >
                  Projects
                </h2>
                <p style={{ fontFamily: theme.fonts.body, color: theme.colors.muted, maxWidth: "520px", margin: "0 auto" }}>
                  A few projects that reflect the kind of work I enjoy building.
                </p>
              </div>

              <Row>
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
