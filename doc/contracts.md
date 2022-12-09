- [Vault](#sec-1)
  - [deposit(uint256 amount, address onBehalfOf, uint16 referralCode) returns(uint256)](#sec-1-1)
  - [depositFund(uint256 amount)](#sec-1-2)
  - [withdraw(uint256 amount, address to) returns(uint256)](#sec-1-3)
  - [withdrawFund(uint256 amount) returns(uint256)](#sec-1-4)
  - [funciton getReserveData() returns (DataTypes.ReserveData)](#sec-1-5)
  - [function getConfiguration() returns (DataTypes.ReserveConfigurationMap)](#sec-1-6)
  - [function getReserveNormalizedIncome() returns (uint256)](#sec-1-7)
  - [function paused() returns (bool)](#sec-1-8)
- [OToken](#sec-2)
  - [balanceOf(address user) returns(uint256)](#sec-2-1)
  - [totalSupply() returns(uint256)](#sec-2-2)

# Vault<a id="sec-1"></a>

提供业务操作的接口。 封闭基金 + 权益oToken，一个资金池和aToken对应一个基金产品，每个基金只支持一个币种，募资结束，将合约资金转入交易所账号，赎回期，将交易所资金转回合约

1.  申购期，用户存入资金到合约铸造权益 token
2.  封闭期，用户可以查看所投资金的净值变化，和整体收益情况（交易系统会提供每个基金的当期表现数据以及历史表现数据）
3.  赎回期，用户燃烧权益token赎回本金
4.  在赎回期，如果净值大于1，允许用户1:1赎回本金，同时允许提取分红，如果不提取本金和分红，本金和分红将继续投资到下一期（现在是设计成分开提取，能否合并在一起提取）
5.  在赎回期，如果净值小于1，用户只能赎回按净值比例的部分本金
6.  赎回期结束，整个基金进行rebalance，净值重置为1，进入下一期基金的申购期
7.  基金费用主要分为管理费和绩效费，管理费在赎回期扣除，绩效费在有分红时扣除

管理费 = max(期初管理资金, 期末管理资金余额) x rate x 管理时间 / 365，无论是否有收益都要计算

绩效费 = max(0,（期末管理资金 - 期初管理资金）x rate)，收益为0则没有绩效费

基金提取由基金管理团队完成，存入由银行操作员存入

购买期可以取消

每期有购买上限

基金提取只能放入固定地址，该地址由基金管理团队设置。

基金提取只能在锁定期进行，存入可以在任意时间完成。 ‌

## deposit(uint256 amount, address onBehalfOf, uint16 referralCode) returns(uint256)<a id="sec-1-1"></a>

申购期可用，用户存入资金到合约铸造 oToken 给 onBehalOf ，如果 传入的 amount 超过当期剩余可申购总额， 那么只会购买剩余可申购总额那么多。返回申购资金数量。 抛出事件 Deposit(address user, address onBehalfOf, uint256 amount, uint16 referralCode) 。 其中 amount 是最终购买的资金数量

## depositFund(uint256 amount)<a id="sec-1-2"></a>

供基金团队使用，用来在赎回期前存入资金。 由于目前业务设计是从交易所直接转到Vault,该函数暂时无用。

## withdraw(uint256 amount, address to) returns(uint256)<a id="sec-1-3"></a>

申购期或者赎回期可用，用户从资金池中提取资金到 to 账户，如果需要提取所有资金，那么把 amount 设为 uint256的最大值。返回提取资金总量。 抛出事件 Withdraw(address user, address to, uint256 amount)。 其中 amount 是最终提取的资金总量。

## withdrawFund(uint256 amount) returns(uint256)<a id="sec-1-4"></a>

锁定期可用，管理团队从资金池中提取资金到设定好的账户，如果需要提取所有资金，那么把 amount 设为 uint256的最大值。返回提取资金总量。 抛出事件 FundWithdraw(address to, uint256 amount)。 其中 to 是收到资金的账户，amount 是最终提取的资金总量。

## funciton getReserveData() returns (DataTypes.ReserveData)<a id="sec-1-5"></a>

返回基金池参数：

1.  uint256 configuration 基金池设置，0-7位表示资产的十进制位数，一般为18。
2.  uint128 liquidityIndex 当前总收益率：表示从基金池建立到lastUpdateTimestamp为止的总收益率。
3.  uint128 currentLiquidityRate 当前预期年化收益率：表示目前基金的预期年化收益率。
4.  uint128 purchaseUpperLimit 当期的基金购买总上限。
5.  uint40 lastUpdateTimestamp 最后一次更新时间。
6.  uint40 purchaseBeginTimestamp 申购期开始时间
7.  uint40 purchaseEndTimestamp 申购期结束时间（即锁定期开始时间）
8.  uint40 redemptionBeginTimestamp 赎回期开始时间（即锁定期结束时间）
9.  uint16 managementFeeRate 管理费率，万分数，10000 = 100%
10. uint16 performanceFeeRate 绩效费率，万分数，10000 = 100%
11. address oTokenAddress 对应的OToken地址
12. address fundAddress 取出基金时所用的帐号地址

## function getConfiguration() returns (DataTypes.ReserveConfigurationMap)<a id="sec-1-6"></a>

返回基金池设置。0-7位表示资产的十进制位数，一般为18。

## function getReserveNormalizedIncome() returns (uint256)<a id="sec-1-7"></a>

返回计入预期年化收益率后的当前时间点的收益率。

## function paused() returns (bool)<a id="sec-1-8"></a>

返回当前是否处于暂停状态。

# OToken<a id="sec-2"></a>

## balanceOf(address user) returns(uint256)<a id="sec-2-1"></a>

返回使用收益率计算后的用户资金

## totalSupply() returns(uint256)<a id="sec-2-2"></a>

返回使用收益率计算后的当前基金池里的资金总额
