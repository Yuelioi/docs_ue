# BreakGameplayAbilityActorInfo

添加一个节点，将'GameplayAbilityActorInfo'分解成其成员字段

## 图示

![]($-20221218-14362162.png)

## Inputs

Gameplay Ability Actor Info。Gameplay Ability Actor Info结构（通过引用）。 

## Outputs

所有者角色。行为者弱化对象。Owner Actor：。拥有能力的演员，不应该是空的。

Avatar Actor: Actor 弱化的对象。头像演员：。拥有者的物理表现，用于瞄准和动画。这通常会是空的！。

播放器控制器。播放器控制器弱化对象。播放器控制器：。与拥有的角色相关的播放器控制器。这通常会是空的！。

Ability System Component：能力系统组件。能力系统组件 弱对象。Ability System Component:.能力系统组件。与所有者角色相关的能力系统组件，不应该是空的。

Skeletal Mesh Component: Skeletal Mesh Component 弱对象。骨架网状结构组件：。头像角色的骨骼网格。通常为空。

Anim Instance: Anim Instance 弱的对象。Anim Instance:.动画实例。头像演员的动画实例。通常为空。

Movement Component: 运动组件。运动组件 弱对象。Movement Component:.运动组件。头像角色的运动组件。通常为空。

Affected Anim Instance Tag: 名称。Affected Anim Instance Tag:（受影响的动画实例标签）。链接的动画实例，这个组件将在其中播放蒙太奇。对主要的动画实例使用NAME_NONE。