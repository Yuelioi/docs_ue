# BreakLensSettings

Adds a node that breaks a 'LensSettings' into its member fields

## 图示

![]($-20221218-14390270.png)

## Inputs

Lens Settings: Lens Settings Structure (by ref).  

## Outputs

Bloom: Lens Bloom Settings Structure. Bloom.

Imperfections: Lens Imperfection Settings Structure. Imperfections.

Chromatic Aberration: Float (single-precision). Chromatic Aberration:. in percent, Scene chromatic aberration / color fringe (camera imperfection) to simulate an artifact that happens in real-world lens, mostly visible in the image corners..

