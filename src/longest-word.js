var findLongestWord = function(str) {
    var str = str;
    var sentence = str.split(" ");
    console.log("sentence = " + sentence);
    var wordLength = 0;
    for (i = 0; i < sentence.length; i++) {
        if(sentence[i].length > wordLength) {
            wordLength = sentence[i].length;
        };
    };
    console.log("wordLength = " + wordLength);
    return wordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");