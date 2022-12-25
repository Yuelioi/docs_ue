# OnComponentBeginOverlap

On Component Begin Overlap:. 当某物开始与该组件重叠时调用的事件，例如玩家走入一个触发器。当物体发生阻挡碰撞时的事件，例如玩家撞到墙，请看'Hit'事件。

这个组件和另一个组件都必须把GetGenerateOverlapEvents()设置为 "true "才能产生重叠事件。当接收到来自另一个物体的运动的重叠时，'Hit.Normal'和'Hit.ImpactNormal'的方向

的方向将被调整以表示来自其他物体对这个物体的力。
