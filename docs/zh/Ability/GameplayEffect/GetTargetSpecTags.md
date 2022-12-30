# GetTargetSpecTags

返回来自游戏效果规格的目标规格标签。对修改器幅度的计算很有用

目标是游戏性修改器幅度计算

## 图示

![]($-20221218-17315372.png)

## Inputs

在。执行（Exec）。

目标。Gameplay Mod Magnitude Calculation对象参考。

效果规格。Gameplay Effect Spec结构（通过参考）。要获取信息的游戏效果规格。 

## Outputs

输出。执行：执行。

返回值。Gameplay Tag Container结构（通过引用）。包含复制的标签的游戏标签容器。如果没有捕获的源标签存在，该容器将是空的。
