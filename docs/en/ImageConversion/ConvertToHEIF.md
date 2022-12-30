# ConvertToHEIF

Converts a image to an array of HEIF data in a background task

Target is Apple Image Utils Base Async Task Blueprint Proxy

## 图示

![]($-20221218-19163925.png)

## Inputs

In: Exec.

Source Image: Texture Object Reference. the image to compress.

Quality: Integer. the quality level to compress to.

Want Color: Boolean. whether the HEIF is color (true) or monochrome (false).

Use Gpu: Boolean. whether to use the GPU (true) or the CPU (false) to compress.

Scale: Float (single-precision). whether to scale the image before conversion, defaults to no scaling.

Rotate: ETextureRotationDirection Enum. a direction to rotate the image in during conversion, defaults to none.  

## Outputs

Out: Exec.

On Success: Exec. On Success.

On Failure: Exec. On Failure.

Conversion Result: Apple Image Utils Image Conversion Result Structure (by ref).

