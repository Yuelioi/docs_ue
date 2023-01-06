# GetDistanceBetweenTwoSockets

计算两个骨头/插座之间的距离，并可以重新映射范围。

目标是Kismet动画库

## 图示

![]($-20221218-12164579.png)

## Inputs

组件。骨骼网组件对象参考。寻找插座/骨骼的骨架组件。

插座或骨骼名称 A: 名称。第一个插座/骨的名称。

插座空间A：ERelativeTransformSpace枚举。第一个插座/骨头的空间。

插座或骨骼名称 B：名称。第二个插座/骨的名称。

插座空间B。ERelativeTransformSpace枚举。第二个插座/骨头的空间。

重映射范围。布尔值。如果设置为真，距离将使用范围参数重新映射。

在范围内最小。浮点数（单精度）。输入范围的最小值（通常==0.0）。

In Range Max: Float (single-precision).输入范围的最大值（最大预期距离）。

输出范围最小。浮点数（单精度）。输出范围的最小值（通常==0.0）。

输出范围最大值：浮点数（单精度）。输出范围的最大值（通常==1.0）。  

## Outputs

返回值。浮点数（单精度）。

Computes the distance between two bones / sockets and can remap the range.

Target is Kismet Animation Library

## 图示

![]($-20221218-12164579.png)

## Inputs

Component: Skeletal Mesh Component Object Reference. The skeletal component to look for the sockets / bones within.

Socket or Bone Name A: Name. The name of the first socket / bone.

Socket Space A: ERelativeTransformSpace Enum. The space for the first socket / bone.

Socket or Bone Name B: Name. The name of the second socket / bone.

Socket Space B: ERelativeTransformSpace Enum. The space for the second socket / bone.

Remap Range: Boolean. If set to true, the distance will be remapped using the range parameters.

In Range Min: Float (single-precision). The minimum for the input range (commonly == 0.0).

In Range Max: Float (single-precision). The maximum for the input range (the max expected distance).

Out Range Min: Float (single-precision). The minimum for the output range (commonly == 0.0).

Out Range Max: Float (single-precision). The maximum for the output range (commonly == 1.0).  

## Outputs

Return Value: Float (single-precision).

