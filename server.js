const http = require('http')
const host = '0.0.0.0';
const port = 3000;

const server = http.createServer((request,response)=>{
    response.statusCode =200;
    response.setHeader('Content-tyoe','test/plain');
    response.end('Hello all please welcome me');

})
server.listen(port,host,(error)=>{
    if(error)console.log("error",error);
    else
    console.log(`Server is running at http://${host}:${port}`);
})