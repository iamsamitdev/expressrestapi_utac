# Test CORS
curl -v --request OPTIONS "http://localhost:3000/api" -H "Origin: http://localhost:4200" -H "Access-Control-Request-Method: GET"