# BreakSoundConcurrencySettings

Adds a node that breaks a 'SoundConcurrencySettings' into its member fields

## 图示

![]($-20221218-14430183.png)

## Inputs

Sound Concurrency Settings: Sound Concurrency Settings Structure (by ref).  

## Outputs

Max Count: Integer. Max Count:. The max number of allowable concurrent active voices for voices playing in this concurrency group..

Limit To Owner: Boolean. Limit to Owner:. Whether or not to limit the concurrency to per sound owner (i.e. the actor that plays the sound). If the sound doesn't have an owner, it falls back to global concurrency..

Resolution Rule: EMaxConcurrentResolutionRule Enum. Resolution Rule:. Which concurrency resolution policy to use if max voice count is reached..

Retrigger Time: Float (single-precision). Retrigger Time:. Amount of time to wait (in seconds) between different sounds which play with this concurrency. Sounds rejected from this will ignore virtualization settings..

Duck Time: Float (single-precision). Volume Scale Attack Time:. Time taken to apply duck using volume scalar..

Can Recover: Boolean. Volume Scale Can Release:. Whether or not volume scaling can recover volume ducking behavior when concurrency group sounds stop (default scale mode only)..

Recover Time: Float (single-precision). Volume Scale Release Time:. Time taken to recover volume scalar duck..

Voice Steal Release Time: Float (single-precision). Voice Steal Release Time:. Time taken to fade out if voice is evicted or culled due to another voice in the group starting..

