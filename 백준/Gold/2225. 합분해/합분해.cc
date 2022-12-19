#include <iostream>
#include <algorithm>
#define endl "\n"
#define mod 1000000000
using namespace std;


int dp[201][201];

int main() {

	int N, K;

	cin >> N >> K;

	
	for (int i = 0; i <= N; i++) {

		dp[i][1] = 1;

	}

	for (int i = 2; i <= K; i++) {

		for (int j = 0; j <= N; j++) {

			for (int t = 0; t <= j; t++) {
			
				dp[j][i] += dp[t][i-1];
				dp[j][i] = dp[j][i] % mod;
			}

		}

	}

	cout << dp[N][K] << endl;


}
