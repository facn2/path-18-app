import React, { Component } from 'react';

class Login extends Component {
  fbLogin() {}
  render() {
    return (
      <div>
        <h1>This is the login page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          obcaecati cumque quidem consequatur sunt, ut, dolores sint provident
          quisquam modi exercitationem tenetur a molestiae et at quod rem
          repellendus incidunt!
        </p>
        <a
          href={`https://www.facebook.com/v2.11/dialog/oauth?client_id=764320583760204&redirect_uri=http://localhost:4000/auth/facebook`}
        >
          Login
        </a>
      </div>
    );
  }
}

export default Login;
