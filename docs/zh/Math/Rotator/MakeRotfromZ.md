# MakeRotfromZ

建立一个只给定ZAxis的旋转矩阵。X和Y是未指定的，但将是正交的。ZAxis不需要被规范化。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19544253.png)

## Inputs

Z：向量（通过参考）。  

## Outputs

返回值。旋转器。建立一个旋转矩阵，只给定一个ZAxis。X和Y是未指定的，但将是正交的。ZAxis不需要被规范化。
