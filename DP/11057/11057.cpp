#include <iostream>
#include <vector>
#include <algorithm>
#define mod 10007

using namespace std;

int dp[1001][10];

int main() {

	int N;

	cin >> N;

	for (int i = 0; i <= 9; i++) {
		dp[1][i] = 1;
	}

	for (int i = 2; i <= N; i++) {

		for (int j = 0; j <= 9; j++) {

			int sum = 0;

			for (int t = 0; t <= j; t++) {

				sum = (sum + dp[i - 1][t]) % mod ;

			}

			dp[i][j] = sum % mod;

		}

	}

	int res = 0;

	for (int i = 0; i < 10; i++) {

		res = (res + dp[N][i]) % mod;

	}

	cout << res << "\n";

}