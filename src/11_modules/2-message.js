import {countCharacter, capitalizeFirstCharacterOfWords, reverseWord,
        reverseAllWords, replaceFirstOccurence, encode, palindrome,
        pigLatin} from "./2-messageMixer";

function displayMessage() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
    console.log(palindrome("abc"));
    console.log(pigLatin("abc bca   abc bca     abc", '1'));
}

displayMessage();
