# GetSetbyCallerMagnitudebyTag

从游戏效果规格中提取由调用者设定的幅度

目标是游戏模式幅度的计算

## 图示

![]($-20221218-17314626.png)

## Inputs

在。执行。

目标。Gameplay Mod Magnitude Calculation对象参考。

效果规格。Gameplay Effect Spec结构（通过参考）。获取信息的游戏效果规格。

标签。Gameplay Tag结构（根据参考文献）。要查询的效果标签。 

## Outputs

输出。执行。

返回值。浮点数（单精度）。如果找到，是幅度值，否则是0。

Extracts the Set by Caller Magnitude from a Gameplay Effect Spec

Target is Gameplay Mod Magnitude Calculation

## 图示

![]($-20221218-17314626.png)

## Inputs

In: Exec.

Target: Gameplay Mod Magnitude Calculation Object Reference.

Effect Spec: Gameplay Effect Spec Structure (by ref). The Gameplay Effect Spec to get the info from.

Tag: Gameplay Tag Structure (by ref). The effect tag to query.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). The magnitude value if found, zero otherwise.

