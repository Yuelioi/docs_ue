# BreakGameplayCueParameters

Native break, to avoid having to deal with quantized vector types

Target is Ability System Blueprint Library

## 图示

![]($-20221218-17305459.png)

## Inputs

Parameters: Gameplay Cue Parameters Structure (by ref).  

## Outputs

Normalized Magnitude: Float (single-precision).

Raw Magnitude: Float (single-precision).

Effect Context: Gameplay Effect Context Handle Structure.

Matched Tag Name: Gameplay Tag Structure.

Original Tag: Gameplay Tag Structure.

Aggregated Source Tags: Gameplay Tag Container Structure.

Aggregated Target Tags: Gameplay Tag Container Structure.

Location: Vector.

Normal: Vector.

Instigator: Actor Object Reference.

Effect Causer: Actor Object Reference.

Source Object: Object Reference.

Physical Material: Physical Material Object Reference.

Gameplay Effect Level: Integer.

Ability Level: Integer.

Target Attach Component: Scene Component Object Reference.

Replicate Location when Using Minimal Rep Proxy: Boolean.

