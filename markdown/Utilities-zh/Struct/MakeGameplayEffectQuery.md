# MakeGameplayEffectQuery

Adds a node that create a 'GameplayEffectQuery' from its members

## 图示

![]($-20221218-14533470.png)

## Inputs

Custom Match Delegate BP: Delegate. Custom Match Delegate BP:. BP-exposed delegate for providing custom matching conditions..

Owning Tag Query: Gameplay Tag Query Structure. Owning Tag Query:. Query that is matched against tags this GE gives.

Effect Tag Query: Gameplay Tag Query Structure. Effect Tag Query:. Query that is matched against tags this GE has.

Source Tag Query: Gameplay Tag Query Structure. Source Tag Query:. Query that is matched against tags the source of this GE has.

Modifying Attribute: Gameplay Attribute Structure. Modifying Attribute:. Matches on GameplayEffects which modify given attribute..

Effect Source: Object Reference. Effect Source:. Matches on GameplayEffects which come from this source.

Effect Definition: Gameplay Effect Class Reference. Effect Definition:. Matches on GameplayEffects with this definition.  

## Outputs

Gameplay Effect Query: Gameplay Effect Query Structure.

