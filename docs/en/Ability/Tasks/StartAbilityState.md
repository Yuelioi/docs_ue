# StartAbilityState

Starts a new ability state.

Target is Ability Task Start Ability State

## 图示

![]($-20221218-17331608.png)

## Inputs

In: Exec.

State Name: Name. The name of the state..

End Current State: Boolean. If true, all other active ability states will be ended..  

## Outputs

Out: Exec.

Async Task: Ability Task Start Ability State Object Reference.

On State Ended: Exec. On State Ended:. Invoked if 'EndAbilityState' is called or if 'EndAbility' is called and this state is active..

On State Interrupted: Exec. On State Interrupted:. Invoked if the ability was interrupted and this state is active..

