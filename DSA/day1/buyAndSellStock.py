class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        sell = prices[0]
        buy = 0
        profit = 0
        n = len(prices)
        for i in range(1, n):
            buy = prices[i]
            if buy > sell:
                profit = max(profit, buy-sell)
            else:
                sell = buy
        return profit


def main():
    prices = [int(i) for i in input().split()]
    print(Solution().maxProfit(prices))


if __name__ == "__main__":
    main()
