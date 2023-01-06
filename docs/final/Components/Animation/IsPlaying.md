# IsPlaying

  * 这些改变了动画实例的状态，它是瞬时的数据，这意味着它不会被这个组件序列化。

  * 因为这个原因，在构建脚本中使用它是不安全的。

  * 请使用OverrideAnimationData来构建脚本。这将覆盖AnimationData，使其被序列化。





目标是骨架网状结构组件

## 图示

![]($-20221218-18223308.png)

## Inputs

目标。骨骼网状结构组件对象参考。 

## Outputs

返回值。布尔值。这些改变动画实例的状态，是瞬时数据，这意味着它不会被这个组件序列化。由于这个原因，在构建脚本中使用这个数据是不安全的。请使用OverrideAnimationData来构建脚本。这将覆盖AnimationData，使其被序列化。

  * These changes status of animation instance, which is transient data, which means it won't serialize with this component

  * Because of that reason, it is not safe to be used during construction script

  * Please use OverrideAnimationData for construction script. That will override AnimationData to be serialized





Target is Skeletal Mesh Component

## 图示

![]($-20221218-18223308.png)

## Inputs

Target: Skeletal Mesh Component Object Reference.  

## Outputs

Return Value: Boolean. These changes status of animation instance, which is transient data, which means it won't serialize with this component: Because of that reason, it is not safe to be used during construction script: Please use OverrideAnimationData for construction script. That will override AnimationData to be serialized.

