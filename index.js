var names = [
    "Aric",
    "Anik",
    "Aman",
    "Aston",
    "Arison",
    "Christina",
    "Sandy",
    "Donald",
    "Darren",
    "Phill",
    "Sammy",
    "Yassi",
    "Sarah",
    "Tory"
];

//length of Array names
var n = names.length;

function ac(value) {
    //setting datalist empty at the start of function , if we skip this step, same name will be repeated
    document.getElementById('data').innerHTML = '';

    //input query length
    l = value.length;
    //comparing if input string is existing in names[i] string
    for (var i = 0; i < n; i++) {
        if (((names[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
            var node = document.createElement("option");
            var val = document.createTextNode(names[i]);
            node.appendChild(val);
            //creating and appending new elements in data list
            document.getElementById("data").appendChild(node);
        }
    }
}