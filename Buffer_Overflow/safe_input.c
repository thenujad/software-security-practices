#include <stdio.h>
#include <string.h>

#define MAX_USERNAME_LEN 31

int main() {
    char username[MAX_USERNAME_LEN + 1];
    printf("Enter username: ");
    if (fgets(username, sizeof(username), stdin) != NULL) {
        // Remove newline if present
        username[strcspn(username, "\n")] = '\0';
    }
    printf("Hello, %s\n", username);
    return 0;
}
