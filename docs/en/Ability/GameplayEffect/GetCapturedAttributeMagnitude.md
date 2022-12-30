# GetCapturedAttributeMagnitude

Gets the captured magnitude value for the given Attribute. For this to work correctly, the Attribute needs to be added to the Relevant Attributes to Capture array

Target is Gameplay Mod Magnitude Calculation

## 图示

![]($-20221218-17313869.png)

## Inputs

In: Exec.

Target: Gameplay Mod Magnitude Calculation Object Reference.

Effect Spec: Gameplay Effect Spec Structure (by ref). The Gameplay Effect Spec to get the info from.

Attribute: Gameplay Attribute Structure. The attribute to query.

Source Tags: Gameplay Tag Container Structure (by ref).

Target Tags: Gameplay Tag Container Structure (by ref).  

## Outputs

Out: Exec.

Return Value: Float (single-precision). The magnitude value if found, zero otherwise.

