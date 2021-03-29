#include <iostream>
#include <string>
#include <algorithm>
#include <stack>
#include <vector>
#include <cmath>;
using namespace std;

bool compare(pair<int, int>a, pair<int, int>b) {
	if (a.second == b.second) {
		return a.first < b.first;
	}
	else
	return a.second < b.second;
	

}


int main() {

	vector<pair<int, int>> LJS;
	

	int num; int a; int b;

	cin >> num;

	while (num--) {

		cin >> a >> b;

		LJS.push_back(pair<int, int>(a, b));

	}

	sort(LJS.begin(), LJS.end(),compare);


	vector<pair<int, int>> check;

	check.push_back(LJS[0]);

	pair<int, int> start = LJS[0];


	for (int j = 1; j < LJS.size(); j++) {

		if (LJS[j].first >= start.second) {
			check.push_back(LJS[j]);
			start = LJS[j];
		}
	}

	/*for (int k = 0; k < check.size(); k++) {

		printf("%d, %d\n", check[k].first, check[k].second);

	}*/

	printf("%d", check.size());

	return 0;

}
