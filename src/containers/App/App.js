import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Title from '../../components/Title';
import profilePic from '../../images/jm.png';
import astronaut from '../../images/astronaut.svg';
import astronaut1 from '../../images/astronaut1.svg';
import notebook from '../../images/notebook.svg';
import Section from '../../components/Section';
import linkedin from '../../images/linkedin.svg';
import medium from '../../images/medium.svg';
import dribble from '../../images/dribble.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.png';
import node from '../../images/node.png';
import javascript from '../../images/javascript.png';
import sass from '../../images/sass.png';
import mongo from '../../images/mongo.png';
import Social from '../../components/Social';
import TechBar from '../../components/Techbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import StyledButton from '../../components/Forms/Button';
import WorkBackground from '../../components/Work/work.styles';
import works from '../../mock/works';
import Work from '../Work/Work';
import AppOverlay from './app.styles';
import TechBarContainer from '../../components/Techbar/techbarContainer.styles';
import cvPath from '../../cv/resume-english.pdf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      showOverlay: false,
      remainingCards: [],
      cards: this.displayCards(),
      animateHero: false
    };
  }

  componentDidMount() {
    this.setState({
      animateHero: true
    });
  }

  cardClickHandler = (id) => {
    const workToDisplay = works.find((work, index) => index === id);
    this.setState({
      showOverlay: true,
      workToDisplay
    });

    const self = this;
    setTimeout(() => {
      self.setState({
        isHome: false
      });
    }, 1000);
  };

  displayCards = () =>
    works.slice(0, works.length - 2).map((work, index) => {
      if (index % 2 === 0) {
        return (
          <Section.Row key={index}>
            <Card
              onClick={() => {
                this.cardClickHandler(index);
              }}
            >
              <div className="card__overlay" />
              <div className="card__background" />
              <img
                src={work.backgroundUrl}
                alt="nobly work background"
                className={work.name.replace(/ /g, '').toLowerCase()}
              />
              <Card.Legend>
                <h5>Case Study</h5>
                <h4>{work.name}</h4>
                <p>{work.desc}</p>
              </Card.Legend>
            </Card>
            {works[index + 1] && (
              <Card
                onClick={() => {
                  this.cardClickHandler(index + 1);
                }}
              >
                <div className="card__overlay" />
                <div className="card__background" />
                <img
                  src={works[index + 1].backgroundUrl}
                  alt="nobly work background"
                  className={works[index + 1].name.replace(/ /g, '').toLowerCase()}
                />
                <Card.Legend>
                  <h5>Case Study</h5>
                  <h4>{works[index + 1].name}</h4>
                  <p>{works[index + 1].desc}</p>
                </Card.Legend>
              </Card>
            )}
          </Section.Row>
        );
      }
      return undefined;
    });

  viewMoreWorkHandler = () => {
    const remainingCards = works.slice(-2).map((card, index) => (
      <Card
        onClick={() => {
          this.cardClickHandler(works.length - 2 + index);
        }}
      >
        <div className="card__overlay" />
        <div className="card__background" />
        <img
          src={card.backgroundUrl}
          alt="nobly card background"
          className={card.name.replace(/ /g, '').toLowerCase()}
        />
        <Card.Legend>
          <h5>Case Study</h5>
          <h4>{card.name}</h4>
          <p>{card.desc}</p>
        </Card.Legend>
      </Card>
    ));

    this.setState({
      remainingCards
    });
  };

  render() {
    const {
      remainingCards, showOverlay, cards, isHome, workToDisplay, animateHero
    } = this.state;
    return (
      <Fragment>
        <AppOverlay showOverlay={showOverlay} />
        <div>
          {isHome && (
            <Fragment>
              <Header />
              <Social>
                <Social.Square url="https://www.linkedin.com/in/mollerjorge/">
                  <img
                    src={linkedin}
                    alt="linkedin logo"
                  />
                </Social.Square>
                <Social.Square url="https://medium.com/@_jmoller">
                  <img
                    src={medium}
                    alt="medium logo"
                  />
                </Social.Square>
                <Social.Square url="https://dribbble.com/jmoller">
                  <img
                    src={dribble}
                    alt="dribble logo"
                  />
                </Social.Square>
              </Social>

              <Hero>
                <Hero.Left animateHero={animateHero}>
                  <Title>
                    Hi!, I'm <br /> Jorge Moller
                    <div className="dot" />
                  </Title>
                  <h1 className="mobile__title">
                    Hi!, I'm <br />
                    Jorge Moller
                    <div className="dot" />
                  </h1>
                  <p>
                    I’m a fullstack web developer who specializes in crafting perfomant and
                    beautiful web applications.
                  </p>
                </Hero.Left>
                <Hero.Right></Hero.Right>
                <img
                  src={astronaut}
                alt="astronaut"
                  className="astronaut"
                />
                <img
                  src={astronaut1}
                  alt="astronaut"
                  className="astronaut-man"
                />
                <img
                  src={notebook}
                  alt="astronaut"
                  className="notebook"
                />
              </Hero>
              <Section
                nro="01"
                id="about"
                marginTop="20rem"
              >
                <Section.Title>About Me</Section.Title>
                <Section.Content>
                  <p>
                    {' '}
                    I'm a dynamic and detail-oriented web developer with more than 8 years of experience in
                    the IT industry. Armed with an extensive understanding of Javascript, React, CSS
                    and HTML, most days you'll find me digging into a React app, setting up a Node
                    API or just marking up an elegant web interface.
                  </p>
                  <p>
                    My mission is to build immersive and engaging experiences for users through
                    carefully crafted code. My value as a developer is to go above and beyond to get
                    the job done.
                  </p>

                  <StyledButton
                    onClick={() => {
                      window.open(cvPath, '_blank');
                    }}
                    margin="3rem 0"
                  >
                    Download cv
                  </StyledButton>
                </Section.Content>
              </Section>

              <div
                id="work"
                style={{ position: 'relative', minHeight: '130vh', marginBottom: '20rem' }}
              >
                <Section nro="02">
                  <Section.Title margin="0 0 8rem 0">Work</Section.Title>
                  <Section.Content
                    justifyContent="space-around"
                    flexDirection="column"
                  >
                    {cards}

                    <ReactCSSTransitionGroup
                      transitionName="example"
                      component={Section.Row}
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={300}
                    >
                      {remainingCards}
                    </ReactCSSTransitionGroup>

                    {remainingCards.length === 0 && (
                      <Section.Column margin="10rem 0">
                        <p>Do you need more examples of my work?</p>
                        <StyledButton onClick={this.viewMoreWorkHandler}>View more</StyledButton>
                      </Section.Column>
                    )}
                  </Section.Content>
                </Section>

                <WorkBackground />
              </div>

              <Section
                nro="03"
                id="techstack"
              >
                <Section.Title>Tech Stack</Section.Title>
                <Section.Content margin="8rem 0">
                  <TechBarContainer style={{ width: '100%', display: 'flex' }}>
                    <div className="techbar__column">
                      <TechBar
                        brand="JavaScript"
                        percentage="90%"
                        years="6"
                      >
                        <TechBar.Brand>
                          <img
                            src={javascript}
                            alt="javascript logo"
                            className="techbar__react"
                          />
                        </TechBar.Brand>
                        <TechBar.Content />
                      </TechBar>
                      <TechBar
                        brand="React js"
                        percentage="90%"
                        years="4"
                      >
                        <TechBar.Brand>
                          <img
                            src={react}
                            alt="react logo"
                            className="techbar__react"
                          />
                        </TechBar.Brand>
                        <TechBar.Content />
                      </TechBar>
                      <TechBar
                        brand="Redux"
                        percentage="90%"
                        years="2"
                      >
                        <TechBar.Brand>
                          <img
                            src={redux}
                            alt="redux logo"
                            className="techbar__redux"
                          />
                        </TechBar.Brand>
                        <TechBar.Content />
                      </TechBar>
                    </div>

                    <div className="techbar__column">
                      <TechBar
                        brand="Node js"
                        percentage="70%"
                        years="3"
                      >
                        <TechBar.Brand>
                          <img
                            src={node}
                            alt="node logo"
                            className="techbar__node"
                          />
                        </TechBar.Brand>
                        <TechBar.Content />
                      </TechBar>

                      <TechBar
                        brand="Mongo"
                        percentage="70%"
                        years="2"
                      >
                        <TechBar.Brand>
                          <img
                            src={mongo}
                            alt="mongo logo"
                            className="techbar__node"
                          />
                        </TechBar.Brand>
                        <TechBar.Content />
                      </TechBar>
                      <TechBar
                        brand="Sass"
                        percentage="90%"
                        years="4"
                      >
                        <TechBar.Brand>
                          <img
                            src={sass}
                            alt="sass logo"
                            className="techbar__sass"
                          />
                        </TechBar.Brand>
                        <TechBar.Content />
                      </TechBar>
                    </div>
                  </TechBarContainer>
                </Section.Content>
              </Section>

              <Footer>
                <Footer.Content>
                  <h3>jmoller2106@gmail.com</h3>
                  <h3>+598 99 52 04 52</h3>
                </Footer.Content>
              </Footer>
            </Fragment>
          )}

          {!isHome && (
            <Work
              work={workToDisplay}
              hideOverlay={() => {
                this.setState({
                  showOverlay: false
                });
              }}
              goToHome={() => {
                this.setState({
                  showOverlay: true
                });
                const self = this;
                setTimeout(() => {
                  self.setState(
                    {
                      isHome: true
                    },
                    () => {
                      window.location.href = '#work';
                    }
                  );
                  setTimeout(() => {
                    this.setState({
                      showOverlay: false
                    });
                  }, 700);
                }, 900);
              }}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default App;
