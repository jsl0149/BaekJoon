#include <iostream>
#include <vector>
#include <string>


using namespace std;

int main() {

	string data = "";


	getline(cin, data);

	while (cin.eof() != true) {

		cout << data << "\n";

		getline(cin, data);




	}

	return 0;


}