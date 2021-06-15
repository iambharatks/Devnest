class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        index = {}
        n = len(nums)
        for i in range(n):
            val = target-nums[i]
            if(val in index):
                return [index[val], i]
            index[nums[i]] = i
        return []


def main():
    nums = [int(x) for x in input().split()]
    target = int(input())
    res = Solution().twoSum(nums, target)
    for i in res:
        print(i, end=' ')


if __name__ == "__main__":
    main()
