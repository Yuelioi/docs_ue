# InitLocationServices

在使用前被调用设置位置服务

目标是位置服务

## 图示

![](/uploads/projects/ue-bluprint/20221218-20563179.png)

## Inputs

在。执行。

准确度。ELocationAccuracy 枚举。如上面的枚举所见。

更新频率。Float（单精度），以毫秒为单位。(仅限安卓)。

最小距离过滤器。Float（单精度）。

## Outputs

出：执行。

返回值。布尔值。如果初始化成功则为 true。

<hr>

Called to set up the Location Service before use

Target is Location Services

## 图示

![](/uploads/projects/ue-bluprint/20221218-20563179.png)

## Inputs

In: Exec.

Accuracy: ELocationAccuracy Enum. as seen in the enum above.

Update Frequency: Float (single-precision). in milliseconds. (Android only).

Min Distance Filter: Float (single-precision).

## Outputs

Out: Exec.

Return Value: Boolean. true if Initialization was succesful.
