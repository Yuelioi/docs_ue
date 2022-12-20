# AddLoadingScreenSplash

Adds a splash element to the loading screen.

Target is XRLoading Screen Function Library

## 图示

![]($-20221218-19240087.png)

## Inputs

In: Exec.

Texture: Texture Object Reference. (in) A texture asset to be used for the splash..

Translation: Vector. (in) Initial translation of the center of the splash..

Rotation: Rotator. (in) Initial rotation of the splash screen, with the origin at the center of the splash..

Size: Vector 2D Structure. (in) Size, of the quad with the splash screen..

Delta Rotation: Rotator. (in) Incremental rotation, that is added each 2nd frame to the quad transform. The quad is rotated around the center of the quad..

Clear Before Add: Boolean. (in) If true, clears splashes before adding a new one..  

## Outputs

Out: Exec.

