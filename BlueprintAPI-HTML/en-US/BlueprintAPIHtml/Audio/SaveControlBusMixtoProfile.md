# SaveControlBusMixtoProfile

Saves control bus mix to a profile, serialized to an ini file. If mix is loaded, uses current proxy's state.. If not, uses default UObject representation.

Target is Audio Modulation Statics

## 图示

![]($-20221218-18073908.png)

## Inputs

In: Exec.

Mix: Sound Control Bus Mix Object Reference.

Profile Index: Integer. Index of profile, allowing multiple profiles can be saved for single mix object. If 0, saves to default ini profile (no suffix)..  

## Outputs

Out: Exec.

