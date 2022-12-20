# MakeSlateSound

Adds a node that create a 'SlateSound' from its members

## 图示

![]($-20221218-15012799.png)

## Inputs

Sound: Object Reference. Resource Object:. Pointer to the USoundBase. Holding onto it as a UObject because USoundBase is not available in Slate core.. Edited via FSlateSoundStructCustomization to ensure you can only set USoundBase assets on it..  

## Outputs

Slate Sound: Slate Sound Structure.

