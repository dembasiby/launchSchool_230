// Retrieve the template data from the HTML 
var template = $('#handlebars-demo').html();

// Provide the template to Handlebars 
// to compile it into a function
var templateScript = Handlebars.compile(template);

// Json format data / context
var context = { 
  "occupation": "Software Engineer",
  "website": {
    "name": "sitepoint",
  },
  "countries": ["Senegal", "India", "Kemet"],
  "names": [
    {"firstName": "Demba", "lastName": "Siby"},
    {"firstName": "Ritesh", "lastName": "Kumar"},
  ],
  "language": "<strong>Handlebars</strong>",
  "adjective": "awesomantic",
  "students": [
    {"name": "Samba", "passingYear": 2016},
    {"name": "Mara", "passingYear": 2018},
  ]
};

// Custom function helper
Handlebars.registerHelper("studyStatus", function(passingYear) {
  if (passingYear < 2017) {
    return "passed!";
  }

  return "not passed";
});

// Custom block helper
Handlebars.registerHelper("studyStatus2", function(data, options) {
  var len = data.length
  var returnData = "";

  for (var i = 0; i < len; i += 1) {

    // change the value of the  passingYear to
    // passed/not passed based on the conditions.
    console.log(options.fn(data[i]));

    data[i].passingYear = data[i].passingYear < 2017 ? "passed" : "not passed"

    // here options.fn(data[i]) temporary change the
    // scope of the whole studyStatus2 helper block to
    // data[i]. So {{name}} = data[i].name in the template.

    returnData = returnData + options.fn(data[i]);
  }
  return returnData;
});

// partialTemplate
Handlebars.registerPartial(
  "partialTemplate",
  "{{{language}}} is {{adjective}}. You are reading this article on {{website}}."
);

// Execute the templateScript function 
// by passing the context as argument
var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);