# NodeJS GRPC Rest

Simple package to call the GRPC function

## Installation With Docker

```bash
# Pull Docker Image
docker pull ferdshinoda/nodejs-grpc-rest:latest
# Deploy to Docker Container
docker run -d --name nodejs-grpc-rest -p 3000:3000 ferdshinoda/nodejs-grpc-rest
```

## NodeJS GRPC Collections [/]

Existing routing without parameters, just hit http://YOUR_HOST:PORT with GET and POST methods. Anda bisa mengunduh Postman Collections [disini](https://www.getpostman.com/collections/50c1d1a510c0597406e7).

### Get

Results (JSON)

    {
      "message": "OpenShift NodeJS Service One"
    }
    
### Post

Post Body (JSON)

    {
      "command": "ls -ltr"
    }

Results (JSON)

    {
      "message": "OK",
      "terminal_return": "Dockerfile\nnode_modules\npackage-lock.json\npackage.json\nserver.js\nxDockerfile\nxserver.js\n"
    }
   
