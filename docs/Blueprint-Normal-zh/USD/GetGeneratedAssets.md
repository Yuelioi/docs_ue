# GetGeneratedAssets

获取为具有给定基元路径的基元生成的暂存资产。可能是一个资产（例如 UStaticMesh），但也可能是多个（USkeletalMesh、USkeleton 等）。

目标是Usd舞台演员

## 图示

![]($-20221218-21210154.png)

## Inputs

在。执行。

目标。Usd Stage Actor对象参考。

原始路径。字符串。源程序的完整路径，例如"/root_prim/my_mesh"。  

## Outputs

出：执行。

返回值。对象引用的数组。相应的生成的资产。如果路径无效或没有生成资产，则可能为空。
