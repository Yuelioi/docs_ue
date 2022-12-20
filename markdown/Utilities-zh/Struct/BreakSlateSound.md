# BreakSlateSound

Adds a node that breaks a 'SlateSound' into its member fields

## 图示

![]($-20221218-14424925.png)

## Inputs

Slate Sound: Slate Sound Structure (by ref).  

## Outputs

Sound: Object Reference. Resource Object:. Pointer to the USoundBase. Holding onto it as a UObject because USoundBase is not available in Slate core.. Edited via FSlateSoundStructCustomization to ensure you can only set USoundBase assets on it..

