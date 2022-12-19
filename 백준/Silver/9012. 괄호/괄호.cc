#include <iostream>
#include <string>
#include <algorithm>
#include <stack>
#include <vector>
using namespace std;




int main() {
	
	
	string k;
	
	int n; int X1; int X2;

	cin >> n;

	while (n--) {
		
		stack<char> s;

		cin >> k;
		int count = 0;
		int length = k.length();

		for (int i = 0; i < length; i++) {

			char p = k[i];

			if (p == '(') {
				s.push(p);
				continue;
			}

			if (!s.empty() && p == ')' && s.top() == '(') {
				s.pop();
				continue;
			}

		   if (s.empty() && p == ')') {
				printf("NO\n");
				count++;
				break;
			}

		}



		if (s.empty() == true && count==0) {
			printf("YES\n");
		}

		else if(!s.empty() && count == 0) {
			printf("NO\n");
		}


	}



	

}


