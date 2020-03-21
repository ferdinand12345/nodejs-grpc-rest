# NodeJS GRPC Rest

Simple package to call the GRPC function

## Installation With Docker

```bash
# Pull Docker Image
```

## NodeJS GRPC Collections [/]

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
   
