# EndTask

明确调用以结束任务（通常由任务本身）。调用OnDestroy...注意：：你需要在发送任何 "on completed "代表之前调用EndTask。如果你不这样做，任务将仍然处于 "活动 "状态，而事件接收者可能会认为它已经 "完成"。

目标是游戏性任务

## 图示

![]($-20221218-19095617.png)

## Inputs

在。执行。

目标。游戏性任务对象参考。  

## Outputs

出：执行。

Called explicitly to end the task (usually by the task itself). Calls OnDestroy.. Note:: you need to call EndTask before sending out any "on completed" delegates.. If you don't the task will still be in an "active" state while the event receivers may. assume it's already "finished"

Target is Gameplay Task

## 图示

![]($-20221218-19095617.png)

## Inputs

In: Exec.

Target: Gameplay Task Object Reference.  

## Outputs

Out: Exec.

