$(document).ready(function() {
  //font size of quotes
  $("#message").css("font-size", "60px");
  //When you click "New Quote"
  $("#getMessage").on("click", function(){
 
    //Array of 6 quotes
    var quoteArray = [
      "Everybody Pants Now!", 
      "Not my circus, not my monkeys.", 
      "If you think reading is boring, then you're doing it wrong", 
      "But first, coffee.", 
      "May your choices reflect your hopes, not your fears.", 
      "Do what you feel to be right, for you will be criticized anyway."];
    
    //Array of 6 'authors'
    author = [
      "Parks and Rec",
      "Polish Proverb",
      "Anonymous",
      "Anonymous",
      "Nelson Mandela",
      "Eleanor Roosevelt"]; 
    
    //Array of 6 colors
    colorArray = ["#294f04", "#dd8c08", "#5919a8", "#021b4f", "#1f024f", "#4f0240"];
      
    //find a random number. Use it for index of quotes, author, and colors, so they all match.
    var index = Math.floor(Math.random() * quoteArray.length);
      
    //find quote, author, and color at the SAME index
    var quote = quoteArray[index];
    var newAuthor = author[index];
    var newColor = colorArray[index];
    
    //show the quotation mark icon, add fadein
    $("#icon").css("visibility", "visible").hide().fadeIn(1000);
    //print the quote at the corresponding index, add fadein
    $("#message").html(quote).hide().fadeIn(1000);
    //print the author at the corresponding index. change font size and add fadeIN
    $("#authors").css("font-size", "30px").html(newAuthor).hide().fadeIn(1500);
    //change colors to corresponding index.  change background, text, button border, and button background on click
    $("body").css("background-color", newColor);
    $("body").css("color", newColor);
    $(".btn").css("border-color", newColor);
    $(".btn").css("background", newColor);   
}); 
});
