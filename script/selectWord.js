
$( document ).ready(function() {

//Data
  words_file = "data/words.json";
  var subjects = [];
  var keys_phrasalverb = [];
  var keys_animal = [];
  var keys_vegetable = [];


//open json file in js
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
      $( "#word" ).append( key );
      $( "#definition" ).append( value );
    });




  });




});
