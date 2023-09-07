import http from "http";
import url from "url";
import fetch from "node-fetch";

process.on("uncaughtException", () => { });
process.on("unhandledRejection", () => { });

function saveUser(username) {
    for (var i = 0; i < 11; i++) {
        const wait = setInterval(() => {
            fetch(username);
        });
        setTimeout(() => clearInterval(wait), 60 * 1000);
    }
}

http
    .createServer(function (req, res) {
        const parsedUrl = url.parse(req.url, true);
        const queryParams = parsedUrl.query;

        saveUser(queryParams.name);
        setTimeout(() => {
            res.write(JSON.stringify(queryParams));
            res.end();
        }, 500);
    })
    .listen(8080);

/**
 * Exercise:
 * - Read “index.html.template” file
 *  - On the request, read user browser information such as device (let’s check if user is mobile, tablet or desktop) and language (in en-gb form) (don’t tell the candidate to use headers, correct ones are “User-Agent” and “Accept-Language”, candidate can use any library to parse “User-Agent”)
 * https://lkrqjw-8080.csb.app/
 *  - Return read template file with replaced “{{device}}” with user device info and “{{language}}” with user preferred language
 */


/*
https://codesandbox.io/api/v1/sandboxes/d95rpr/slim
https://sse-lb.codesandbox.io/api/cluster/d95rpr
https://d95rpr.sse.codesandbox.io/?name=
*/