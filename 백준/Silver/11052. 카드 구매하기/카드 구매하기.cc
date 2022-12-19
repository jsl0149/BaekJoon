#include <iostream>
#include <algorithm>
#define endl "\n"
#define mod 1000000000
using namespace std;

int dp[1001];

int a[10001];

int main() {

	int N;

	cin >> N;

	for (int i = 1; i <= N; i++) {

		cin >> a[i];

	}

	dp[0] = 0;

	dp[1] = a[1];

	dp[2] = max(dp[1] + dp[1], a[2]);


	for (int i = 3; i <= N; i++) {

		for (int j = 0; j <= i; j++) {

			dp[i] = max(dp[i], dp[j] + dp[i - j]);

		}

		dp[i] = max(a[i], dp[i]);

	}

	cout << dp[N] << endl;

	


}