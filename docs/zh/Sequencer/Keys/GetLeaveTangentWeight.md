# GetLeaveTangentWeight

如果切线权重模式为RCTWM_WeightedLeave或RCTWM_WeightedBoth，则为右侧离开切线的权重。

目标是电影场景脚本的浮动键

## 图示

![]($-20221218-20492202.png)

## Inputs

目标。电影场景脚本的浮动键对象参考。  

## Outputs

返回值。浮点数（单精度）。切线重量。以 "sqrt(x*x+y*y) "的形式表示斜边的长度，使用与切线相同的x和y的定义。
