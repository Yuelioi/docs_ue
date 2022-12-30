# ConvertLightComponent

Note: We use FLT_MAX on these functions because Usd.TimeCode.Default().GetValue() is actually a nan, and nan arguments are automatically sanitized to 0.0f.. We manually convert the FLT_MAX value into Usd.TimeCode.Default().GetValue() within the functions though, so if you want the Default timecode just omit the argument. We are also forced to copypaste the FLT_MAX value (3.402823466e+38F) in here as the default arguments are parsed before the preprocessor replaces the defines

Target is Usd Conversion Blueprint Context

## 图示

![]($-20221218-18220947.png)

## Inputs

In: Exec.

Target: Usd Conversion Blueprint Context Object Reference.

Component: Light Component Base Object Reference.

Prim Path: String.

Time Code: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: Boolean. Note: We use FLT_MAX on these functions because Usd.TimeCode.Default().GetValue() is actually a nan, and nan arguments are automatically sanitized to 0.0f.. We manually convert the FLT_MAX value into Usd.TimeCode.Default().GetValue() within the functions though, so if you want the Default timecode just omit the argument. We are also forced to copypaste the FLT_MAX value (3.402823466e+38F) in here as the default arguments are parsed before the preprocessor replaces the defines.

