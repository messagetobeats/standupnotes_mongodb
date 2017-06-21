var standupsModel = require('../models/standupsModel');


module.exports = {

            post: function(req, res)
            {
              //create a document of the model
                var standup = new standupsModel({
                            name: req.body.name,
                            workYesterday:req.body.workYesterday,
                            workToday:req.body.workToday,
                            project: req.body.project,
                            impediment:req.body.impediment
                });

               //mongoose will see if standupsModel --> standupsmodels collection exists in the db and if not it will create it.
                standup.save((err, standup) => {
                                if (err)
                                {
                                   res.render('newnote', {errorMessage: err});
                                   console.log("ERROR " + err)
                                }
                                else
                                {
                                   res.redirect("/newnote");
                                }
                });
            },

            get: function(req, res)
            {
                standupsModel.find((err, standups) => {
                                          if (err) return handleError(err);
                                          req.standups = standups;
                                          res.render('standupnotes', {data:req.standups});
                                       })
            }
}
