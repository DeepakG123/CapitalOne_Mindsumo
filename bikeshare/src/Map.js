import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import { Popup } from "react-mapbox-gl";
import { ZoomControl } from "react-mapbox-gl";
import { ScaleControl } from "react-mapbox-gl";

const Map1 = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGVlcGFrZzEyMyIsImEiOiJjamhtN3gxNzcwOXdkMzBwbGM0dXRpYmZxIn0.qN-2IKGQMoYjyg8rHThRLA"
});

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-78.508, 38.0336],
      zoom: [13],
      popupcoord: [135.0, 82.8628],
      popupname: "",
      address: ""
    };
  }
  render() {
    return (
      <div>
      <br/>
        <Map1
          style="mapbox://styles/deepakg123/cjhqzkvx54nra2qmjyc8d4n7t"
          containerStyle={{ width: "500px", height: "500px" }}
          center={this.state.center}
          zoom={this.state.zoom}
        >
        </Map1>
      </div>
    );
  }
}

export default Map;
