const {Schema} = require('mongoose');

const recipientSchema = new Schema({
   email: String,
   clicked: {type: Boolean, default: false}
});

exports = module.exports = recipientSchema;