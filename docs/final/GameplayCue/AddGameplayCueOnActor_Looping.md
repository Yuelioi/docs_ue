# AddGameplayCueOnActor_Looping

调用目标角色上的游戏线索的添加事件。这应该与 RemoveGameplayCueOnActor 的调用相匹配。

- 如果行为体有能力系统，该事件将只在权限上触发，并将被复制。

- 如果行为者没有能力系统，事件将只在本地触发。

目标是游戏提示功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19083790.png)

## Inputs

在。执行。

目标。演员对象参考。

游戏性提示标签。Gameplay Tag 结构。

参数。游戏提示参数结构（按参考）。

## Outputs

出：执行。

<hr>

Invoke the added event for a gameplay cue on the target actor. This should be paired with a RemoveGameplayCueOnActor call.

- If the actor has an ability system, the event will fire on authority only and will be replicated.

- If the actor does not have an ability system, the event will only be fired locally.

Target is Gameplay Cue Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19083790.png)

## Inputs

In: Exec.

Target: Actor Object Reference.

Gameplay Cue Tag: Gameplay Tag Structure.

Parameters: Gameplay Cue Parameters Structure (by ref).

## Outputs

Out: Exec.
