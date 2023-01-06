# GetCenterOfMass

获取单个体的质量中心。如果是一个焊接体，这将返回整个焊接体（包括其父体和子体）的质量中心。没有被模拟的物体返回（0,0,0），因为它们没有COM。

目标是原始组件

## 图示

![]($-20221218-20274216.png)

## Inputs

目标。原始组件对象参考。

骨骼名称。名称。如果是SkeletalMeshComponent，要获得质量中心的体的名称。'无'表示根体。

## Outputs

返回值。向量。

Get the center of mass of a single body. In the case of a welded body this will return the center of mass of the entire welded body (including its parent and children). Objects that are not simulated return (0,0,0) as they do not have COM

Target is Primitive Component

## 图示

![]($-20221218-20274216.png)

## Inputs

Target: Primitive Component Object Reference.

Bone Name: Name. If a SkeletalMeshComponent, name of body to get center of mass of. 'None' indicates root body..  

## Outputs

Return Value: Vector.

