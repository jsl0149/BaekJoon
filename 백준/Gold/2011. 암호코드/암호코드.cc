#include <iostream>
#include <algorithm>
#include <string>
#define endl "\n"
#define mod 1000000
using namespace std;

int a[5001];

int dp[5001];

int main() {

	string N;

	cin >> N;


	for (int i = 1; i <= N.size(); i++) {

		a[i] = N[i-1] - '0';

	}

	if (a[1] == 0) {
	
		cout << 0 << endl;

		return 0;

	}

	dp[0] = 1;
	
	dp[1] = 1;

	

	for (int i = 2; i <= N.size(); i++) {

		if (a[i] == 0 && a[i - 1] == 0) {
			dp[N.size()] = 0;
			break;
		}


		else if ((a[i - 1] * 10) + a[i] <= 26 && a[i] == 0) {
			dp[i] = dp[i - 2] % mod;
		}

		else if ((a[i - 1] * 10) + a[i] <= 26) {

			if (a[i - 1] == 0) dp[i] = dp[i - 1] % mod;

			else dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
		}


		else if (((a[i - 1] * 10) + a[i] > 26 && a[i] == 0)) {
			dp[N.size()] = 0;
			break;
		}

		else {
			dp[i] = dp[i - 1] % mod;
		}


	}

	cout << dp[N.size()] << endl;


	return 0;


}