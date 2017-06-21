var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateName = [(val) => { return (val.length > 5)}, "Name must be more than 5 letters"];
var validateString = [(val) => {
                                  var testVal = val.trim();
                                  return (testVal.length > 0)
                               },

                    `{PATH} must not be empty`]

var standupsSchema = new Schema({
        name:  { type:String, required:true, validate: validateName },
        workYesterday: { type:String, required:true, validate: validateString },
        workToday: { type:String, required:true, validate: validateString },
        project: { type:String, required:true, validate: validateString  },
        impediment: { type:String, required:true, default:'none' },
        createdOn: {type:Date, default:Date.now}
});

//export the model to be used by the controller which is in turn used by the routers
//note the collection is pluralised and made lowercase when made

module.exports = mongoose.model('standupsModel', standupsSchema);
