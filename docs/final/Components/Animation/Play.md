# Play

- 这些改变了动画实例的状态，它是瞬时数据，这意味着它不会被这个组件序列化。

- 因为这个原因，在构建脚本中使用它是不安全的。

- 请使用 OverrideAnimationData 来构建脚本。这将覆盖 AnimationData，使其被序列化。

目标是骨架网状结构组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18223540.png)

## Inputs

在。执行。

目标。骨架网状组件对象参考。

循环。布尔值。

## Outputs

输出。执行。

<hr>

- These changes status of animation instance, which is transient data, which means it won't serialize with this component

- Because of that reason, it is not safe to be used during construction script

- Please use OverrideAnimationData for construction script. That will override AnimationData to be serialized

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18223540.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Looping: Boolean.

## Outputs

Out: Exec.
