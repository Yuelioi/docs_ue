# FindSocketInfo

在这个SkeletalMesh中按名称查找一个套接字对象和相关信息。输入NAME_None将返回NULL。如果有多个同名的socket，将返回第一个。同时返回套接字的索引，以便将来通过GetSocketByIndex()快速访问。同时返回套接字的位置和骨骼索引（如果有的话）。

目标是骨架网

## 图示

![]($-20221218-17494006.png)

## Inputs

目标。骨骼网对象参考。

在套接字名称中。名称。 

## Outputs

Out Transform（转换）。变形。

Out Bone Index: 骨骼索引。整数。

输出索引。整数。

返回值。骨骼网插座对象参考。通过名称查找此SkeletalMesh中的一个套接字对象和相关信息。输入NAME_None将返回NULL。如果有多个同名的套接字，将返回第一个。同时返回套接字的索引，以便将来通过GetSocketByIndex()快速访问。还会返回套接字的位置和骨骼索引（如果有的话）。
