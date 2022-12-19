#include <iostream>
#include <cstdlib>
#include <vector>
#include <string>
using namespace std;

int main() {

	int input = 0;

	cin >> input;

	vector<int> answer;


	while (input--) {

		int a, b;

		cin >> a >> b;

		answer.push_back(a + b);

	}

	for (int i = 0; i < answer.size(); i++) {

		printf("Case #%d: %d\n", i + 1, answer[i]);

	}

	return 0;


}