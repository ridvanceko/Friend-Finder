var path = require("path");

module.exports = function (app) {

  app.get("/survey", function(request, response){
    response.sendFile(path.join(__dirname + "/../view/survey.html"));
  });
    app.use("/", function(request, response){
      response.sendFile(path.join(__dirname + "/../view/home.html"));
    });
  
}