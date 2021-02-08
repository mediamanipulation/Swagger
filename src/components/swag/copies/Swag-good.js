
import React, { useState, useEffect } from 'react';
import './Swg.css'
import SwaggerUI from 'swagger-ui';
//import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
// import Config from './organization_config.json'
// import Sidebar from './Sidebar.js'
// import '../node_modules/swagger-ui/dist/swagger-ui.css'

export default function Swag() {
  const [organizationConfig, setOrganizationConfig] = useState("")
  const [definitionList, setDefinitionList] = useState("")
  const [definitionLink, setDefinitionLink] = useState("https://petstore.swagger.io/v2/swagger.json")

  useEffect(() => {
    SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: definitionLink
    })
  });

  

  return (
    <div>
      <div className="App">
        <div id="api-data" />
      </div>
    </div>
  )
}
