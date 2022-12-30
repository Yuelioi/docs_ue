# BreakInputActionInstance

添加一个节点，将'InputActionInstance'分解成其成员字段

## 图示

![]($-20221218-14382126.png)

## Inputs

输入动作实例。输入行动实例结构（通过参考）。  

## Outputs

源行动。输入行动对象参考。源动作：。这个实例是由源动作创建的。

触发器。输入触发器对象参考数组。Triggers:.TODO: 在这里保持一个UInputAction的副本即可？TODO:限制蓝图对触发器和修改器的访问？

修改器。输入修改器对象参考数组。修改器。

经过处理的时间。Float (single-precision).已用完的处理时间：。总的触发处理/评估时间（这个动作在事件中已经开始、正在进行或触发了多长时间。

经过的触发时间。Float (single-precision).Elapsed Triggered Time:.触发时间（该动作仅在事件触发中持续了多长时间）。

最后触发的世界时间。浮点数（单精度）。最后触发的世界时间：。最后一次评估为触发状态的时间。

触发事件: ETriggerEvent Enum.触发事件。触发状态。
