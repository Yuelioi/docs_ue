# GetCapturedAttributeMagnitude

获取给定Attribute的捕获幅度值。为了使其正常工作，需要将该属性添加到要捕获的相关属性阵列中。

目标是游戏模式的幅度计算

## 图示

![]($-20221218-17313869.png)

## Inputs

在。执行。

目标。Gameplay Mod Magnitude Calculation对象参考。

效果规格。Gameplay Effect Spec结构（通过参考）。获取信息的游戏效果规格。

Attribute（属性）。Gameplay Attribute结构。要查询的属性。

Source Tags（源标签）。游戏玩法标签容器结构（通过引用）。

目标标签。Gameplay标签容器结构（按参考文献）。 

## Outputs

输出。执行：执行。

返回值。浮点数（单精度）。如果找到了，是幅度值，否则是零。
