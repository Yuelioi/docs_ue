# BreakSourceEffectPannerSettings

Adds a node that breaks a 'SourceEffectPannerSettings' into its member fields

## 图示

![]($-20221218-14433363.png)

## Inputs

Source Effect Panner Settings: Source Effect Panner Settings Structure (by ref).  

## Outputs

Spread: Float (single-precision). Spread:. The spread of the source. 1.0 means left only in left channel, right only in right; 0.0 means both mixed, -1.0 means right and left channels are inverted..

Pan: Float (single-precision). Pan:. The pan of the source. -1.0 means left, 0.0 means center, 1.0 means right..

