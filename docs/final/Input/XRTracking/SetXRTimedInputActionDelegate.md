# SetXRTimedInputActionDelegate

钩住一个委托来获取OpenXR动作事件的动作时间。对于布尔输入，委托的 "值 "参数在按下时是1.0，释放时是0.0。对于一个模拟输入，其值的范围是动作和平台特定的。与GetControllerTransformForTime结合使用，可以提高时间变换的精度和速度数据。"Left Grip "是一个有效的动作名称的例子。注意：这可能会在未来的某个时候被核心输入系统中对事件时间的本地支持所取代。

目标是头戴式显示器功能库

## 图示

![]($-20221218-19302447.png)

## Inputs

在。执行。

行动名称。名称（按参考）。

在代表。代表（由裁判）。  

## Outputs

出：执行。

Hook up a delegate to get an OpenXR action event with action time.. For a boolean input the the 'value' parameter of the delegate will be 1.0 for a press and 0.0 for a release. For an analog input the value's range is action and platform specific.. Use in combination with GetControllerTransformForTime for potentially improved temporal transform precision and velocity data.. "Left Grip" is an example of a valid ActionName.. Note: this is likely to be replaced by native support for event times in the core input system at some time in the future.

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19302447.png)

## Inputs

In: Exec.

Action Name: Name (by ref).

In Delegate: Delegate (by ref).  

## Outputs

Out: Exec.

