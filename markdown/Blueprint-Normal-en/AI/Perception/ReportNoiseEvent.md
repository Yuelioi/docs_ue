# ReportNoiseEvent

Report a noise event.

Target is AISense Hearing

## 图示

![]($-20221218-17482097.png)

## Inputs

In: Exec.

Noise Location: Vector. Location of the noise..

Loudness: Float (single-precision). Loudness of the noise. If MaxRange is non-zero, modifies MaxRange, otherwise modifies the squared distance of the sensor's range..

Instigator: Actor Object Reference. Actor that triggered the noise..

Max Range: Float (single-precision). Max range at which the sound can be heard, multiplied by Loudness. Values <= 0 mean no limit (still limited by listener's range however)..

Tag: Name. Identifier for the event..  

## Outputs

Out: Exec.

