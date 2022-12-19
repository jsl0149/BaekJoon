#define _CRT_SECURE_NO_WARNINGS

#include <iostream>

using namespace std;


int main() {

	int num = 0; int X2 = 0;;

	

	int count[10001] = { 0, };
	
	scanf("%d", &X2);

	for (int i = 0; i < X2; i++) {
		scanf("%d", &num);
		count[num-1]++;
	}

	for (int i = 0; i < 10001; i++) {

		if (count[i] != 0) {

			for (int j = 0; j < count[i]; j++) {
				printf("%d ", i+1);
			}

		}

		else;

	}


	return 0;

}