#include <iostream>
#include <vector>

using namespace std;

int main() {

	int num;

	cin >> num;

	vector<int> answer;

	for (int i = 0; i < num;i++) {

		int a, b;

		cin >> a >> b;

		answer.push_back(a + b);

		printf("Case #%d: %d + %d = %d\n", i+1, a, b, a+b);

	}
	
	return 0;

	

}