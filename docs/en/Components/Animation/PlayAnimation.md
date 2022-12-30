# PlayAnimation

  * These changes status of animation instance, which is transient data, which means it won't serialize with this component

  * Because of that reason, it is not safe to be used during construction script

  * Please use OverrideAnimationData for construction script. That will override AnimationData to be serialized





Target is Skeletal Mesh Component

## 图示

![]($-20221218-18223666.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

New Anim to Play: Animation Asset Object Reference.

Looping: Boolean.  

## Outputs

Out: Exec.

