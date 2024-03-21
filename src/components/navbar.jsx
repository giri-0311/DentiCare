import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import './navbar.css';
import { useNavigate } from 'react-router-dom';

class Navbar extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      appBarClass: "MuiAppBar-root MuiAppBar-positionStatic"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        appBarClass: "MuiAppBar-root"
      });
    } else {
      this.setState({
        appBarClass: "MuiAppBar-root MuiAppBar-positionStatic"
      });
    }
  };

  handleScheduleAppointmentClick = () => {
    const navigate = useNavigate();
    navigate('/schedule');
  };

  render() {
    return (
      <AppBar position="dynamic" className={this.state.appBarClass}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <span class="material-symbols-outlined">
              dentistry
            </span>
          </IconButton>
          <Typography variant="h6" className="montserrat">
            <span style={{ color: "#A0153E" }}><b>Denti</b></span><b>Care</b>
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Button color="inherit" className="btn" onClick={this.handleScheduleAppointmentClick}>Schedule an appointment</Button>
          <Button color="inherit" className="btn">Tooth Wellness</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
