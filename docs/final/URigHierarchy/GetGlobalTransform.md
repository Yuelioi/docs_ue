# GetGlobalTransform

返回一个给定键的全局当前值或初始值。如果键是无效的，将返回 FTTransform::Identity。

目标是钻机等级制度

## 图示

![](/uploads/projects/ue-bluprint/20221218-21191353.png)

## Inputs

目标。Rig Hierarchy 对象参考。

在关键。钻机元素键结构。检索转换的键。

初始化。布尔值。如果为真，将使用初始变换。

## Outputs

返回值。变换。全局当前或初始变换的值。

<hr>

Returns the global current or initial value for a given key.. If the key is invalid FTransform::Identity will be returned.

Target is Rig Hierarchy

## 图示

![](/uploads/projects/ue-bluprint/20221218-21191353.png)

## Inputs

Target: Rig Hierarchy Object Reference.

In Key: Rig Element Key Structure. The key to retrieve the transform for.

Initial: Boolean. If true the initial transform will be used.

## Outputs

Return Value: Transform. The global current or initial transform's value..
