# SpawnEmitterAttached

Plays the specified effect attached to and following the specified component. The system will go away when the effect is complete. Does not replicate.

Target is Gameplay Statics

## 图示

![]($-20221218-18551342.png)

## Inputs

In: Exec.

Emitter Template: Particle System Object Reference. particle system to create.

Attach to Component: Scene Component Object Reference.

Attach Point Name: Name. Optional named point within the AttachComponent to spawn the emitter at.

Location: Vector. Depending on the value of LocationType this is either a relative offset from the attach component/point or an absolute world location that will be translated to a relative offset (if LocationType is KeepWorldPosition)..

Rotation: Rotator. Depending on the value of LocationType this is either a relative offset from the attach component/point or an absolute world rotation that will be translated to a relative offset (if LocationType is KeepWorldPosition)..

Scale: Vector. Depending on the value of LocationType this is either a relative scale from the attach component or an absolute world scale that will be translated to a relative scale (if LocationType is KeepWorldPosition)..

Location Type: EAttachLocation Enum. Specifies whether Location is a relative offset or an absolute world position.

Auto Destroy: Boolean. Whether the component will automatically be destroyed when the particle system completes playing or whether it can be reactivated.

Pooling Method: EPSCPoolMethod Enum. Method used for pooling this component. Defaults to none..

Auto Activate: Boolean. Whether the component will be automatically activated on creation..  

## Outputs

Out: Exec.

Return Value: Particle System Component Object Reference.

