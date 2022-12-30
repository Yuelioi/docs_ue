# SetSoundMixClassOverride

Overrides the sound class adjuster in the given sound mix. If the sound class does not exist in the input sound mix,. the sound class adjuster will be added to the list of active sound mix modifiers.

Target is Gameplay Statics

## 图示

![]($-20221218-18075197.png)

## Inputs

In: Exec.

In Sound Mix Modifier: Sound Mix Object Reference. The sound mix to modify..

In Sound Class: Sound Class Object Reference. The sound class to override (or add) in the sound mix..

Volume: Float (single-precision). The volume scale to set the sound class adjuster to..

Pitch: Float (single-precision). The pitch scale to set the sound class adjuster to..

Fade in Time: Float (single-precision). The interpolation time to use to go from the current sound class adjuster values to the new values..

Apply to Children: Boolean. Whether or not to apply this override to the sound class' children or to just the specified sound class..  

## Outputs

Out: Exec.

