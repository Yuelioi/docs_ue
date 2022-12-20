# SpawnActor

Spawn new Actor on the network authority (server)

Target is Ability Task Spawn Actor

## 图示

![]($-20221218-17331485.png)

## Inputs

In: Exec.

Target Data: Gameplay Ability Target Data Handle Structure.

Class: Actor Class Reference.  

## Outputs

Out: Exec.

Async Task: Ability Task Spawn Actor Object Reference.

Success: Exec. Success.

Did Not Spawn: Exec. Did Not Spawn:. Called when we can't spawn: on clients or potentially on server if they fail to spawn (rare).

Spawned Actor: Actor Object Reference.

