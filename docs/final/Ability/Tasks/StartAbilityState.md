# StartAbilityState

启动一个新的能力状态。

目标是能力任务 启动能力状态

## 图示

![](/uploads/projects/ue-bluprint/20221218-17331608.png)

## Inputs

在。执行。

状态名称。名称。状态的名称。

结束 当前状态。布尔值。如果为真，所有其他活动能力状态将被结束。

## Outputs

输出。执行：执行。

异步任务。Ability Task Start 能力状态对象参考。

在状态结束时。执行。On State Ended:. 如果'EndAbilityState'被调用，或者'EndAbility'被调用且该状态处于活动状态，则调用。

在状态中断时。执行。On State Interrupted:.状态中断时。如果能力被中断，并且这个状态处于激活状态，则调用。

<hr>

Starts a new ability state.

Target is Ability Task Start Ability State

## 图示

![](/uploads/projects/ue-bluprint/20221218-17331608.png)

## Inputs

In: Exec.

State Name: Name. The name of the state..

End Current State: Boolean. If true, all other active ability states will be ended..

## Outputs

Out: Exec.

Async Task: Ability Task Start Ability State Object Reference.

On State Ended: Exec. On State Ended:. Invoked if 'EndAbilityState' is called or if 'EndAbility' is called and this state is active..

On State Interrupted: Exec. On State Interrupted:. Invoked if the ability was interrupted and this state is active..
