import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function MapContainer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display3" align="center" gutterBottom>
        Map
      </Typography>
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

MapContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY // replace with actual google api key
  })(MapContainer)
);
