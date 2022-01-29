#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {

	int num;

	cin >> num;

	vector<int> answer;

	while (num--) {

		int a;

		cin >> a;

		answer.push_back(a);

	}


	cout << *min_element(answer.begin(), answer.end()) << " " << *max_element(answer.begin(), answer.end());


}