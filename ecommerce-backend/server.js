const http = require('http');

// CORS Headers
const setCORSHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
};

const products = [
  { id: 1, name: 'Product 1', price: 100000 },
  { id: 2, name: 'Product 2', price: 20000 },
  { id: 3, name: 'Product 3', price: 3000 },
  { id: 4, name: 'Product 4', price: 6000 },
  { id: 5, name: 'Product 5', price: 5000 },
  { id: 6, name: 'Product 6', price: 4000 },
  
  
];

const server = http.createServer((req, res) => {
  // Set CORS headers for every request
  setCORSHeaders(res);

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  if (req.url === '/api/products' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(5000, () => console.log('Server running at http://localhost:5000'));

//mongodb connected
// const http = require('http');
// const mongoose = require('mongoose');

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/ecommerce', { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('Failed to connect to MongoDB', err));

// // CORS Headers
// const setCORSHeaders = (res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
// };

// // Sample Product Schema
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number
// });

// const Product = mongoose.model('Product', productSchema);

// // Create a basic HTTP server
// const server = http.createServer((req, res) => {
//   // Set CORS headers for every request
//   setCORSHeaders(res);

//   if (req.method === 'OPTIONS') {
//     // Handle preflight requests
//     res.writeHead(204); // No Content
//     res.end();
//     return;
//   }

//   if (req.url === '/api/products' && req.method === 'GET') {
//     Product.find()
//       .then((products) => {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(products));
//       })
//       .catch((err) => {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Error retrieving products');
//         console.error(err);
//       });
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// server.listen(5000, () => console.log('Server running at http://localhost:5000'));
