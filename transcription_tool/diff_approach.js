function list_maker(num) {
    var list = [];
    for (var i = 0; i <= num; i++) {
        list.push(i);
    }
    return list;
}
var options = {
"A_Treatise_of_the_Figures_of_Grammar_and_Rhetorike": 79,
"The_First_Part_of_the_Elementarie":  139,
"Brief_Grammar_of_English": 42,
"The_English_Schoole_Maister": 67
};


$("#grammar").change(function() {
var val = list_maker(options[this.value]);

$("#page").html(function() {
return val.map(function(el) {
  return $("<option>", {
    "name": el,
    "value": el,
    "html": el,
    "class": "pageClass"
  })[0].outerHTML
}).join("");
});
});

var page = 0
var grammar = "A_Treatise_of_the_Figures_of_Grammar_and_Rhetorike"
var file_name
$('#page').change(function(){
    page = document.getElementById("page").value;
    console.log(page);
    file_name ="../".concat(grammar,"-pages/",page,".pdf");
    document.getElementById('displayer').setAttribute("src", file_name);
    document.getElementById('displayer').contentDocument.location.reload();
})
$('#grammar').change(function(){
    grammar = document.getElementById("grammar").value;
    console.log(grammar);
    file_name ="../".concat(grammar,"-pages/",page,".pdf");
    document.getElementById('displayer').setAttribute("src", file_name);
    document.getElementById('displayer').contentDocument.location.reload();
})


window.addEventListener('load', function(){
    document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
});

function format(command, value) {
    document.execCommand(command, false, value);
    document.getElementById('sampleeditor').focus();
}

function setUrl() {
    var url = document.getElementById('txtFormatUrl').value;
    var sText = document.getSelection();
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
    document.getElementById('txtFormatUrl').value = '';
}

let saveFile = () => {

// Get the data from each element on the form.
const text = document.getElementById('sampleeditor');

// This variable stores all the data.
let data = text.innerHTML;

// Convert the text to BLOB.
const textToBLOB = new Blob([data], { type: 'text/plain' });
const sFileName = 'formData.txt';	   // The file to save the data.

let newLink = document.createElement("a");
newLink.download = sFileName;

if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
}
else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
}

newLink.click(); 
}