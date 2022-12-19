#include <iostream>
#include <vector>
#include <algorithm>
#define mo

using namespace std;

long long dp[91][2] = {0,};

int main() {

	int N;

	cin >> N;

	dp[1][0] = 0;
	dp[1][1] = 1;



	for (int i = 2; i <= N; i++) {

		for (int j = 0; j <= 1; j++) {

			if (j == 0) dp[i][j] = (dp[i - 1][1] + dp[i - 1][0]) ;

			else dp[i][j] = dp[i - 1][0] ;

		}

	}

	long long res = 0;

	for (int i = 0; i < 2; i++) {

		res = (res +dp[N][i]);

	}

	cout << res << "\n";

}