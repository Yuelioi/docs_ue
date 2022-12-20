# BreakTapDelayInfo

Adds a node that breaks a 'TapDelayInfo' into its member fields

## 图示

![]($-20221218-14442162.png)

## Inputs

Tap Delay Info: Tap Delay Info Structure (by ref).  

## Outputs

Tap Line Mode: ETapLineMode Enum. Tap Line Mode:. Whether the tap line should send directly to a channel, pan, or not produce sound at all..

Delay Length: Float (single-precision). Delay Length:. Amount of time before this echo is heard in milliseconds..

Gain: Float (single-precision). Gain:. How loud this echo should be, in decibels..

Output Channel: Integer. Output Channel:. When the Tap Line Mode is set to Send To Channel, designates index of channel from which the echo should play..

Pan In Degrees: Float (single-precision). Pan in Degrees:. When the Tap Line Mode is set to Panning, designates the angle at which the echo should be panned.. On Surround systems, 0 is directly in front of the listener, -90 is left, 90 is right, and 180/-180 is directly behind the listener.. On Stereo systems, <-90 is fully in the left ear, and >90 is fully in the right ear.

