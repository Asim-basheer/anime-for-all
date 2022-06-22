import { Col, Container, Row } from "react-bootstrap";
import AnimeCard from "../components/AnimeCard";
import Slider from "../components/Slider";
import TopAnime from "../components/TopAnime";

function Home() {
  const data = [
    {
      animePic: "https://via.placeholder.com/1800x700/00ff00",
      animeName: "first slide label",
      animeDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      animePic: "https://via.placeholder.com/1800x700/ff0000",
      animeName: "Second slide label",
      animeDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      animePic: "https://via.placeholder.com/1800x700/202020",
      animeName: "third slide label",
      animeDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const anime = [
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
    {
      name: "anime name",
      views: "3,800",
    },
  ];
  return (
    <Container fluid="xxl">
      <Row>
        <Col lg="9">
          <Slider data={data} />
          <Row className="mt-3">
            <Col lg="3">
              <AnimeCard />
            </Col>
            <Col lg="3">
              <AnimeCard />
            </Col>
            <Col lg="3">
              <AnimeCard />
            </Col>
            <Col lg="3">
              <AnimeCard />
            </Col>
            <Col lg="2">
              <AnimeCard />
            </Col>
          </Row>
        </Col>
        <Col lg="3">
          <TopAnime anime={anime} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
