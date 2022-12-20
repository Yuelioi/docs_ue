# LoadControlBusMixFromProfile

Loads control bus mix from a profile into UObject mix definition, deserialized from an ini file.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18045669.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference.

Activate: Boolean. If true, activate mix upon loading from profile..

Profile Index: Integer. Index of profile, allowing multiple profiles to be loaded to single mix object. If <= 0, loads from default profile (no suffix)..  

## Outputs

Out: Exec.

Stages: Array of Sound Control Bus Mix Stage Structures. Stages - Stage values loaded from profile (empty if profile did not exist or had no values serialized)..

