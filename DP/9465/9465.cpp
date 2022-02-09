#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int dp[2][100001] = { 0, };

int a[2][100001] = { 0, };


int main() {

	int N; 

	cin >> N;

	

	
	vector<int> answer;

	while (N--) {

		
		int num;

		cin >> num;

		for (int i = 1; i <= num; i++) {

			int data;

			cin >> data;

			a[0][i] = data;

		}


		for (int i = 1; i <= num; i++) {

			int data;

			cin >> data;

			a[1][i] = data;

		}

		dp[0][0] = 0;

		dp[1][0] = 0;

		dp[0][1] = a[0][1];

		dp[1][1] = a[1][1];


		for (int i = 2; i <= num; i++) {

			dp[0][i] = max(dp[1][i - 1], dp[1][i - 2]) + a[0][i];
			dp[1][i] = max(dp[0][i - 1], dp[0][i - 2]) + a[1][i];
		}

		
		cout << max(dp[0][num], dp[1][num]) << "\n";

	}

}