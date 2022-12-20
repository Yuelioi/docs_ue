# BreakConvolutionBloomSettings

Adds a node that breaks a 'ConvolutionBloomSettings' into its member fields

## 图示

![]($-20221218-14332323.png)

## Inputs

Convolution Bloom Settings: Convolution Bloom Settings Structure (by ref).  

## Outputs

Convolution Kernel: Texture 2D Object Reference. Texture:. Texture to replace default convolution bloom kernel.

Scatter Dispersion: Float (single-precision). Scatter Dispersion:. Intensity multiplier on the scatter dispersion energy of the kernel. 1.0 means exactly use the same energy as the kernel scatter dispersion..

Convolution Scale: Float (single-precision). Size:. Relative size of the convolution kernel image compared to the minor axis of the viewport.

Convolution Center: Vector 2D Structure. Center UV:. The UV location of the center of the kernel. Should be very close to (.5,.5).

Convolution Boost Min: Float (single-precision). Pre Filter Min:. Boost intensity of select pixels prior to computing bloom convolution (Min, Max, Multiplier). Max < Min disables.

Convolution Boost Max: Float (single-precision). Pre Filter Max:. Boost intensity of select pixels prior to computing bloom convolution (Min, Max, Multiplier). Max < Min disables.

Convolution Boost Mult: Float (single-precision). Pre Filter Mult:. Boost intensity of select pixels prior to computing bloom convolution (Min, Max, Multiplier). Max < Min disables.

Convolution Buffer: Float (single-precision). Buffer Scale:. Implicit buffer region as a fraction of the screen size to insure the bloom does not wrap across the screen. Larger sizes have perf impact..

