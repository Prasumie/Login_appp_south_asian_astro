import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>{
return(
<div>
<h1>Login to your account</h1>
<Link to="/login"><button className="btn btn-danger">Login Now</button></Link>

</div>
)
}
export default Home;