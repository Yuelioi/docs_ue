# BreakCommonNumberFormattingOptio-

添加一个节点，将'CommonNumberFormattingOptions'分解为其成员字段

## 图示

![]($-20221218-14324286.png)

## Inputs

常用数字格式化选项。常用数字格式化选项结构（通过引用）。 

## Outputs

四舍五入模式。ERoundingMode枚举。四舍五入模式：。当实际值由于积分或小数位数的限制而无法精确表示时，要使用的四舍五入模式。详见数值。

使用分组。Boolean（布尔）。使用分组：。数字是否应该使用分组分隔符。即："1,000,000"。

最小整数位。整数。最小整数位：。最少应该显示多少个整数位？可能导致数字 "填充"。IE：最小3位整数意味着1.0->"001"。

最大整数位。整数。最大整数位：。最多应该显示多少个整数位？可能会导致四舍五入。IE：最大2位整数意味着100.0->"99"。

最小的小数位。整数。最小小数点：。最少应该显示多少个小数位？可能导致数字 "填充"。IE：最小2个小数位意味着1.0->"1.00"。

最大的小数点。整数。最大的小数点：。最多应该显示多少个小数位？可能会导致四舍五入。IE：HalfFromZero四舍五入和最大2个小数位意味着0.009 -> "0.01"。
