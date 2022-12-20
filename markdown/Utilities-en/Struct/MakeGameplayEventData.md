# MakeGameplayEventData

Adds a node that create a 'GameplayEventData' from its members

## 图示

![]($-20221218-14533816.png)

## Inputs

Event Tag: Gameplay Tag Structure. Event Tag:. Tag of the event that triggered this.

Instigator: Actor Object Reference. Instigator:. The instigator of the event.

Target: Actor Object Reference. Target:. The target of the event.

Optional Object: Object Reference. Optional Object:. An optional ability-specific object to be passed though the event.

Optional Object 2: Object Reference. Optional Object 2:. A second optional ability-specific object to be passed though the event.

Context Handle: Gameplay Effect Context Handle Structure. Context Handle:. Polymorphic context information.

Instigator Tags: Gameplay Tag Container Structure. Instigator Tags:. Tags that the instigator has.

Target Tags: Gameplay Tag Container Structure. Target Tags:. Tags that the target has.

Event Magnitude: Float (single-precision). Event Magnitude:. The magnitude of the triggering event.

Target Data: Gameplay Ability Target Data Handle Structure. Target Data:. The polymorphic target information for the event.  

## Outputs

Gameplay Event Data: Gameplay Event Data Structure.

