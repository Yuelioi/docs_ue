# BindtoAnimationEvent

允许绑定到一个特定的动画的事件。

目标是用户小部件

## 图示

![]($-20221218-17493114.png)

## Inputs

在。执行。

目标。用户小部件对象 参考。

动画。小工具动画对象参考。要听的动画开始或结束。

Delegate（委托）。Delegate.当动画的状态改变时要调用的委托。

Animation Event: 动画事件。EWidgetAnimationEvent Enum.要关注的事件。

User Tag: 用户标签。Name: 名称。委托的范围，只在动画播放时设置了特定标签的动画完成时被调用。 

## Outputs

输出。Exec.

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

