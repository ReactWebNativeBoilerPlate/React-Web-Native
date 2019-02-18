import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import SectionOne from "../SectionOne/SectionOne";
import Tanble from "../SectionThree/Table";
import Charts from "../Charts";
//import MapContainer from "../MapContainer";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  grow: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    screen: "fool"
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handlePrimaryItemClick = () => {
    this.setState({ screen: "foo" });
  };

  handleSecondaryItemClick = () => {
    this.setState({ screen: "baar" });
  };

  handleAdditionalItemClick = () => {
    this.setState({ screen: "charts" });
  };

  handleDrawerItemsClick = index => {
    switch (index) {
      case 0: // grid sample click
        this.setState({ screen: "grid" });
        break;

      case 1: // table sample click
        this.setState({ screen: "table" });
        break;

      case 2: // chart click
        this.setState({ screen: "charts" });
        break;

      case 3: // map click
        this.setState({ screen: "foo" });
        break;
    }
  };

  getListItemIcon = index => {
    switch (index) {
      case 0: // grid sample icon
        return require("../../images/ic_grid.png");

      case 1: // table sample icon
        return require("../../images/ic_table.png");

      case 2: // chart icon
        return require("../../images/ic_chart.png");

      case 3: // map icon
        return require("../../images/ic_map.png");
    }
  };

  renderSwitch(param) {
    switch (param) {
      case "grid":
        return <SectionOne />;

      case "charts":
        return <Charts />;

      //case "charts":
      //return <MapContainer />;

      default:
        return <Tanble />;
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { open, anchorEl, mobileMoreAnchorEl } = this.state;

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
        </Link>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <div>
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? "material-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
        </div>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Grid Sample", "Table Sample", "Charts", "Map"].map(
              (text, index) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => this.handleDrawerItemsClick(index)}
                >
                  <ListItemIcon>
                    {
                      <img
                        src={this.getListItemIcon(index)}
                        width="24"
                        height="24"
                      />
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div style={{ paddingTop: "50px" }}>
            {this.renderSwitch(this.state.screen)}
          </div>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
