# EvaluateDataRegistryCurve

试图使用一个特定的输入值来评估存储在 DataRegistry 缓存中的曲线。

目标是数据注册表子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362189.png)

## Inputs

在。执行。

项目标识。数据注册中心 Id 结构。要在缓存中查找的项目标识。

输入值。Float（单精度）。时间/水平/参数的输入值，用于评估某个位置的曲线。

默认值。Float（单精度）。如果没有找到曲线或输入值超出可接受范围，则使用该值。

## Outputs

发现。执行。成功找到该行。

未找到。执行。未能找到该行。

输出值。浮点数（单精度）。结果将被替换为评估值，如果评估失败则为默认值。

<hr>

Attempts to evaluate a curve stored in a DataRegistry cache using a specific input value

Target is Data Registry Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18362189.png)

## Inputs

In: Exec.

Item Id: Data Registry Id Structure. Item identifier to lookup in cache.

Input Value: Float (single-precision). Time/level/parameter input value used to evaluate curve at certain position.

Default Value: Float (single-precision). Value to use if no curve found or input is outside acceptable range.

## Outputs

Found: Exec. Found the row successfully..

Not Found: Exec. Failed to find the row..

Out Value: Float (single-precision). Result will be replaced with evaluated value, or default if that fails.
