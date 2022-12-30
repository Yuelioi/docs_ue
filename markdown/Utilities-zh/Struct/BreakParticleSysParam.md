# BreakParticleSysParam

添加一个节点，将'ParticleSysParam'分解成其成员字段

## 图示

![]($-20221218-14410264.png)

## Inputs

Particle Sys Param: 粒子系统参数结构（通过参考）。  

## Outputs

姓名。姓名：。名称：。参数的名称。

参数类型。EParticleSysParamType Enum.Param Type:.参数类型。参数的类型。PSPT_None - 没有数据类型。PSPT_Scalar - 使用标量值。PSPT_ScalarRand - 在[Scalar_Low.Scalar]范围内选择一个标量值。PSPT_Vector - 使用矢量值。PSPT_VectorRand - 在[Vector_Low.Vector)范围内选择一个矢量值。PSPT_Color - 使用颜色值。PSPT_Actor - 使用演员值。PSPT_Material - 使用材质值。PSPT_VectorUnitRand - 沿着[Vector_Low.Vector)的范围选择一个随机的单位向量和比例。

标量。Float（单精度）。标量。

Scalar Low: Float (single-precision).Scalar Low.

向量：向量。矢量。

Vector Low: Vector.矢量低。

颜色：颜色结构。颜色。

演员。Actor Object Reference.行为者。

材料。材料界面对象参考。材料。
