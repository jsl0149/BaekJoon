#include <iostream>
#include <vector>
#include <cstring>
#include <string>

using namespace std;


	
int main()
{

	vector<string> nun(100);
	int n;
	cin >> n;
	cin.get();
	int count = 1;
	int sum = 0;

	
	for (int i = 0; i < n; i++) {

		getline(cin, nun[i]);

	}

	for (int j = 0; j < n; j++) {


		for (int i = 0; i < nun[j].size(); i++) {

			if ((nun[j])[i] == 'O') {

				sum += count;
				count++;
			}
			else
				count = 1;
		}

		count = 1;

		cout << sum << endl;

		sum = 0;
	}
	

	return 0;
    
    
}


