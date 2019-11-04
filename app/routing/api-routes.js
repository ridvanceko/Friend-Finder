var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (request, response) {
    response.json(friends);

  });

  app.post("/api/friends", function (request, response) {
    let totalDifference = 0


    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(request.body);

    var userData = request.bod;
    var userScores = userData.scores;
    console.log(userScores);

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;
      for (var f = 0; f < friends[i].scores[f]; f++) {
        totalDifference += Math.abs(parseInt(userScores[f]) - parseInt(friends[i] + scores[f]));

        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
    friends.push(userData);
    response.json(bestMatch);

  });
}


