# SpawnActorforGameplayTask

在网络当局（服务器）上生成新的 "演员"。

目标是游戏性任务再生演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-19095934.png)

## Inputs

在。执行。

任务负责人：游戏性任务负责人界面界面。

产卵地点。向量。

产卵旋转：旋转器。

类。演员类参考。

只在权威机构产卵。布尔值。

## Outputs

出：执行。

异步任务。Gameplay Task Spawn Actor Object Reference.

成功。执行。成功

没有产卵。执行。Did Not Spawn:.当我们不能生成时被调用：在客户端或潜在的服务器上，如果他们不能生成（罕见）。

生成的演员。Actor Object Reference.

<hr>

Spawn new Actor on the network authority (server)

Target is Gameplay Task Spawn Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-19095934.png)

## Inputs

In: Exec.

Task Owner: Gameplay Task Owner Interface Interface.

Spawn Location: Vector.

Spawn Rotation: Rotator.

Class: Actor Class Reference.

Spawn Only on Authority: Boolean.

## Outputs

Out: Exec.

Async Task: Gameplay Task Spawn Actor Object Reference.

Success: Exec. Success.

Did Not Spawn: Exec. Did Not Spawn:. Called when we can't spawn: on clients or potentially on server if they fail to spawn (rare).

Spawned Actor: Actor Object Reference.
