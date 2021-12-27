const pactum = require('pactum');
const { addCaptureHandler } = require('pactum').handler;
//var path = require("path");
const { like } = require('pactum-matchers');
/*var Mocha = require('mocha');


var AllureReporter = require("mocha-allure-reporter");

var outDir = path.join(__dirname, "results");
var mocha = new Mocha({
    reporter: AllureReporter,
    reporterOptions: {
        targetDir: outDir
    }
});*/
describe("Test Describe ", () => {

const testStep = allure.createStep("initial", () => {
    // do something
    console.log("Starting test result with allure")
  });

  const stepToBreak = allure.createStep("break test", () => {
      throw new Error("Make test broken");
    });

it("Test IT",async () => {
//testStep();
allure.description("Now in TEST")
   await pactum.spec()
    .get('https://api-staging.ibo.com/s/catalog/api/v1/banners')
    .withHeaders('Authorization', 'Bearer abc')
    .withHeaders({
        'Content-Type': 'application/json',
        'x-channel-id': 'APP'
      })
    .expectStatus(200)
   .expectJsonMatch('banner.items[0]', {
       banner_id: like("1"),
       title: 'Laminates'
     });
    })


});

