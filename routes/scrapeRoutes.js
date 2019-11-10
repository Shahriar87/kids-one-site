const Activity = require('../models/activity.model');

// importing axios & cheerio
var axios = require("axios");
var cheerio = require("cheerio");


module.exports = (app) => {

    // ---- Scraping Kid's Activity
    app.get("/api/activity", (req, res) => {
        axios.get("https://www.dltk-kids.com/crafts/miscellaneous/").then(function (response) {
            var $ = cheerio.load(response.data);

            var Activity = [];

            $("div.indexText").each(function () {
                var result = {};

                result.title = $(this)
                    .children("h3")
                    .find("a")
                    .text().trim();
                result.imageLink = $(this)
                    .prev("div.indexImage")
                    .children("img")
                    .attr("src").trim();
                result.link = $(this)
                    .children("h3")
                    .find("a")
                    .attr("href").trim();

                Activity.push(result)

                // Activity.create(result).then(function (err, dbActivity) {
                //     if (err) {
                //         console.log(err);
                //     } else {
                //         // console.log(dbActivity);
                //     }
                // })

            });

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


    // ---- Scraping Kid's Activity
    app.post("/api/singleactivity", (req, res) => {
        axios.get(req.body.activityLink).then(function (response) {
            var $ = cheerio.load(response.data);
            var singleActivity = [];
            $("article#content").each(function () {
                var result = {};

                result.data = $(this).html();

                singleActivity.push(result)
            })

            // ----- Send a message to the client
            res.json(singleActivity[0].data)
        }).catch(err => {
            console.log(err)
        });
    });







    // ---- Scraping Kid's Game
    app.get("/api/game", (req, res) => {
        axios.get("https://famobi.com/most-played-html5-games/?locale=en").then(function (response) {
            var $ = cheerio.load(response.data);
            var Game = [];
            $("a.premiumTeaserHolder").each(function () {
                var result = {};

                result.title = $(this)
                    .attr("title").trim();

                result.imageLink = $(this)
                    .children("div.figure")
                    .children("img")
                    .attr("data-original").trim();

                result.link = $(this)
                    .attr("href").trim();

                Game.push(result)

            })

            // console.log(Game)
            // ----- Send a message to the client
            res.json(Game)
        }).catch(err => { console.log(err) });
    });


}