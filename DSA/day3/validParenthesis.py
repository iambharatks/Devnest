class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for ch in s:
            if ch == '(' or ch == '[' or ch == '{':
                stack.append(ch)
            else:
                n = len(stack)
                if n == 0:
                    return False
                if ch == ')' and stack[n-1] == '(':
                    stack.pop(n-1)
                elif ch == ']' and stack[n-1] == '[':
                    stack.pop(n-1)
                elif ch == '}' and stack[n-1] == '{':
                    stack.pop(n-1)
                else:
                    return False
        n = len(stack)
        return (n == 0)


def main():
    s = input()
    print(Solution().isValid(s))


if __name__ == "__main__":
    main()
