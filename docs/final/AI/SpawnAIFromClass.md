# SpawnAIFromClass

生成指定类别的AI代理。PawnClass需要有AIController.设置，以便该函数也能生成一个控制器。

目标是AIBlueprint Helper Library

## 图示

![]($-20221218-17483691.png)

## Inputs

在。执行。

卒类。卒类参考。

行为树。Behavior Tree Object Reference.如果设置了，并且该函数已经成功地生成了AI控制器，这个BehaviorTree资产将被分配给AI控制器，并运行。

位置。矢量。

Rotation（旋转）。旋转器。

No Collision Fail: Boolean.

Owner: Actor Object Reference.让你在子层中生成AI，而不是在持久层中（这是默认行为）。 

## Outputs

输出。执行：执行。

返回值。卒子对象参考。

Spawns AI agent of a given class. The PawnClass needs to have AIController. set for the function to spawn a controller as well.

Target is AIBlueprint Helper Library

## 图示

![]($-20221218-17483691.png)

## Inputs

In: Exec.

Pawn Class: Pawn Class Reference.

Behavior Tree: Behavior Tree Object Reference. if set, and the function has successfully spawned and AI controller, this BehaviorTree asset will be assigned to the AI controller, and run..

Location: Vector.

Rotation: Rotator.

No Collision Fail: Boolean.

Owner: Actor Object Reference. lets you spawn the AI in a sublevel rather than in the persistent level (which is the default behavior)..  

## Outputs

Out: Exec.

Return Value: Pawn Object Reference.

