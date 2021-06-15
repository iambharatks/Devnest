class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        isPresent = {}
        for num in nums:
            if num in isPresent:
                return True
            isPresent[num] = True
        return False


def main():
    nums = [int(i) for i in input().split()]
    print(Solution().containsDuplicate(nums))


if __name__ == "__main__":
    main()
