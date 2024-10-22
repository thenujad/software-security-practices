#include <stdio.h>

int main() {
    char name[5]; // Buffer of 5 characters
    printf("Enter your name: ");
    gets(name); // Unsafe input function causing buffer overflow
    printf("Hello, %s\n", name);
    return 0;
}
