# GetCurveIdentifiers

从提供的骨架中检索特定曲线类型的所有曲线标识符。

目标是Animation Curve Identifier Extensions。

## 图示

![]($-20221218-18340649.png)

## Inputs

在。执行。

在骨架中。骨架对象参考。用于检索曲线标识符的骨架。

曲线类型。ERawCurveTrackTypes枚举。要检索的曲线标识符的类型。 

## Outputs

输出。执行：执行。

返回值。Animation Curve Identifier结构的数组。FAnimationCurveIdentifier实例的数组，如果操作成功，每个实例代表一条独特的曲线，否则就是空数组。

Retrieves all curve identifiers for a specific curve types from the provided Skeleton

Target is Animation Curve Identifier Extensions

## 图示

![]($-20221218-18340649.png)

## Inputs

In: Exec.

In Skeleton: Skeleton Object Reference. Skeleton from which to retrieve the curve identifiers.

Curve Type: ERawCurveTrackTypes Enum. Type of the curve identifers to retrieve.  

## Outputs

Out: Exec.

Return Value: Array of Animation Curve Identifier Structures. Array of FAnimationCurveIdentifier instances each representing a unique curve if the operation was successful, empyty array otherwise.

