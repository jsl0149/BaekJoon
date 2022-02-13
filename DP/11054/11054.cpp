#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int dp[1001] = { 0, };

int dp2[1001] = { 0, };

int a[1001] = { 0, };

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

	
	
	for (int i = 1; i <= N; i++) {

		int dp_max = 0;

		for (int j = 1; j <= i; j++) {
			if (a[i] > a[j]) {
				if (dp[j] > dp_max) {
					dp_max = dp[j];
					dp[i] = dp_max;
				}
			}
		}



		dp[i] = dp[i] + 1;

	}

	for (int i = N; i >= 1; i--) {

		int dp_max = 0;

		for (int j = N; j >=i; j--) {
			if (a[i] > a[j]) {
				if (dp2[j] > dp_max) {
					dp_max = dp2[j];
					dp2[i] = dp_max;
				}
			}
		}

		dp2[i] += 1;

	}


	int answer[1001] = { 0, };


	for (int i = 0; i <= N; i++) {
		answer[i] = dp[i] + dp2[i] - 1;
	}

	


	sort(answer, answer + 1001, compare);



	cout << answer[0] << endl;
	
	


}