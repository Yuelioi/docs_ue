# OverrideAnimationData

This overrides current AnimationData parameter in the SkeletalMeshComponent. This will serialize when the component serialize. so it can be used during construction script. However note that this will override current existing data. This can be useful if you'd like to make a blueprint with custom default animation per component. This sets single player mode, which means you can't use AnimBlueprint with it

Target is Skeletal Mesh Component

## 图示

![]($-20221218-18223422.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

In Anim to Play: Animation Asset Object Reference.

Is Looping: Boolean.

Is Playing: Boolean.

Position: Float (single-precision).

Play Rate: Float (single-precision).  

## Outputs

Out: Exec.

