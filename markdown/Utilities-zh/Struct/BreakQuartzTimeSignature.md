# BreakQuartzTimeSignature

Adds a node that breaks a 'QuartzTimeSignature' into its member fields

## 图示

![]($-20221218-14413550.png)

## Inputs

Quartz Time Signature: Quartz Time Signature Structure (by ref).  

## Outputs

Num Beats: Integer. Num Beats:. numerator.

Beat Type: EQuartzTimeSignatureQuantization Enum. Beat Type:. denominator.

Optional Pulse Override: Array of Quartz Pulse Override Step Structures. Optional Pulse Override:. beat override.

