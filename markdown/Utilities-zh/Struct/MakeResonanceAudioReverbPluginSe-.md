# MakeResonanceAudioReverbPluginSe-

Adds a node that create a 'ResonanceAudioReverbPluginSettings' from its members

## 图示

![]($-20221218-15000244.png)

## Inputs

Enable Room Effects: Boolean. Enable Room Effects:. Whether Resonance Audio room effects are enabled.

Room Position: Vector. Room Position:. Room position in 3D space.

Room Rotation: Quat Structure. Room Rotation:. Room rotation in 3D space.

Room Dimensions: Vector. Room Dimensions:. Room dimensions in 3D space.

Left Wall Material: ERaMaterialName Enum. Left Wall Material:. Left wall acoustic material.

Right Wall Material: ERaMaterialName Enum. Right Wall Material:. Right wall acoustic material.

Floor Material: ERaMaterialName Enum. Floor Material:. Floor acoustic material.

Ceiling Material: ERaMaterialName Enum. Ceiling Material:. Ceiling acoustic material.

Front Wall Material: ERaMaterialName Enum. Front Wall Material:. Front wall acoustic material.

Back Wall Material: ERaMaterialName Enum. Back Wall Material:. Back wall acoustic material.

Reflection Scalar: Float (single-precision). Reflection Scalar:. Early reflections gain multiplier. Default: 1.0.

Reverb Gain: Float (single-precision). Reverb Gain:. Reverb gain multiplier. Default: 1.0.

Reverb Time Modifier: Float (single-precision). Reverb Time Modifier:. Reverb time modifier. Default: 1.0.

Reverb Brightness: Float (single-precision). Reverb Brightness:. Reverb brightness modifier. Default: 0.0.  

## Outputs

Resonance Audio Reverb Plugin Settings: Resonance Audio Reverb Plugin Settings Structure.

