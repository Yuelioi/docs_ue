# DeriveModelfromActors

从给定的行动者布局中推导出约束条件，并将其附加到模型中。

目标是波函数崩溃 BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-21325096.png)

## Inputs

在。执行。

演员。演员对象引用数组。要评估的演员数组。

WFCModel。Wave Function Collapse Model Object Reference.添加约束。

瓦片大小。浮点数（单精度）。瓦片之间的距离。

边框是否为空选项。Boolean（布尔）。边界是否应该被认为是空的 Option。

Is Min ZFloor Option:Boolean.最小的 Z 演员是否应该被视为地板选项（没有东西可以低于它）。

使用统一的重量分布。布尔值。

自动派生 Z 轴旋转约束。Boolean.是否应该自动衍生出 Z 轴旋转变体。

排除产卵的资产。软对象路径结构的数组。产卵时要排除的资产。

忽略旋转的资产。软对象路径结构的数组。忽略旋转变体的资产。

## Outputs

出：执行。

<hr>

Derive constraints from a given layout of actors and append them to a model

Target is Wave Function Collapse BPLibrary

## 图示

![](/uploads/projects/ue-bluprint/20221218-21325096.png)

## Inputs

In: Exec.

Actors: Array of Actor Object References. array of actors to evaluate.

WFCModel: Wave Function Collapse Model Object Reference. to add constraints to.

Tile Size: Float (single-precision). distance between tiles.

Is Border Empty Option: Boolean. should the border be considered EmptyOption.

Is Min ZFloor Option: Boolean. should the minimum Z actors be considered floor options (nothing can go below it).

Use Uniform Weight Distribution: Boolean.

Auto Derive ZAxis Rotation Constraints: Boolean. should it auto derive z-axis rotational variants.

Spawn Exclusion Assets: Array of Soft Object Path Structures. assets to exclude when spawning.

Ignore Rotation Assets: Array of Soft Object Path Structures. assets to ignore rotation variants.

## Outputs

Out: Exec.
