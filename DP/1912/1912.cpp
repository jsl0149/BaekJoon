#include <iostream>
#include <vector>
#include <algorithm>
#define bigNum -10000000001

using namespace std;


long long dp[100001];

long long a[100001];

bool compare(int a, int b) {

	return a > b;

}

int main() {

	fill_n(dp, 100001, bigNum);

	int N;

	cin >> N;

	for (int i = 1; i <= N; i++) {

		int num;

		cin >> num;

		a[i] = num;

	}

	dp[1] = a[1];

	for (int i = 2; i <= N; i++) {
		
		if (dp[i - 1] + a[i] <= 0 || (dp[i-1] + a[i]) < a[i]) {
			dp[i] = a[i];
		}
		
		else {
			dp[i] = dp[i - 1] + a[i];
		}

	}

	sort(dp, dp + 100001, compare);



	cout << dp[0] << endl;
	
	


}