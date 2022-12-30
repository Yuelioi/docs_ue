# FindSocketandIndex

在这个SkeletalMesh中按名称查找一个套接字对象。输入NAME_None将返回NULL。如果有多个同名的socket，将返回第一个。同时返回套接字的索引，以便将来通过GetSocketByIndex()快速访问。

目标是骨架网

## 图示

![]($-20221218-17493895.png)

## Inputs

目标。Skeletal Mesh对象参考。

在套接字名称中。名称。 

## Outputs

输出索引。整数。

返回值。骨架网套接字对象参考。通过名称查找此SkeletalMesh中的一个套接字对象。输入NAME_None将返回NULL。如果有多个同名的套接字，将返回第一个。同时返回该套接字的索引，以便将来通过GetSocketByIndex()快速访问。
