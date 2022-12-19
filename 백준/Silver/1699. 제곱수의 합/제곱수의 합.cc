#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
#include <cctype>;
#define endl "\n"
using namespace std;

int dp[100001];

int main() {

	int N;

	
	cin >> N;

	dp[0] = 0;
	
	



	
	for (int i = 1; i <= N;i++) {

		dp[i] = i;

		for (int j = 1; j * j <= i; j++) {

			dp[i] = min(dp[i], dp[i - j * j] + 1);
		}
		

	}
	
	cout << dp[N] << endl;

	return 0;


}