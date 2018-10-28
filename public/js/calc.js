
function countWords(input){
   var count = 0;
   var str;
   if(input =="" ){
         throw Error('The given argument is not a valid name');
   }
   if (input){
       str = input
   }
   else{
      str = document.getElementById("word").value;
   }
    
   words = str.split(" "); 
    for (i=0 ; i < words.length ; i++){
       // inner loop -- do the count
       if (words[i] != "")
          count += 1; 
    }
    if (input){
      return "There are " +
      count +
      " words in the text string you entered!";
     }
  
      document.theForm.results.value = 
      "There are " +
      count +
      " words in the text string you entered!";
  
   
}