import sys


class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        curSum = 0
        maxSum = -sys.maxsize-1
        for num in nums:
            curSum = max(curSum+num, num)
            maxSum = max(maxSum, curSum)
        return maxSum


def main():
    nums = [int(i) for i in input().split()]
    print(Solution().maxSubArray(nums))


if __name__ == "__main__":
    main()
