angular.module('urls.constants', [])
  .constant('assets', assets());

function assets() {
  return {
    HEADER_PATH: '/directives/header/header.html',
    TITLE_PATH: '/app/directives/title/title.html',
    MSG_PATH: '/app/directives/msg/msg.html',
    FOOTER_PATH: '/directives/footer/footer.html',
    SPINNER_PATH: '/directives/spinner/spinner.html',
    API_URL: 'https://urls-api.herokuapp.com'
    //API_URL: 'http://localhost:3000'
  }
}