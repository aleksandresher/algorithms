export default function Palindrome() {
  function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
      if (cleanStr[left] !== cleanStr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  console.log(isPalindrome("adada"));
  return (
    <>
      <h1>შეამოწმეთ ემოჯიანი სტრინგი პალინდრომია თუ არა </h1>
    </>
  );
}
