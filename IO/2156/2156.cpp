#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int dp[10001] = { 0, };

int a[10001] = { 0, };


int main() {

	int N;

	cin >> N;

	for (int i = 1; i <= N; i++) {

		int num;
		
		cin >> num;

		a[i] = num;

	}


	dp[1] = a[1];

	dp[2] = a[2] + a[1];

	for (int i = 3; i <= N; i++) {

		dp[i] = max(dp[i - 2] + a[i], dp[i - 3] + a[i - 1] + a[i]);

		
		dp[i] = max(dp[i - 1], dp[i]);
	}

	cout << dp[N] << "\n";


}