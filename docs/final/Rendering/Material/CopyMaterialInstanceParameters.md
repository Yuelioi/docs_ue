# CopyMaterialInstanceParameters

复制给定材料接口的参数（按照层次结构复制每个实例）。实现起来非常慢，避免在运行时使用。希望我们以后能用类似CopyInterpParameters()的东西来代替它。输出是对象本身（this）。复制 "仅快速参数 "将导致一个更快的复制过程，但将仅在客户端复制动态标量、矢量和纹理参数。

目标是材料实例动态

## 图示

![]($-20221218-20373257.png)

## Inputs

在。执行。

目标。材料实例动态对象参考。

来源。材料界面对象参考。

只有快速参数。布尔值。只复制标量、矢量和纹理参数。速度快得多，但可能不包括所需的数据。  

## Outputs

出：执行。

Copies over parameters given a material interface (copy each instance following the hierarchy). Very slow implementation, avoid using at runtime. Hopefully we can replace it later with something like CopyInterpParameters(). The output is the object itself (this). Copying 'quick parameters only' will result in a much. faster copy process but will only copy dynamic scalar, vector and texture parameters on clients.

Target is Material Instance Dynamic

## 图示

![]($-20221218-20373257.png)

## Inputs

In: Exec.

Target: Material Instance Dynamic Object Reference.

Source: Material Interface Object Reference.

Quick Parameters Only: Boolean. Copy scalar, vector and texture parameters only. Much faster but may not include required data.  

## Outputs

Out: Exec.

