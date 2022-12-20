# PlayQuantized

Start a sound playing on an audio component on a given quantization boundary with the handle to an existing clock

Target is Audio Component

## 图示

![]($-20221218-18030529.png)

## Inputs

In: Exec.

Target: Audio Component Object Reference.

In Clock Handle: Quartz Clock Handle Object Reference (by ref).

In Quantization Boundary: Quartz Quantization Boundary Structure (by ref).

In Delegate: Delegate (by ref).

In Start Time: Float (single-precision).

In Fade in Duration: Float (single-precision).

In Fade Volume Level: Float (single-precision).

In Fade Curve: EAudioFaderCurve Enum.  

## Outputs

Out: Exec.

