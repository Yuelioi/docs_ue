# SpawnDecalAttached

Spawns a decal attached to and following the specified component. Does not replicate.

Target is Gameplay Statics

## 图示

![]($-20221218-20362218.png)

## Inputs

In: Exec.

Decal Material: Material Interface Object Reference. decal's material.

Decal Size: Vector. size of decal.

Attach to Component: Scene Component Object Reference.

Attach Point Name: Name. Optional named point within the AttachComponent to spawn the emitter at.

Location: Vector. Depending on the value of Location Type this is either a relative offset from the attach component/point or an absolute world position that will be translated to a relative offset.

Rotation: Rotator. Depending on the value of LocationType this is either a relative offset from the attach component/point or an absolute world rotation that will be translated to a realative offset.

Location Type: EAttachLocation Enum. Specifies whether Location is a relative offset or an absolute world position.

Life Span: Float (single-precision). destroy decal component after time runs out (0 = infinite).  

## Outputs

Out: Exec.

Return Value: Decal Component Object Reference.

