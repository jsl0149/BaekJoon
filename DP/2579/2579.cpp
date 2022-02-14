#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;


int dp[302];

int a[100001];

bool compare(int a, int b) {

	return a > b;

}

int main() {



	int N;

	cin >> N;

	for (int i = 1; i <= N; i++) {

		int num;

		cin >> num;

		a[i] = num;

	}

	dp[0] = 0;

	dp[1] = a[1];

	dp[2] = a[1] + a[2];

	dp[3] = max(a[2] + a[3], a[1] + a[3]);

	for (int i = 4; i <= N; i++) {

		if (a[i] + dp[i - 2] > a[i] + a[i - 2] + dp[i - 3]) dp[i] = a[i] + a[i - 1] + dp[i - 3];

		else dp[i] = a[i] + dp[i - 2];
			

	}

	cout << dp[N] << "\n";


}