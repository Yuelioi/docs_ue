# BreakInputActionInstance

Adds a node that breaks a 'InputActionInstance' into its member fields

## 图示

![]($-20221218-14382126.png)

## Inputs

Input Action Instance: Input Action Instance Structure (by ref).  

## Outputs

Source Action: Input Action Object Reference. Source Action:. The source action that this instance is created from.

Triggers: Array of Input Trigger Object References. Triggers:. TODO: Just hold a duplicate of the UInputAction in here?. TODO: Restrict blueprint access to triggers and modifiers?.

Modifiers: Array of Input Modifier Object References. Modifiers.

Elapsed Processed Time: Float (single-precision). Elapsed Processed Time:. Total trigger processing/evaluation time (How long this action has been in event Started, Ongoing, or Triggered.

Elapsed Triggered Time: Float (single-precision). Elapsed Triggered Time:. Triggered time (How long this action has been in event Triggered only).

Last Triggered World Time: Float (single-precision). Last Triggered World Time:. The last time that this evaluated to a Triggered State.

Trigger Event: ETriggerEvent Enum. Trigger Event:. Trigger state.

