# WaitTargetData

生成目标角色并等待它返回有效数据或被取消。

目标是能力任务等待目标数据

## 图示

![](/uploads/projects/ue-bluprint/20221218-17335856.png)

## Inputs

在。执行。

任务实例名称。名称：

确认类型。EGameplayTargetingConfirmation 枚举。

类。Gameplay Ability Target Actor Class Reference。

## Outputs

输出。Exec.

Async Task: Ability Task Wait Target Data Object Reference.

有效数据。执行。有效数据。

取消了。执行。被取消。

数据。Gameplay Ability Target Data Handle Structure（通过引用）。

<hr>

Spawns target actor and waits for it to return valid data or to be canceled.

Target is Ability Task Wait Target Data

## 图示

![](/uploads/projects/ue-bluprint/20221218-17335856.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Confirmation Type: EGameplayTargetingConfirmation Enum.

Class: Gameplay Ability Target Actor Class Reference.

## Outputs

Out: Exec.

Async Task: Ability Task Wait Target Data Object Reference.

Valid Data: Exec. Valid Data.

Cancelled: Exec. Cancelled.

Data: Gameplay Ability Target Data Handle Structure (by ref).
