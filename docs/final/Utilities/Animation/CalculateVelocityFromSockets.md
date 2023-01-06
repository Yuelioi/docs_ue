# CalculateVelocityFromSockets

该函数计算一个骨/关节的偏移位置在一段时间内的速度。骨头/关节的运动可以在一个参考框架（另一个骨头/关节）内表示。你需要将一个有效的PositionHistory变量连接到这个函数上进行存储。

目标是Kismet动画库

## 图示

![]($-20221218-12164312.png)

## Inputs

在。执行。

Delta Seconds:Float（单精度）。经过的时间，以秒为单位。

组件。骨骼网组件对象参考。寻找骨骼/插座的骨架组件。

插座或骨骼名称。名称。骨头/插座的名称，以跟踪...

参考插座或骨骼：名称。作为参考框架的骨骼/插座的名称（如果没有参考框架==世界空间，则为无）。

插座空间。ERelativeTransformSpace枚举。用于两个套接字/骨架的空间。

在骨骼空间的偏移。向量。在骨/窝点空间中的相对位置，以跟踪时间。

历史。位置历史结构（按参考）。用来存储的历史...

采样数。整数。用于历史记录的样本数。样本数越多，速度变化越平滑。

速度最小。浮点数（单精度）。用于归一化的最小速度（如果min和max都设置为0，则归一化被关闭）。

速度最大值：浮点数（单精度）。用于归一化的最大速度（如果min和max都设置为0，则归一化被关闭）。

缓和类型。EEasingFuncType枚举。要使用的缓和函数。

自定义曲线。运行时浮动曲线结构（通过引用）。如果缓和类型为 "自定义"，则使用该曲线。  

## Outputs

出：执行。

返回值。浮点数（单精度）。

This function calculates the velocity of an offset position on a bone / socket over time.. The bone's / socket's motion can be expressed within a reference frame (another bone / socket).. You need to hook up a valid PositionHistory variable to this for storage.

Target is Kismet Animation Library

## 图示

![]($-20221218-12164312.png)

## Inputs

In: Exec.

Delta Seconds: Float (single-precision). The time passed in seconds.

Component: Skeletal Mesh Component Object Reference. The skeletal component to look for the bones / sockets.

Socket or Bone Name: Name. The name of the bone / socket to track..

Reference Socket or Bone: Name. The name of the bone / socket to use as a frame of reference (or None if no frame of reference == world space)..

Socket Space: ERelativeTransformSpace Enum. The space to use for the two sockets / bones.

Offset in Bone Space: Vector. The relative position in the space of the bone / socket to track over time..

History: Position History Structure (by ref). The history to use for storage..

Number Of Samples: Integer. The number of samples to use for the history. The higher the number of samples - the smoother the velocity changes..

Velocity Min: Float (single-precision). The minimum velocity to use for normalization (if both min and max are set to 0, normalization is turned off).

Velocity Max: Float (single-precision). The maximum velocity to use for normalization (if both min and max are set to 0, normalization is turned off).

Easing Type: EEasingFuncType Enum. The easing function to use.

Custom Curve: Runtime Float Curve Structure (by ref). The curve to use if the easing type is "Custom".  

## Outputs

Out: Exec.

Return Value: Float (single-precision).

