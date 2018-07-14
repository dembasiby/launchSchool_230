var myInfo = "<p>My name is {{name}} and I live at {{street}} in {{city}}.</p>";
var template = Handlebars.compile(myInfo);
var data = template({name: "Demba", street: "Rue 10, Pikine", city: "Dakar"});

document.getElementById("dembaData").innerHTML += data;