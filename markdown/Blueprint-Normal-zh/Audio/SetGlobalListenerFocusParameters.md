# SetGlobalListenerFocusParameters

设置全局听众聚焦参数，它将根据声音的聚焦方位角来调整聚焦行为。 在其衰减设置中设置。

  * 发射和遗忘。

  * 不复制。





目标是游戏的静力学

## 图示

![]($-20221218-18074559.png)

## Inputs

在。执行。

焦点方位角刻度。Float（单精度）。角度刻度值，用于缩放定义声音聚焦位置的方位角。

Non Focus Azimuth Scale（非聚焦方位角）。浮点（单精度）。

焦点距离刻度。浮点（单精度）。一个用于聚焦的声音的距离标度值。值<1.0将减少对声音的感知距离，值>1.0将增加对焦点内声音的感知距离。

非焦点距离标度。Float（单精度）。用于非焦点的声音的距离刻度值。值<1.0将减少对声音的感知距离，值>1.0将增加对焦点内声音的感知距离。

焦点音量刻度。Float（单精度）。

非焦点音量比例。浮动（单精度）。

焦点优先级刻度。浮点数（单精度）。用于聚焦的声音的优先等级值（>0.0）。值<1.0将降低焦点内声音的优先级，值>1.0将增加焦点内声音的优先级。

非焦点的优先级比例。浮点数（单精度）。一个优先级比例值（>0.0），用来处理失焦的声音。<1.0的值将降低失焦声音的优先级，>1.0的值将增加失焦声音的优先级。 

## Outputs

Out: 执行。
