# ReportNoiseEvent

报告一个噪音事件。

目标是AISense听觉

## 图示

![]($-20221218-17482097.png)

## Inputs

在。Exec.

噪声位置。向量。噪声的位置。

响度。Float（单精度）。噪声的响度。如果MaxRange非零，修改MaxRange，否则修改传感器范围的平方距离。

指示器。Actor对象参考。触发噪音的行为者。

最大范围。Float（单精度）。可以听到声音的最大范围，乘以响度。<=0的值意味着没有限制（但仍受听众范围的限制）。

标签。名称。事件的标识符。 

## Outputs

输出。执行。
