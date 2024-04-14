export default function SumOfTwo() {
  ///// იპოვეთ ისეთი 2 რიცხვი array-ში, რომელთა ჯამიც n-ს უდრის.
  //// option 1

  function checkTwoSum(x, sum) {
    x.sort();

    let low = 0;
    let high = x.length - 1;
    while (low < high) {
      if (x[low] + x[high] === sum) {
        return true;
      } else if (x[low] + x[high] < sum) {
        low++;
      } else {
        high--;
      }
    }
    return false;
  }

  //// option 2

  function checkTwoSum2(x, sum) {
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

  console.log("Check of two with pointer: " + checkTwoSum([2, 3, 4, 5, 7], 10));
  console.log(
    "Check of two with pointer: " + checkTwoSum([-2, 3, 4, 5, 7], 10)
  );
  console.log(
    "Check of two with dynamic: " + checkTwoSum2([2, 3, 4, 5, 7], 10)
  );
  console.log(
    "Check of two with dynamic: " + checkTwoSum2([-2, 3, 4, 5, 7], 10)
  );
  return (
    <div>
      <h1>იპოვეთ ისეთი 2 რიცხვი array-ში, რომელთა ჯამიც n-ს უდრის.</h1>
    </div>
  );
}
