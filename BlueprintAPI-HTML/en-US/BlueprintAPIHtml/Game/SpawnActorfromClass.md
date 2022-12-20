# SpawnActorfromClass

Attempts to spawn a new Actor with the specified transform

## 图示

![]($-20221218-19074883.png)

## Inputs

In: Exec.

Class: Actor Class Reference. Actor Class Reference Class. The object class you want to construct.

Spawn Transform: Transform. The transform to spawn the Actor with.

Collision Handling Override: ESpawnActorCollisionHandlingMethod Enum. Specifies how to handle collisions at the spawn point. If undefined, uses actor class settings..

Owner: Actor Object Reference. Can be left empty; primarily used for replication (bNetUseOwnerRelevancy and bOnlyRelevantToOwner), or visibility (PrimitiveComponent's bOwnerNoSee/bOnlyOwnerSee).  

## Outputs

Out: Exec.

Return Value: Actor Object Reference. Actor Object Reference Return Value. The constructed object.

