export class Kata {
  static spinWords(words: string) {
    var l = words.split(" ");    
    var i:any; 
    var j:number;

    var result = "";

    for (i in l) {
      var w = l[i];
      if (w.length >= 5) {
        for (j = w.length - 1; j >= 0; j--) {
          result += w.charAt(j);
        }
        result += " ";
       } else {
         result += w + " ";
       }
    }
    return result.slice(0,-1);
  }
}