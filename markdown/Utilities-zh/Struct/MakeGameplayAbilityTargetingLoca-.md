# MakeGameplayAbilityTargetingLoca-

Adds a node that create a 'GameplayAbilityTargetingLocationInfo' from its members

## 图示

![]($-20221218-14531395.png)

## Inputs

Location Type: EGameplayAbilityTargetingLocationType Enum. Location Type:. Type of location used - will determine what data is transmitted over the network and what fields are used when calculating position..

Literal Transform: Transform. Literal Transform:. A literal world transform can be used, if one has been calculated outside of the actor using the ability..

Source Actor: Actor Object Reference. Source Actor:. A source actor is needed for Actor-based targeting, but not for Socket-based targeting..

Source Component: Mesh Component Object Reference. Source Component:. Socket-based targeting requires a skeletal mesh component to check for the named socket..

Source Ability: Gameplay Ability Object Reference. Source Ability:. Ability that will be using the targeting data.

Source Socket Name: Name. Source Socket Name:. If SourceComponent is valid, this is the name of the socket transform that will be used. If no Socket is provided, SourceComponent's transform will be used..  

## Outputs

Gameplay Ability Targeting Location Info: Gameplay Ability Targeting Location Info Structure.

