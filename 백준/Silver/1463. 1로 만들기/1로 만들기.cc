#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int devide(int);

vector <int> dp (1000001, 0);

int main() {
	
	int N;

	cin >> N;

	dp[2] = 1;
	dp[3] = 1;
	dp[4] = 2;


	for (int i = 5; i <= N; i++) {
		if (i % 2 != 0 && i % 3 != 0)
			dp[i] = dp[i - 1] + 1;
		else if (i % 2 == 0 && i % 3 == 0)
			dp[i] = min(dp[i / 2] + 1, dp[i / 3] + 1);
		else if (i % 2 == 0)
			dp[i] = min(dp[i - 1] + 1, dp[i / 2] + 1);
		else if (i % 3 == 0)
			dp[i] = min(dp[i - 1] + 1, dp[i / 3] + 1);
	}

	cout << dp[N] << endl;

}

