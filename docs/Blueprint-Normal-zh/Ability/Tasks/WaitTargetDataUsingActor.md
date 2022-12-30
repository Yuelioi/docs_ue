# WaitTargetDataUsingActor

使用指定的目标行动者，并等待它返回有效数据或被取消。

目标是能力任务等待目标数据

## 图示

![]($-20221218-17335982.png)

## Inputs

在。执行。

任务实例名称。名称：

确认类型。EGameplayTargetingConfirmation枚举。

目标演员。Gameplay Ability Target Actor Object Reference。 

## Outputs

输出。Exec.

Async Task: Ability Task Wait 目标数据对象参考。

有效数据。执行。有效数据。

取消了。执行。被取消。

数据。Gameplay Ability Target Data Handle Structure（通过引用）。
