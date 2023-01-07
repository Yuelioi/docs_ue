# OnComponentBeginOverlap

On Component Begin Overlap:. 当某物开始与该组件重叠时调用的事件，例如玩家走入一个触发器。当物体发生阻挡碰撞时的事件，例如玩家撞到墙，请看'Hit'事件。

这个组件和另一个组件都必须把 GetGenerateOverlapEvents()设置为 "true "才能产生重叠事件。当接收到来自另一个物体的运动的重叠时，'Hit.Normal'和'Hit.ImpactNormal'的方向

的方向将被调整以表示来自其他物体对这个物体的力。

<hr>

On Component Begin Overlap:. Event called when something starts to overlaps this component, for example a player walking into a trigger.. For events when objects have a blocking collision, for example a player hitting a wall, see 'Hit' events.

Both this component and the other one must have GetGenerateOverlapEvents() set to true to generate overlap events.. When receiving an overlap from another object's movement, the directions of 'Hit.Normal' and 'Hit.ImpactNormal'

will be adjusted to indicate force from the other object against this object.
