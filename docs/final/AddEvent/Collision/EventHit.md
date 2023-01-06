# EventHit

当这个角色撞到一个阻挡物体，或阻挡另一个撞到它的角色时的事件。这可能是由于角色移动、使用启用了 "清扫 "的 "设置位置 "或物理模拟等因素而发生的。对于物体重叠的事件（例如，走到一个触发器上），请看'重叠'事件。

注意：为了使物理模拟过程中的碰撞产生撞击事件，必须启用 "模拟产生撞击事件"。注意：当从另一个物体的运动中收到撞击时（bSelfMoved是假的），'Hit.Normal'和'Hit.ImpactNormal'的方向将被调整以表示来自另一个物体对这个物体的力。注意：对于物理模拟体来说，NormalImpulse将被填入，但是对于扫荡组件的阻挡碰撞来说，NormalImpulse将为零。

目标是演员

## 图示

![]($-20221218-17450401.png)

## Inputs

## Outputs

输出Delegate。委托。

输出。执行：Exec.

我的组件。原始组件对象参考。

Other: Actor Object Reference（演员对象参考）。

Other Comp: 原始组件对象参考。

Self Moved: 布尔值。

击中位置。向量。

击中法线。向量。

Normal Impulse: 向量。

命中：命中结果结构（通过参考）。

Event when this actor bumps into a blocking object, or blocks another actor that bumps into it.. This could happen due to things like Character movement, using Set Location with 'sweep' enabled, or physics simulation.. For events when objects overlap (e.g. walking into a trigger) see the 'Overlap' event.

Note: For collisions during physics simulation to generate hit events, 'Simulation Generates Hit Events' must be enabled.. Note: When receiving a hit from another object's movement (bSelfMoved is false), the directions of 'Hit.Normal' and 'Hit.ImpactNormal'. will be adjusted to indicate force from the other object against this object.. Note: NormalImpulse will be filled in for physics-simulating bodies, but will be zero for swept-component blocking collisions.

Target is Actor

## 图示

![]($-20221218-17450401.png)

## Inputs

## Outputs

Output Delegate: Delegate.

Out: Exec.

My Comp: Primitive Component Object Reference.

Other: Actor Object Reference.

Other Comp: Primitive Component Object Reference.

Self Moved: Boolean.

Hit Location: Vector.

Hit Normal: Vector.

Normal Impulse: Vector.

Hit: Hit Result Structure (by ref).

