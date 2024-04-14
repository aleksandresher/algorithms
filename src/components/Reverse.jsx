export default function Reverse() {
  function reverseWordsInSentence(sentence) {
    const chars = sentence.split("");

    let start = 0;
    let end = 0;

    while (end <= chars.length) {
      if (end === chars.length || chars[end] === " ") {
        reverseWord(chars, start, end - 1);
        start = end + 1;
      }
      end++;
    }
    return chars.join("");
  }

  function reverseWord(chars, start, end) {
    while (start < end) {
      const temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;
      start++;
      end--;
    }
  }

  ////// Option 2

  function reverseWordsInSentence2(sentence) {
    let reversedSentence = "";
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        word += sentence[i];
      } else {
        reversedSentence += reverseWord2(word) + " ";
        word = "";
      }
    }

    reversedSentence += reverseWord2(word);
    return reversedSentence;
  }

  function reverseWord2(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  }
  const reversedSentence = reverseWordsInSentence("this is the test");
  console.log("Reverse with two ponter " + reversedSentence);

  const reversedSentence2 = reverseWordsInSentence2("this is the test");
  console.log("reverse with dynamic: " + reversedSentence2);
  return (
    <>
      <h1>შეაბრუნეთ სიტყვები წინადადებაში.</h1>
    </>
  );
}
