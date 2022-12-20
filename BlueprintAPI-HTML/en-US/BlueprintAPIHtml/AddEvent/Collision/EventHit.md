# EventHit

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

