const express = require('express')
const app = express()
const bodyParser = require('body-parser');

var cors = require('cors');

const port = 3000

// ┌─────────────────────────────────────┐
// │                                     │
// │           Express Server            │
// │                                     │
// └─────────────────────────────────────┘

app.use(cors());
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${port}` )
})
app.use(bodyParser.text());

// ┌─────────────────────────────────────┐
// │                                     │
// │               Routes                │
// │                                     │
// └─────────────────────────────────────┘

/**
 * Default static route
 */
app.use('/', express.static('.'))

// Zoopla
require('./src/services/zoopla/get_map_data')(app);

require('./src/services/zoopla/get_property_data')(app);

//Rightmove
require('./src/services/rightmove/get_map_data')(app);

require('./src/services/rightmove/get_property_data')(app);

//OnTheMarket
require('./src/services/onthemarket/get_map_data')(app);

require('./src/services/onthemarket/get_property_data')(app);
