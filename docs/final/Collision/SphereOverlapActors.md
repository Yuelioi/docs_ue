# SphereOverlapActors

返回一个与给定球体重叠的演员数组。

目标是Kismet系统库

## 图示

![]($-20221218-18195015.png)

## Inputs

在。执行。

Sphere Pos: 向量。球体的中心。

Sphere Radius: Float（单精度）。球体的大小。

对象类型。EObjectTypeQuery枚举的数组。

演员类过滤器。对象类参考。

忽略的演员。演员对象引用数组。忽略列表中的这些演员。 

## Outputs

输出。执行：执行。

Out Actors: 演员对象引用数组。返回的演员数组。未经排序。

返回值。布尔值。如果有通过过滤器的重叠部分，则为真，否则为假。

Returns an array of actors that overlap the given sphere.

Target is Kismet System Library

## 图示

![]($-20221218-18195015.png)

## Inputs

In: Exec.

Sphere Pos: Vector. Center of sphere..

Sphere Radius: Float (single-precision). Size of sphere..

Object Types: Array of EObjectTypeQuery Enums.

Actor Class Filter: Object Class Reference.

Actors to Ignore: Array of Actor Object References. Ignore these actors in the list.  

## Outputs

Out: Exec.

Out Actors: Array of Actor Object References. Returned array of actors. Unsorted..

Return Value: Boolean. true if there was an overlap that passed the filters, false otherwise..

