export default {
  oidc: {
    clientId: '0oa78iil1j0cQtdNr5d7',
    issuer: 'https://dev-41002956.okta.com/oauth2/default', // URL when authorizing with Okta Authr Server
    redirectUri: 'http://localhost:4200/login/callback', // Once log in, send the user here
    scope: ['openid', 'profile', 'email'], // Scope provice access to information about a user
    /***
     * openId: requires for authenticaion requests
     * profile: users name, phone etc
     * email: users email address
     */
  },
};
