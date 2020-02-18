import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  Grid,
  Cell
} from "react-mdl";
import programstopper from "../img/ri-program-stopper.png";
import damp from "../img/damp.png";
import portfolio from "../img/portfolio-react2.png";

class Projects extends Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid className="projects-grid">
          <Cell col={12} tablet={12} phone={12}>
            <div className="banner-text">
              <h1>Projects</h1>
            </div>
          </Cell>
        </Grid>
        {/* Desktop version */}
        <Grid>
          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "375px",
                  height: "650px",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img
                    src={programstopper}
                    width="250"
                    height="300"
                    hspace="45"
                  />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Responsys API Program Stopper </p>
                    Web app that allows users to stop a running program in their
                    Oracle Responsys account without the need to log in to the
                    platform.
                    <h5>Technologies used:</h5>
                    Node.js, PostgreSQl, JavaScript, Vue.js and utilizes the
                    Responsys API functionality.
                  </div>
                </CardText>
                <CardActions border>
                  <a
                    href="https://github.com/dylanlarrivee/RIProgramStopper_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>

          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "375px",
                  height: "650px",
                  margin: "auto",
                  hspace: "45"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={damp} width="250" height="300" hspace="45" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Node Media Server: DaMp</p>A client and server app that
                    allows users to stream media from their home computer from
                    anywhere with internet access through a secure sign in
                    portal. Also allows the uses of streaming legal torrents
                    from magnet URIs.
                    <h5>Technologies used:</h5>
                    Node.js, Express, PostgreSQl, JavaScript, Vue.js, AWS
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/mediaServerClientApp_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Client App Github Code</Button>
                  </a><a
                    href="https://github.com/dylanlarrivee/mediaServer_pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Server App Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>

          <Cell hidePhone hideTablet col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "375px", height: "650px", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background:
                      "url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) bottom right 15% no-repeat #46B6AC"
                  }}
                ></CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Personal Portfolio Website</p>
                    Personal website you are currently viewing.
                    <h5>Technologies used:</h5>
                    React-MDL
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>

        {/* Mobile version */}
        <Grid>
          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "auto",
                  align: "middle"
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={programstopper} width="250" height="300" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p>Responsys API Program Stopper </p>
                    Web app that allows users to stop a running program in their
                    Oracle Responsys account without the need to log in to the
                    platform.
                    <h5>Technologies used:</h5>
                    Node.js, PostgreSQl, JavaScript, Vue.js and utilizes the
                    Responsys API functionality.
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/RIProgramStopper_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>

          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={damp} width="250" height="300" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Node Media Server: DaMp</p>A client and server app that
                    allows users to stream media from their home computer from
                    anywhere with internet access through a secure sign in
                    portal. Also allows the uses of streaming legal torrents
                    from magnet URIs.
                    <h5>Technologies used:</h5>
                    Node.js, Express, PostgreSQl, JavaScript, Vue.js, AWS
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/mediaServerClientApp_Pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Client App Github Code</Button>
                  </a><a
                    href="https://github.com/dylanlarrivee/mediaServer_pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Server App Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>

          <Cell hideDesktop col={4} tablet={12} phone={12}>
            <div style={{ align: "middle" }}>
              <Card
                shadow={5}
                style={{ width: "100%", height: "100%", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff"
                  }}
                >
                  <img src={portfolio} width="250" height="300" />
                </CardTitle>
                <CardText>
                  <div className="project-card-text">
                    <p> Personal Portfolio Website</p>
                    Personal website you are currently viewing.
                    <h5>Technologies used:</h5>
                    React-MDL
                  </div>
                </CardText>
                <CardActions border>
                <a
                    href="https://github.com/dylanlarrivee/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Github Code</Button>
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
