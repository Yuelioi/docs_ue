# GetSetbyCallerMagnitudebyTag

Extracts the Set by Caller Magnitude from a Gameplay Effect Spec

Target is Gameplay Mod Magnitude Calculation

## 图示

![]($-20221218-17314626.png)

## Inputs

In: Exec.

Target: Gameplay Mod Magnitude Calculation Object Reference.

Effect Spec: Gameplay Effect Spec Structure (by ref). The Gameplay Effect Spec to get the info from.

Tag: Gameplay Tag Structure (by ref). The effect tag to query.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). The magnitude value if found, zero otherwise.

