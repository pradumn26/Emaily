const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.json());
app.use(cookieSession({
    maxAge: 30*24*3600*1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app is hosted on: ${PORT}`);
});