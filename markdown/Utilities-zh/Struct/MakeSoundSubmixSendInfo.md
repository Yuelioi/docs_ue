# MakeSoundSubmixSendInfo

Adds a node that create a 'SoundSubmixSendInfo' from its members

## 图示

![]($-20221218-15015415.png)

## Inputs

Send Level Control Method: ESendLevelControlMethod Enum. Send Level Control Method:. Manual: Use Send Level only. Linear: Interpolate between Min and Max Send Levels based on listener distance (between Distance Min and Distance Max). Custom Curve: Use the float curve to map Send Level to distance (0.0-1.0 on curve maps to Distance Min - Distance Max).

Send Stage: ESubmixSendStage Enum. Send Stage:. Defines at what mix stage the send should happen..

Sound Submix: Sound Submix Base Object Reference. Sound Submix:. The submix to send the audio to.

Send Level: Float (single-precision). Send Level:. The amount of audio to send.

Disable Manual Send Clamp: Boolean. Disable Manual Send Clamp:. Whether to disable the 0-1 clamp for manual SendLevel control.

Min Send Level: Float (single-precision). Min Send Level:. The amount to send to master when sound is located at a distance equal to value specified in the min send distance..

Max Send Level: Float (single-precision). Max Send Level:. The amount to send to master when sound is located at a distance equal to value specified in the max send distance..

Min Send Distance: Float (single-precision). Min Send Distance:. The min distance to send to the master.

Max Send Distance: Float (single-precision). Max Send Distance:. The max distance to send to the master.

Custom Send Level Curve: Runtime Float Curve Structure. Custom Send Level Curve:. The custom reverb send curve to use for distance-based send level..  

## Outputs

Sound Submix Send Info: Sound Submix Send Info Structure.

