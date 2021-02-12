#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
using namespace std;


bool compare(string a, string b) {

	if (a.length() < b.length()) {
		return 1;
	}
	else if (a.length() > b.length()) {
		return 0;
	}

	else {

		int suma = 0;
		int sumb = 0;

		for (int i = 0; i < a.length(); i++) {

			if (48 <= (int)a[i] && (int)a[i] <= 57) {

				suma += (int)a[i] - 48;

			}

		}

		for (int j = 0; j < b.length(); j++) {

			if (48 <= (int)b[j] && (int)b[j] <= 57) {

				sumb += (int)b[j] - 48;

			}
		}

		if (suma < sumb) {
			return 1;
		}
		else if (suma > sumb) {
			return 0;
		}
		else {
			return a < b;
		}


	}


}


int main() {

	vector <string> v;
	string k;

	int n;

	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> k;
		v.push_back(k);
	}

	sort(v.begin(), v.end(), compare);

	for (int i = 0; i < n; i++) {
		cout << v[i] << '\n';
	}

	
	return 0;

}


