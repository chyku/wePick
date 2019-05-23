import React, { Component } from 'react';
import { render } from 'react-dom';

import Camera, { FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
class CameraPage extends Component {
  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log(dataUri);
  }
 
  render () {
    return (
        <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
        />
    );
  }
}


export default CameraPage