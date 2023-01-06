# GetGlobalTransformbyIndex

返回一个元素索引的全局当前值或初始值。如果索引是无效的，将返回FTTransform::Identity。

目标是钻机等级制度

## 图示

![]($-20221218-21191470.png)

## Inputs

目标。Rig Hierarchy对象参考。

在元素索引中。整数。检索转换的索引。

初始化。布尔值。如果为真，将使用初始变换。  

## Outputs

返回值。变换。全局当前或初始变换的值。

Returns the global current or initial value for a element index.. If the index is invalid FTransform::Identity will be returned.

Target is Rig Hierarchy

## 图示

![]($-20221218-21191470.png)

## Inputs

Target: Rig Hierarchy Object Reference.

In Element Index: Integer. The index to retrieve the transform for.

Initial: Boolean. If true the initial transform will be used.  

## Outputs

Return Value: Transform. The global current or initial transform's value..

