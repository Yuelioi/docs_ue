# Cleanup

丢弃当前打开的阶段。当通过脚本使用这个类时，这一点很关键。当 Python 对象跑出范围时，C++的析构器不会被调用，所以我们会保留一个对舞台的强引用。

目标是 Usd 转换蓝图的背景

## 图示

![](/uploads/projects/ue-bluprint/20221218-18592706.png)

## Inputs

在。执行。

目标。Usd 转换蓝图背景对象参考。

## Outputs

出：执行。

<hr>

Discards the currently opened stage. This is critical when using this class via scripting: The C++ destructor will. not be called when the python object runs out of scope, so we would otherwise keep a strong reference to the stage

Target is Usd Conversion Blueprint Context

## 图示

![](/uploads/projects/ue-bluprint/20221218-18592706.png)

## Inputs

In: Exec.

Target: Usd Conversion Blueprint Context Object Reference.

## Outputs

Out: Exec.
