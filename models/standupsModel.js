var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var standupsSchema = new Schema({
        name: String,
        workYesterday:String,
        workToday:String,
        project:String,
        impediment:String,
        createdOn: {type:Date, default:Date.now}
});

//export the model to be used by the controller which is in turn used by the routers
//note the collection is pluralised and made lowercase when made

module.exports = mongoose.model('standupsModel', standupsSchema);
