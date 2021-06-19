class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        isPresent = {}
        res = []
        n = len(nums)
        for i in range(n-1):
            for j in range(i+1, n):
                val = -nums[i]-nums[j]
                if val in isPresent:
                    res.append({nums[i], nums[j], val})
                isPresent[nums[j]] = j


def main():
    nums = [int(i) for i in input().split()]
    res = Solution().threeSum(nums)
    for list in res:
        for i in list:
            print(i, end=' ')
        print()


if __name__ == "__main__":
    main()
