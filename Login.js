import React,{Component} from 'react';
import {PostData} from './services/PostData';

class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
         username:"",
         password:"",
         grant_type: "password"
        }
    this.login = this.login.bind(this);
    this.OnChange = this.OnChange.bind(this);
    }
    login(){
        PostData('login',this.state).then((result)=>{
            let responseJSON = result;
            console.log(responseJSON);
        })
    }
    OnChange(e){
     this.setState({[e.target.name]:e.target.value});
    }
render(){
return(
<div>
<div className="container">
<div className="panel panel-success">
<div className="panel-heading">
<h4>Login</h4>
</div>
<div className="panel-body">
<div className="form-group">
<label className="control-label">Username</label>
<input type="text" name="username" className="form-control" onChange={this.OnChange}/>
</div>
<div className="form-group">
<label className="control-label">Password</label>
<input type="text" name="password"  className="form-control" onChange={this.OnChange}/>
</div>
<button className="btn btn-success" onClick={this.login}>Login</button>
</div> 
</div>
</div>
</div>
)
}
}
export default Login;