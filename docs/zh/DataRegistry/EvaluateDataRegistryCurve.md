# EvaluateDataRegistryCurve

试图使用一个特定的输入值来评估存储在DataRegistry缓存中的曲线。

目标是数据注册表子系统

## 图示

![]($-20221218-18362189.png)

## Inputs

在。执行。

项目标识。数据注册中心Id结构。要在缓存中查找的项目标识。

输入值。Float（单精度）。时间/水平/参数的输入值，用于评估某个位置的曲线。

默认值。Float（单精度）。如果没有找到曲线或输入值超出可接受范围，则使用该值。 

## Outputs

发现。执行。成功找到该行。

未找到。执行。未能找到该行。

输出值。浮点数（单精度）。结果将被替换为评估值，如果评估失败则为默认值。
