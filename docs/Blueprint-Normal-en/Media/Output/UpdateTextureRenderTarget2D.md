# UpdateTextureRenderTarget2D

Update the current capture with every frame for a TextureRenderTarget2D.. The TextureRenderTarget2D needs to be of the same size and have the same pixel format as requested by the media output.

Target is Media Capture

## 图示

![]($-20221218-20024691.png)

## Inputs

In: Exec.

Target: Media Capture Object Reference.

Render Target: Texture Render Target 2D Object Reference.  

## Outputs

Out: Exec.

Return Value: Boolean. Return true if the capture was successfully updated. If false is returned, the capture was stopped..

