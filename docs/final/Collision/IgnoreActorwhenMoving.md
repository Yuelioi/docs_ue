# IgnoreActorwhenMoving

告诉这个组件，当这个组件移动时，是否忽略与特定角色的所有组件的碰撞。另一个角色上的组件在移动时可能也需要被告知做同样的事情。在模拟物理时不影响该组件的移动。

目标是原始组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18190772.png)

## Inputs

在。执行。

目标。原始组件对象参考。

行为者。Actor Object Reference（演员对象参考）。

应该忽略。Boolean（布尔）。

## Outputs

输出。执行：执行。

<hr>

Tells this component whether to ignore collision with all components of a specific Actor when this component is moved.. Components on the other Actor may also need to be told to do the same when they move.. Does not affect movement of this component when simulating physics.

Target is Primitive Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18190772.png)

## Inputs

In: Exec.

Target: Primitive Component Object Reference.

Actor: Actor Object Reference.

Should Ignore: Boolean.

## Outputs

Out: Exec.
