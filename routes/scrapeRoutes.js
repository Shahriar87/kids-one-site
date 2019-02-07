const Activity = require('../models/activity.model');

// importing axios & cheerio
var axios = require("axios");
var cheerio = require("cheerio");


module.exports = (app) => {

    // ---- Scraping Kid's Activity
    app.get("/api/activity", (req, res) => {
        axios.get("http://play.fisher-price.com/en_US/GamesandActivities/Crafts/index.html").then(function (response) {
            var $ = cheerio.load(response.data);
            var Activity = [];
            $("li.tiles_content").each(function () {
                var result = {};

                result.title = $(this)
                    .children("div.tiles_title")
                    .children("p")
                    .text().trim();
                result.imageLink = $(this)
                    .children("div.tiles_image")
                    .children("a")
                    .children("img")
                    .attr("src").trim();
                result.link = $(this)
                    .children("div.tiles_image")
                    .children("a")
                    .attr("href").trim();

                Activity.push(result)

                // Activity.create(result).then(function (err, dbActivity) {
                //     if (err) {
                //         console.log(err);
                //     } else {
                //         // console.log(dbActivity);
                //     }
                // })
            })

            // ----- Send a message to the client
            res.json(Activity)
        }).catch(err => { console.log(err) });
    });


    // ----- Load Show articles
    // app.get("/api/activity", (req, res) => {
    //     Activity.find({ "isSaved": false }).limit(10)
    //         .exec(function (error, data) {
    //             var activityObject = {
    //                 activity: data
    //             };
    //             // console.log(activityObject);
    //             res.json(activityObject);
    //         });
    // });




}