# DeriveModelfromActors

从给定的行动者布局中推导出约束条件，并将其附加到模型中。

目标是波函数崩溃BPLibrary

## 图示

![]($-20221218-21325096.png)

## Inputs

在。执行。

演员。演员对象引用数组。要评估的演员数组。

WFCModel。Wave Function Collapse Model Object Reference.添加约束。

瓦片大小。浮点数（单精度）。瓦片之间的距离。

边框是否为空选项。Boolean（布尔）。边界是否应该被认为是空的Option。

Is Min ZFloor Option:Boolean.最小的Z演员是否应该被视为地板选项（没有东西可以低于它）。

使用统一的重量分布。布尔值。

自动派生Z轴旋转约束。Boolean.是否应该自动衍生出Z轴旋转变体。

排除产卵的资产。软对象路径结构的数组。产卵时要排除的资产。

忽略旋转的资产。软对象路径结构的数组。忽略旋转变体的资产。  

## Outputs

出：执行。
