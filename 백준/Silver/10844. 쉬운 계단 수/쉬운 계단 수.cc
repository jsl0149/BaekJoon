#include <iostream>
#include <vector>

#define mod 1000000000

using namespace std;

int dp[101][10] = {0,};

int main() {

	int N;

	for (int i = 1; i <= 9; i++) {

		dp[1][i] = 1;

	}


	cin >> N;

	for (int i = 2; i <= 100; i++) {

		for (int j = 0; j <= 9; j++) {

			if (j == 0) {
				dp[i][j] = dp[i - 1][1];
			}
			else if (j == 9) {
				dp[i][j] = dp[i - 1][8];
			}
			else {
				dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
			}
            dp[i][j] = dp[i][j] % mod;
		}	
        
        

	}

	int result = 0;

	for (int i = 0; i <= 9; i++) {

		result = (result + dp[N][i]) % mod;

	}

	cout << result << endl;


}