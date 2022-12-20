# BreakMediaCaptureOptions

Adds a node that breaks a 'MediaCaptureOptions' into its member fields

## 图示

![]($-20221218-14394967.png)

## Inputs

Media Capture Options: Media Capture Options Structure (by ref).  

## Outputs

Crop: EMediaCaptureCroppingType Enum. Crop:. Crop the captured SceneViewport or TextureRenderTarget2D to the desired size..

Custom Capture Point: Int Point Structure. Custom Capture Point:. Crop the captured SceneViewport or TextureRenderTarget2D to the desired size.. @note Only valid when Crop is set to Custom..

Resize Source Buffer: Boolean. Resize Source Buffer:. When the capture start, resize the source buffer to the desired size.. @note Only valid when a size is specified by the MediaOutput.. @note For viewport, the window size will not change. Only the viewport will be resized.. @note For RenderTarget, the asset will be modified and resized to the desired size..

Skip Frame When Running Expensive Tasks: Boolean. Skip Frame when Running Expensive Tasks:. When the application enters responsive mode, skip the frame capture.. The application can enter responsive mode on mouse down, viewport resize, .... That is to ensure responsiveness in low FPS situations..

Convert To Desired Pixel Format: Boolean. Convert to Desired Pixel Format:. Allows to enable/disable pixel format conversion for the cases where render target is not of the desired pixel format..

Force Alpha To One On Conversion: Boolean. Force Alpha to One on Conversion:. In some cases when we want to stream irregular render targets containing limited number. of channels (for example RG16f), we would like to force Alpha to 1..

