
import React, { Component } from 'react';
import './Swg.css'
import SwaggerUI from 'swagger-ui';

class Swag extends Component {
    constructor(props) {
      super(props);
      this.state = {
        definitionLink: "https://petstore.swagger.io/v2/swagger.json",
      }
    }
          
    componentDidMount() {
        SwaggerUI({
          domNode: document.getElementById("api-data"),
          url: this.state.definitionLink
        })
    }
    render() {
        return (
          <div className="App">
            <div id="api-data" />
          </div>
        );
      }
    }
      export default Swag;