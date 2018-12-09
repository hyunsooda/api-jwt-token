# api-jwt-token
``` 
npm install api-jwt-token
```

<h4> JWT is a good way for auth because it redcues amount of query to database also server dosen't have user's session
<h4> This is skeleton code for testing and developing using JWT </h4>


<h2> Usage </h2>
<h4> First, run the server(server.js) which is supported some RESTful API </h4>
<h4> Second, do make other server and get a token then try to get current time service </h4>


```
const apiCall = require('api-jwt-token');
apiCall('your JWT token', 'url', your_callback);
```

<h3> Lastly, we can consider MD5(symmetric key.. but not secure) hash algorithm because JWT token length is very long.
  
  </h3>

<p> See also : https://github.com/auth0/node-jsonwebtoken </p>
