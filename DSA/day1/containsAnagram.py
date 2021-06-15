class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        isPresent = {}
        for char in s:
            if char in isPresent:
                isPresent[char] += 1
            else:
                isPresent[char] = 1
        for char in t:
            if char in isPresent:
                isPresent[char] -= 1
            else:
                isPresent[char] = 1
            if isPresent[char] < 0:
                return False
        for (k, p) in isPresent.items():
            if p > 0:
                return False
        return True


def main():
    s = input()
    t = input()
    print(Solution().isAnagram(s, t))


if __name__ == "__main__":
    main()
