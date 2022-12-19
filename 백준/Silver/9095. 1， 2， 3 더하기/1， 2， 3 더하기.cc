#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> dp(1001, 0);

int main() {

	int N;

	cin >> N;

	dp[1] = 1;

	dp[2] = 2;

	dp[3] = 4;

	while (N--) {

		int input;

		cin >> input;

		for (int i = 4; i <= input; i++) {

			dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];

		}

		cout << dp[input] << "\n";

	}


}