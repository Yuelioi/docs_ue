# TryOverrideControllerType

临时设置这是什么控制器类型，用于非对称控制方案。如果已经有一个控制器类型被覆盖，你就不能再覆盖了。用EControllerType::Unknown删除临时控制器类型。

目标是VREditor Interactor

## 图示

![]($-20221218-21320399.png)

## Inputs

在。执行。

目标。VREditor Interactor对象参考。

在控制器类型中。EControllerType Enum.  

## Outputs

出：执行。

返回值。布尔值。如果控制器类型被改变，则为真。
