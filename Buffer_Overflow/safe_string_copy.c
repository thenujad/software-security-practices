#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    char name[50];
    strncpy(name, "Safe string copy example", sizeof(name) - 1);
    name[sizeof(name) - 1] = '\0'; // Ensure null-termination
    printf("Name: %s\n", name);

    // Dynamic memory allocation
    char *message;
    int required_size = snprintf(NULL, 0, "Hello, %s", name) + 1;
    message = malloc(required_size);
    snprintf(message, required_size, "Hello, %s", name);
    printf("%s\n", message);
    free(message);
    return 0;
}
