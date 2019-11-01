var friends = require("../data/friends.js");

module.exports = function(app) {
  app.post("/api/friends", function(request, response){
    // response.json(friends);

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(request.body);

    var userData = request.bod;
    var userScores = userData.scores;
    console.log(userScores);

  });
}