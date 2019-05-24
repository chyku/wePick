import React, { Component } from 'react';
import { render } from 'react-dom';

import 'react-html5-camera-photo/build/css/index.css';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';

import 'xregexp';
 
class CameraPage extends Component {
  getItemList(receipt){
    const regex = /\$\d+\.\d\d/im
    const regex2 = /^\d /im
    const receiptArr = receipt.split('\n');
    const prices = receiptArr.filter(word => regex.test(word));
    const meals = receiptArr.filter(word => regex2.test(word));
    const mealprices = prices.slice(0,meals.length);
    const mealsfinal = meals.map(word => word.slice(2))
    var resultsArr = [];
    for (var i = 0; i < mealsfinal.length; i++) {
      resultsArr = resultsArr.concat({name: mealsfinal[i], price: mealprices[i]});
    }
    const results = {resultsArr};
  }

  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    var uri = dataUri.substring(23);

    fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBiRraOVvk-gJXItTCG1eerLPqRg7RkPRA", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        "requests": [
          {
            "image": {
              "content": uri
            },
            "features": [
              { 
                "type": "DOCUMENT_TEXT_DETECTION"
              }
            ]
          }
        ]
      })
    })
    .then( (response) => {
      response.json().then((data) => {
        const receiptTest = data.responses[0].fullTextAnnotation.text
        console.log(receiptTest);
        this.getItemList(receiptTest);
        })
    });
  }

  render () {
    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          imageType = {IMAGE_TYPES.JPG}
          isImageMirror = {false}
        />
      </div>
    );
  }
}

export default CameraPage
