# OnComponentHit

组件被击中时：。当一个组件撞到（或被）实体东西撞到时调用的事件。这可能是由于角色移动、使用启用了 "扫描 "的 "设置位置 "或物理模拟而发生的。当物体重叠时的事件（例如，走到一个触发器上），见 "重叠 "事件。

对于物理模拟过程中的碰撞产生的撞击事件，必须为该组件启用 "模拟产生撞击事件"。当从另一个物体的运动中受到撞击时，'Hit.Normal'和'Hit.ImpactNormal'的方向

的方向将被调整，以表示来自其他物体对这个物体的力。

NormalImpulse 对于物理模拟体来说将被填入，但是对于扫过的组件阻挡碰撞来说将是零。

<hr>

On Component Hit:. Event called when a component hits (or is hit by) something solid. This could happen due to things like Character movement, using Set Location with 'sweep' enabled, or physics simulation.. For events when objects overlap (e.g. walking into a trigger) see the 'Overlap' event.

For collisions during physics simulation to generate hit events, 'Simulation Generates Hit Events' must be enabled for this component.. When receiving a hit from another object's movement, the directions of 'Hit.Normal' and 'Hit.ImpactNormal'

will be adjusted to indicate force from the other object against this object.

NormalImpulse will be filled in for physics-simulating bodies, but will be zero for swept-component blocking collisions.
