# SpawnEmitteratLocation

Plays the specified effect at the given location and rotation, fire and forget. The system will go away when the effect is complete. Does not replicate.

Target is Gameplay Statics

## 图示

![]($-20221218-18551207.png)

## Inputs

In: Exec.

Emitter Template: Particle System Object Reference. particle system to create.

Location: Vector. location to place the effect in world space.

Rotation: Rotator. rotation to place the effect in world space.

Scale: Vector. scale to create the effect at.

Auto Destroy: Boolean. Whether the component will automatically be destroyed when the particle system completes playing or whether it can be reactivated.

Pooling Method: EPSCPoolMethod Enum. Method used for pooling this component. Defaults to none..

Auto Activate System: Boolean.  

## Outputs

Out: Exec.

Return Value: Particle System Component Object Reference.

