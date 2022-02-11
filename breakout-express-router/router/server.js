require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// import the db
const db = require('./db/db');

// import the routers
const productRouter = require('./routers/product-router');
const blogpostRouter = require('./routers/blogpost-router');

// tell express to use the routers as middleware
app.use('/api/admin/products', productRouter);
app.use('/blogposts', blogpostRouter(db));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
