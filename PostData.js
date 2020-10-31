export function PostData(type, userData){
let BaseUrl ='http://kotbotticket-001-site3.btempurl.com/token';
return new Promise((resolve, reject) =>{

fetch(BaseUrl,{
method: 'POST',
body:JSON.stringify(userData)
})
.then((response) => response.json())
.then((responseJson) => {
resolve (responseJson)
})
.catch((error)=>{
reject(error);
});
}); 
        

}