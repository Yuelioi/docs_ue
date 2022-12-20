# BreakQuartzQuantizationBoundary

Adds a node that breaks a 'QuartzQuantizationBoundary' into its member fields

## 图示

![]($-20221218-14413462.png)

## Inputs

Quartz Quantization Boundary: Quartz Quantization Boundary Structure (by ref).  

## Outputs

Quantization: EQuartzCommandQuantization Enum. Quantization:. resolution we are interested in.

Multiplier: Float (single-precision). Multiplier:. how many "Resolutions" to wait before the onset we care about.

Counting Reference Point: EQuarztQuantizationReference Enum. Counting Reference Point.

Fire On Clock Start: Boolean. Fire on Clock Start:. If this is true and the Clock hasn't started yet, the event will fire immediately when the Clock starts.

Cancel Command If Clock Is Not Running: Boolean. Cancel Command if Clock Is Not Running:. If this is true, this command will be canceled if the Clock is stopped or otherwise not running.

Reset Clock On Queued: Boolean. Reset Clock on Queued:. If this is true, queueing the sound will also call a Reset Clock command.

Resume Clock On Queued: Boolean. Resume Clock on Queued:. If this is true, queueing the sound will also call a Resume Clock command.

