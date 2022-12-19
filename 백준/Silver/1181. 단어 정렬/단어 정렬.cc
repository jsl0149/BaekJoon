#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
using namespace std;

bool compare(pair<string, int> a, pair<string, int> b) {

	if (a.second < b.second) {
		return 1;
	}

	else if (a.second > b.second) {
		return 0;
	}

	else {

		return a < b;

	}
}

int main() {

	int num;

	cin >> num;

	string* arr = new string[num];
	vector<pair<string, int>> v;

	string temp;

	for (int i = 0; i < num; i++) {
		cin >> temp;
		int n = temp.size();
		v.push_back(pair<string, int>(temp, n));
	}


	sort(v.begin(), v.end(), compare);

	for (int i = 0; i < num; i++) {
		
		int check = 0;

		for (int j = 0; j < i; j++) {

			if (v[i].first == v[j].first) {
				check = 1;
				break;
			}
			
		}

		if (check == 0) {
			cout << v[i].first << "\n";
		}
		else {
			continue;
		}

	}

	return 0;

}

