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



    // ---- Scraping Kid's Activity
    app.post("/api/singleactivity", (req, res) => {
        console.log(req.body)
        axios.get(req.body.activityLink).then(function (response) {
            var $ = cheerio.load(response.data);
            var singleActivity = [];
            $("div.left_content").each(function () {
                var result = {};

                result.data = $(this).html();
                console.log(result.data)

                singleActivity.push(result)
            })

            // ----- Send a message to the client
            res.json(singleActivity[0].data)
            // console.log(singleActivity);
        }).catch(err => { console.log(err) });
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