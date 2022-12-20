# InjectInputVectorforAction

Input simulation via injection. Runs modifiers and triggers delegates as if the input had come through the underlying input system as FKeys.. Applies action modifiers and triggers on top.

Target is Enhanced Input Subsystem Interface

## 图示

![]($-20221218-19241836.png)

## Inputs

In: Exec.

Target: Enhanced Input Subsystem Interface Interface.

Action: Input Action Object Reference. The Input Action to set inject input for.

Value: Vector. The value to set the action to (the type will be controlled by the Action).

Modifiers: Array of Input Modifier Object References. The modifiers to apply to the injected input..

Triggers: Array of Input Trigger Object References. The triggers to apply to the injected input..  

## Outputs

Out: Exec.

