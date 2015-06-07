
$( document ).ready(function() {
//get date
{
  var dNow = new Date();
  var localdate = dNow.toDateString();
//var localdate =  dNow.getDate() + '/' + (dNow.getMonth()+1).toDateString()+ '/'  + dNow.getFullYear() ;
  $('#currentDate').text(localdate)
}

//Data
  words_file = "data/words.json";
  var subjects = [];



//open json file in js

function gimmeWord(words_file,subjects){
  $.getJSON( words_file, function( data ) {
    console.log(data);
    // convert it in a string
    var words_text = JSON.stringify(data);

    var words = jQuery.parseJSON( words_text);
    console.log(words);

    // push subject key in a array
    $.each(words, function(key) {
      subjects.push(key);
      console.log(subjects);
    });

    // select randomly the subject
    var daysubject = subjects[Math.floor(Math.random() * subjects.length)];
    console.log(daysubject);

    // select randomly one item of selected subject
    var dayword = words[daysubject][Math.floor(Math.random() * words[daysubject].length)];
    $.each(dayword, function(key, value) {
      word = key;
      definition = value;
      $( "#word" ).html( key );
      $( "#definition" ).html( value );
    });




  });
  }


//click to have new word
$( "#newWord button" ).click(function() {
  $.ajax({
    url: "index.html",
    context: document.body
  }).done(function() {

    gimmeWord(words_file,subjects);
  });
});



});
