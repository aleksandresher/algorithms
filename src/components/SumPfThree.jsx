export default function SumOfThree() {
  function checkThreeSum(x, sum) {
    x.sort();

    for (let i = 0; i < x.length - 2; i++) {
      let low = i + 1;
      let high = x.length - 1;

      while (low < high) {
        const currentSum = x[i] + x[low] + x[high];
        if (currentSum === sum) {
          return true;
        } else if (currentSum < sum) {
          low++;
        } else {
          high--;
        }
      }
    }

    return false;
  }

  //////////////////////////////////
  //////// Option 2

  function checkThreeSum2(x, sum) {
    const dp = Array.from({ length: x.length + 1 }, () =>
      Array(sum + 1).fill(false)
    );

    for (let i = 0; i <= x.length; i++) {
      dp[i][0] = true;
    }

    for (let i = 1; i <= x.length; i++) {
      for (let j = 1; j <= sum; j++) {
        if (x[i - 1] <= j) {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - x[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    return dp[x.length][sum];
  }

  console.log("Check with pointer: " + checkThreeSum([-2, 3, 4, 5, 7], 15));
  console.log("Check with dynamic: " + checkThreeSum2([-2, 3, 4, 5, 7], 15));
  return (
    <div>
      <h1>იპოვეთ ისეთი 3 რიცხვი array-ში, რომელთა ჯამიც n-ს უდრის</h1>
    </div>
  );
}
