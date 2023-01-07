# ReportNoiseEvent

报告一个噪音事件。

目标是 AISense 听觉

## 图示

![](/uploads/projects/ue-bluprint/20221218-17482097.png)

## Inputs

在。Exec.

噪声位置。向量。噪声的位置。

响度。Float（单精度）。噪声的响度。如果 MaxRange 非零，修改 MaxRange，否则修改传感器范围的平方距离。

指示器。Actor 对象参考。触发噪音的行为者。

最大范围。Float（单精度）。可以听到声音的最大范围，乘以响度。<=0 的值意味着没有限制（但仍受听众范围的限制）。

标签。名称。事件的标识符。

## Outputs

输出。执行。

<hr>

Report a noise event.

Target is AISense Hearing

## 图示

![](/uploads/projects/ue-bluprint/20221218-17482097.png)

## Inputs

In: Exec.

Noise Location: Vector. Location of the noise..

Loudness: Float (single-precision). Loudness of the noise. If MaxRange is non-zero, modifies MaxRange, otherwise modifies the squared distance of the sensor's range..

Instigator: Actor Object Reference. Actor that triggered the noise..

Max Range: Float (single-precision). Max range at which the sound can be heard, multiplied by Loudness. Values <= 0 mean no limit (still limited by listener's range however)..

Tag: Name. Identifier for the event..

## Outputs

Out: Exec.
