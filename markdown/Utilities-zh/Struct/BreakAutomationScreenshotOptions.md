# BreakAutomationScreenshotOptions

Adds a node that breaks a 'AutomationScreenshotOptions' into its member fields

## 图示

![]($-20221218-14313788.png)

## Inputs

Automation Screenshot Options: Automation Screenshot Options Structure (by ref).  

## Outputs

Resolution: Vector 2D Structure. Resolution:. The desired resolution of the screenshot, if none is provided, it will use the default for the. platform setup in the automation settings..

Delay: Float (single-precision). Delay:. The delay before we take the screenshot..

Override Time To: Float (single-precision). Override Time To:. Overrides World Time, Real Time to the value provided. Sets Delta Time to 0. Only. affects the time being sent to the render thread and materials. The time accumulating. on the game thread is unaffected..

Disable Noisy Rendering Features: Boolean. Disable Noisy Rendering Features:. Disables Anti-Aliasing, Motion Blur, Screen Space Reflections, Eye Adaptation, Tonemapper and Contact. Shadows, because those features contribute a lot to the noise in the final rendered image. If you're. explicitly looking for changes.

Fixed Exposure: Boolean. Disable Tonemapping:. Disables Eye Adaptation and sets Tonemapper to fixed gamma curve. Should generally be on unless. testing tone mapping or other post-processing results.

View Settings: Automation View Settings Object Reference. View Settings:. Assign custom view settings to control which rendering options we allow on while taking the. screenshot..

Visualize Buffer: Name. Visualize Buffer:. Allows you to screenshot a buffer other than the default final lit scene image. Useful if you're. trying to build a test for a specific GBuffer, that may be harder to tell if errors are introduced. in it..

Tolerance: EComparisonTolerance Enum. Tolerance:. These are quick defaults for tolerance levels, we default to low, because generally there's some. constant variability in every pixel's color introduced by TxAA..

Tolerance Amount: Comparison Tolerance Amount Structure. Tolerance Amount:. For each channel and brightness levels you can control a region where the colors are found to be. essentially the same. Generally this is necessary as modern rendering techniques tend to introduce. noise constantly to hide aliasing..

Maximum Local Error: Float (single-precision). Maximum Local Error:. After you've accounted for color tolerance changes, you now need to control for local acceptable error.. Which depending on how pixels were colored on triangle edges may be a few percent of the image being. outside the tolerance levels. Unlike the MaximumGlobalError, the MaximumLocalError works by focusing. on a smaller subset of the image. These chunks will have be compared to the local error, in an attempt. to locate hot spots of change that are important, that would be ignored by the global error..

Maximum Global Error: Float (single-precision). Maximum Global Error:. After you've accounted for color tolerance changes, you now need to control for total acceptable error.. Which depending on how pixels were colored on triangle edges may be a few percent of the image being. outside the tolerance levels..

Ignore Anti Aliasing: Boolean. Ignore Anti Aliasing:. If this is true, we search neighboring pixels looking for the expected pixel as what may have happened, is. that the pixel shifted a little..

Ignore Colors: Boolean. Ignore Colors:. If this is true, all we compare is luminance of the scene..

