import React from "react"
import Badge from "./Components/Badge"
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Testimonial from "./Components/Testimonial";
import Logo from "./assets/images/Logo.svg"






function App() {
  
  return (
    <>
      <div className="main-container">
        <h1>Component Library</h1>
        <section className="badge-section">
          <h2>Badges</h2>
          <h3>Square Badges</h3>
          <div className="square-badges">
            <Badge type="square" color="gray">
              Badge
            </Badge>
            <Badge type="square" color="red">
              Badge
            </Badge>
            <Badge type="square" color="yellow">
              Badge
            </Badge>
            <Badge type="square" color="green">
              Badge
            </Badge>
            <Badge type="square" color="blue">
              Badge
            </Badge>
            <Badge type="square" color="indigo">
              Badge
            </Badge>
            <Badge type="square" color="purple">
              Badge
            </Badge>
            <Badge type="square" color="pink">
              Badge
            </Badge>
          </div>
          <h3>Pill</h3>
          <div className="pill-badges">
            <Badge type="pill" color="gray">
              Badge
            </Badge>
            <Badge type="pill" color="red">
              Badge
            </Badge>
            <Badge type="pill" color="yellow">
              Badge
            </Badge>
            <Badge type="pill" color="green">
              Badge
            </Badge>
            <Badge type="pill" color="blue">
              Badge
            </Badge>
            <Badge type="pill" color="indigo">
              Badge
            </Badge>
            <Badge type="pill" color="purple">
              Badge
            </Badge>
            <Badge type="pill" color="pink">
              Badge
            </Badge>
          </div>
        </section>
        <section className="banners-section">
          <h2>Banners</h2>
          <h3>Multiline</h3>
          <div className="multiline-banners-container">
            <Banner.Success variant="multiline">
              <Banner.Text>
                <Banner.Title>Congratulations!</Banner.Title>
                <Banner.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam.
                </Banner.Description>
              </Banner.Text>
            </Banner.Success>
            <Banner.Attention variant="multiline">
              <Banner.Text>
                <Banner.Title>Attention</Banner.Title>
                <Banner.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </Banner.Description>
              </Banner.Text>
            </Banner.Attention>
            <Banner.Error variant="multiline">
              <Banner.Text>
                <Banner.Title>
                  There is a problem with your application
                </Banner.Title>
                <Banner.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </Banner.Description>
              </Banner.Text>
            </Banner.Error>
            <Banner.Information variant="multiline">
              <Banner.Text>
                <Banner.Title>Update available</Banner.Title>
                <Banner.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </Banner.Description>
              </Banner.Text>
            </Banner.Information>
          </div>
          <h3>Singleline</h3>
          <div className="single-banners-container">
            <Banner.Success variant="singleline">
              <Banner.Title>Congratulations!</Banner.Title>
            </Banner.Success>
            <Banner.Attention variant="singleline">
              <Banner.Title>Attention</Banner.Title>
            </Banner.Attention>
            <Banner.Error variant="singleline">
              <Banner.Title>
                There is a problem with your application
              </Banner.Title>
            </Banner.Error>
            <Banner.Information variant="singleline">
              <Banner.Title>Update available</Banner.Title>
            </Banner.Information>
          </div>
        </section>
        <section className="cards-container">
          <h2>Cards</h2>
          <Card>
            <Card.Icon/>
            <Card.Text>
            <Card.Title>Easy Deployment</Card.Title>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </Card.Text>
          </Card>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <Testimonial>
            <Testimonial.Logo src={Logo} alt="workcation logo" />
            <Testimonial.Text>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </Testimonial.Text>
            <Testimonial.Author name="May Andersons" location="CTO, Workcation"/>
          </Testimonial>
        </section>
      </div>
    </>
  );
}

export default App
