# SpawnActorforGameplayTask

Spawn new Actor on the network authority (server)

Target is Gameplay Task Spawn Actor

## 图示

![]($-20221218-19095934.png)

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

