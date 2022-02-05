#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> dp (1001, 0);

int main() {


	dp[1] = 1;

	dp[2] = 2;

	int N;

	cin >> N;

	for (int i = 3; i <= N; i++) {

		dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;

	}
	
	cout << dp[N] << endl;




}