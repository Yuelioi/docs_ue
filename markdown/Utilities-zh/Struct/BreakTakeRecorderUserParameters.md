# BreakTakeRecorderUserParameters

Adds a node that breaks a 'TakeRecorderUserParameters' into its member fields

## 图示

![]($-20221218-14442074.png)

## Inputs

Take Recorder User Parameters: Take Recorder User Parameters Structure (by ref).  

## Outputs

Maximize Viewport: Boolean. Maximize Viewport:. Whether to maximize the viewport (enter Immersive Mode) when recording.

Countdown: Float (single-precision). Countdown Seconds:. Delay that we will use before starting recording.

Engine Time Dilation: Float (single-precision). Engine Time Dilation:. The engine time dilation to apply during the recording.

Stop At Playback End: Boolean. Stop at Playback End:. Automatically stop recording when reaching the end of the playback range.

Remove Redundant Tracks: Boolean. Remove Redundant Tracks:. Recommended for use with recorded spawnables. Beware that changes to actor instances in the map after recording may alter the recording when played back.

Reduce Keys Tolerance: Float (single-precision). Reduce Keys Tolerance:. Tolerance to use when reducing keys.

Save Recorded Assets: Boolean. Save Recorded Assets:. Whether to save recorded level sequences and assets when done recording.

Auto Lock: Boolean. Auto Lock:. Whether to lock the level sequence when done recording.

Auto Serialize: Boolean. Auto Serialize:. Whether to incrementally serialize and store some data while recording.

