#include <iostream>
#include <algorithm>
#define endl "\n"
using namespace std;




int main() {

	int N;

	

	cin >> N;

	

	while (N--) {

		long long dp[101];

		dp[1] = 1;
		dp[2] = 1;
		dp[3] = 1;
		dp[4] = 2;
		dp[5] = 2;

		int input;

		cin >> input;

		for (int i = 6; i <= input; i++) {

			dp[i] = dp[i - 1] + dp[i - 5];

		}

		cout << dp[input] << endl;

	}

	return 0;

}