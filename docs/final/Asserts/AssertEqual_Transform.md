# AssertEqual_Transform

断言两个变换在一个小的公差范围内是相等的（组件成员 - 平移、旋转、缩放）。

目标是功能测试

## 图示

![](/uploads/projects/ue-bluprint/20221218-17592477.png)

## Inputs

在。执行。

目标。功能测试对象参考。

实际：转化（通过参考）。

预期的。变换（通过引用）。

What：字符串。如果断言失败，在信息中使用的名称（"预期'什么'是{预期}，但对于上下文''是{实际}"）。

Tolerance（公差）。浮点数（单精度）。

## Outputs

输出。执行。

返回值。布尔值。

<hr>

Assert that two transforms are (components memberwise - translation, rotation, scale) equal within a small tolerance.

Target is Functional Test

## 图示

![](/uploads/projects/ue-bluprint/20221218-17592477.png)

## Inputs

In: Exec.

Target: Functional Test Object Reference.

Actual: Transform (by ref).

Expected: Transform (by ref).

What: String. A name to use in the message if the assert fails ("Expected 'What' to be {Expected} but it was {Actual} for context ''").

Tolerance: Float (single-precision).

## Outputs

Out: Exec.

Return Value: Boolean.
