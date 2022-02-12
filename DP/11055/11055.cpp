#include <iostream>
#include <algorithm>

using namespace std;


bool compare(int a, int b) {

	return a > b;

}

int dp[1001] = { 0, };

int a[1001] = { 0, };

int main() {

	int N;

	cin >> N;

	for (int i = 1; i <= N; i++) {

		int num;

		cin >> num;

		a[i] = num;

	}

	dp[1] = a[1];

	for (int i = 2; i <= N; i++) {

		int dp_max = 0;

		for (int j = 1; j <= i; j++) {
			if (a[i] > a[j]) {
				if (dp[j] > dp_max) {
					dp_max = dp[j];
					dp[i] = dp_max;
				}
			}
		}

		dp[i] += a[i];

	}


	sort(dp, dp + 1001, compare);

	cout << dp[0] << "\n";


}