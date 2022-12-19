#include <iostream>
#include <vector>
#include "string.h"
#include <string>



using namespace std;

int check(string str);
bool CheckABC[26];



int main()
{
	int num;
	int count = 0;
	cin >> num;
	cin.get();

	vector <string> word(num);

	for (int i = 0; i < num; i++) {

		memset(CheckABC, false, sizeof(CheckABC));
		getline(cin, word[i], '\n');
		count += check(word[i]);

	}

	cout << count << endl;

	return 0;
}

int check(string str) {

	int preAlpha = str[0];

	CheckABC[preAlpha - 97] = true;

	for (int i = 1; i < str.size(); i++) {

		if (preAlpha == str[i]) {
			continue;
		}

		else{
			if (CheckABC[(int)str[i] - 97] == false) {

				CheckABC[(int)str[i] - 97] = true;

				preAlpha = str[i];
			}
			else {

				return 0;

			}

			}

		}

	return 1;

	}
