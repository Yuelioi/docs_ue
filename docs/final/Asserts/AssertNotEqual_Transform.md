# AssertNotEqual_Transform

断言两个变换（组件成员--平移、旋转、缩放）在一个小的公差内不相等。

目标是功能测试

## 图示

![]($-20221218-17593159.png)

## Inputs

在。执行。

目标。功能测试对象参考。

实际：转化（通过参考）。

非预期。变换（通过引用）。

What：字符串。如果断言失败，在信息中使用的名称（"预期'什么'不是{预期}，但对于上下文''是{实际}"）。 

## Outputs

输出。Exec。

返回值。布尔值。

Assert that two transforms are (components memberwise - translation, rotation, scale) not equal within a small tolerance.

Target is Functional Test

## 图示

![]($-20221218-17593159.png)

## Inputs

In: Exec.

Target: Functional Test Object Reference.

Actual: Transform (by ref).

Not Expected: Transform (by ref).

What: String. A name to use in the message if the assert fails ("Expected 'What' not to be {Expected} but it was {Actual} for context ''").  

## Outputs

Out: Exec.

Return Value: Boolean.

