# IsIdentity_Quat

检查该四元数是否为身份四元数。假设被测试的四元数是正常化的。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19525695.png)

## Inputs

问：Quat结构（由参考文献）。

误差。Float（单精度）。与Identity Quaternion比较的误差容限。  

## Outputs

返回值：布尔值。如果四元数是一个规范化的身份四元数，则为true。
