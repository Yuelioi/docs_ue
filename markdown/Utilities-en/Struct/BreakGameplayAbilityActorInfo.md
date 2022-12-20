# BreakGameplayAbilityActorInfo

Adds a node that breaks a 'GameplayAbilityActorInfo' into its member fields

## 图示

![]($-20221218-14362162.png)

## Inputs

Gameplay Ability Actor Info: Gameplay Ability Actor Info Structure (by ref).  

## Outputs

Owner Actor: Actor Weak object. Owner Actor:. The actor that owns the abilities, shouldn't be null.

Avatar Actor: Actor Weak object. Avatar Actor:. The physical representation of the owner, used for targeting and animation. This will often be null!.

Player Controller: Player Controller Weak object. Player Controller:. PlayerController associated with the owning actor. This will often be null!.

Ability System Component: Ability System Component Weak object. Ability System Component:. Ability System component associated with the owner actor, shouldn't be null.

Skeletal Mesh Component: Skeletal Mesh Component Weak object. Skeletal Mesh Component:. Skeletal mesh of the avatar actor. Often null.

Anim Instance: Anim Instance Weak object. Anim Instance:. Anim instance of the avatar actor. Often null.

Movement Component: Movement Component Weak object. Movement Component:. Movement component of the avatar actor. Often null.

Affected Anim Instance Tag: Name. Affected Anim Instance Tag:. The linked Anim Instance that this component will play montages in. Use NAME_None for the main anim instance..

