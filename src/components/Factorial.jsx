export default function Factorial() {
  function getFactorial(n) {
    let product = 1;
    let left = 1;
    let right = n;

    while (left <= right) {
      product *= left;
      if (left !== right) {
        product *= right;
      }
      left++;
      right--;
    }

    return product;
  }

  console.log(getFactorial(5));
  console.log(getFactorial(8));
  return (
    <>
      <h1>დაწერეთ ფაქტორიალის ალგორითმი ორივე მიდგომით</h1>
    </>
  );
}
