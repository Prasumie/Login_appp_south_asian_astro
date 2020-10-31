const proxy =require("http-proxy-middleware");
module.exports = function(app){
app.use(
proxy("/users",{
secure:false,                 
target:"https://jsonplaceholder.typicode.com",
changeOrigin: true
})
);
};


