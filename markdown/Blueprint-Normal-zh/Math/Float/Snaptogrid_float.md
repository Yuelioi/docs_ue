# Snaptogrid_float

将一个值攫取为最近的网格倍数。例如：。Location = 5.1, GridSize = 10.0 : 返回值 = 10.0。如果GridSize为0，则返回Location。如果GridSize非常小，则可能发生精度问题。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19502055.png)

## Inputs

位置。Float（双精度）。

网格大小。Float (double-precision).  

## Outputs

返回值。浮点数（双精度）。将一个值攫取为最接近的网格倍数。例如：。Location = 5.1, GridSize = 10.0 : 返回值 = 10.0。如果GridSize为0，则返回Location。如果GridSize非常小，则可能出现精度问题。
