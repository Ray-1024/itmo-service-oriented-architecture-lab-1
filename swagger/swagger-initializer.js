window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
	    { url: "./openapi.yaml", name: "Lab web services" }
    ],
        dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  document.getElementById('server-select').addEventListener('change', function () {
    const selectedServer = this.value;
    ui.specActions.updateUrl(selectedServer + '/openapi.yaml'); // Adjust as necessary
    ui.specActions.fetch();
  });

  //</editor-fold>
};
