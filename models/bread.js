// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 
// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placeholder.it/500x500.png' }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} is good`
}

// model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread