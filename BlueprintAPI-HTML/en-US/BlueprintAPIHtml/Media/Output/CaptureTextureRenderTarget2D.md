# CaptureTextureRenderTarget2D

Stop the actual capture if there is one.. Then capture every frame for a TextureRenderTarget2D.. The TextureRenderTarget2D needs to be of the same size and have the same pixel format as requested by the media output.

Target is Media Capture

## 图示

![]($-20221218-20023802.png)

## Inputs

In: Exec.

Target: Media Capture Object Reference.

Render Target: Texture Render Target 2D Object Reference.

Capture Options: Media Capture Options Structure.  

## Outputs

Out: Exec.

Return Value: Boolean. True if the capture was successfully started.

