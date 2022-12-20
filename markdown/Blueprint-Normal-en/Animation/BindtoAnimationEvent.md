# BindtoAnimationEvent

Allows binding to a specific animation's event.

Target is User Widget

## 图示

![]($-20221218-17493114.png)

## Inputs

In: Exec.

Target: User Widget Object Reference.

Animation: Widget Animation Object Reference. the animation to listen for starting or finishing..

Delegate: Delegate. the delegate to call when the animation's state changes.

Animation Event: EWidgetAnimationEvent Enum. the event to watch for..

User Tag: Name. Scopes the delegate to only be called when the animation completes with a specific tag set on it when it was played..  

## Outputs

Out: Exec.

