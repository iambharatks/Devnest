
# * You must write an algorithm that runs in O(n) time and without using the division operation.
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        leftProd = nums[:]
        rightProd = nums[:]
        res = nums[:]
        n = len(nums)
        for i in range(1, n):
            leftProd[i] *= leftProd[i-1]
            rightProd[n-i-1] *= rightProd[n-i]
        for i in range(n):
            if i == 0:
                res[i] = rightProd[i+1]
            elif i == n-1:
                res[i] = leftProd[i-1]
            else:
                res[i] = rightProd[i+1] * leftProd[i-1]
        return res


def main():
    nums = [int(i) for i in input().split()]
    res = Solution().productExceptSelf(nums)
    for i in res:
        print(i, end=' ')


if __name__ == "__main__":
    main()
