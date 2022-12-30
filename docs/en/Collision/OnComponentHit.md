# OnComponentHit

On Component Hit:. Event called when a component hits (or is hit by) something solid. This could happen due to things like Character movement, using Set Location with 'sweep' enabled, or physics simulation.. For events when objects overlap (e.g. walking into a trigger) see the 'Overlap' event.

For collisions during physics simulation to generate hit events, 'Simulation Generates Hit Events' must be enabled for this component.. When receiving a hit from another object's movement, the directions of 'Hit.Normal' and 'Hit.ImpactNormal'

will be adjusted to indicate force from the other object against this object.

NormalImpulse will be filled in for physics-simulating bodies, but will be zero for swept-component blocking collisions.

