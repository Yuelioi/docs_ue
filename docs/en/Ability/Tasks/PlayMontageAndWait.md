# PlayMontageAndWait

Start playing an animation montage on the avatar actor and wait for it to finish. If StopWhenAbilityEnds is true, this montage will be aborted if the ability ends normally. It is always stopped when the ability is explicitly cancelled.. On normal execution, OnBlendOut is called when the montage is blending out, and OnCompleted when it is completely done playing. OnInterrupted is called if another montage overwrites this, and OnCancelled is called if the ability or task is cancelled

Target is Ability Task Play Montage and Wait

## 图示

![]($-20221218-17331219.png)

## Inputs

In: Exec.

Task Instance Name: Name. Set to override the name of this task, for later querying.

Montage to Play: Anim Montage Object Reference. The montage to play on the character.

Rate: Float (single-precision). Change to play the montage faster or slower.

Start Section: Name. If not empty, named montage section to start from.

Stop when Ability Ends: Boolean. If true, this montage will be aborted if the ability ends normally. It is always stopped when the ability is explicitly cancelled.

Anim Root Motion Translation Scale: Float (single-precision). Change to modify size of root motion or set to 0 to block it entirely.

Start Time Seconds: Float (single-precision). Starting time offset in montage, this will be overridden by StartSection if that is also set.  

## Outputs

Out: Exec.

Async Task: Ability Task Play Montage And Wait Object Reference.

On Completed: Exec. On Completed.

On Blend Out: Exec. On Blend Out.

On Interrupted: Exec. On Interrupted.

On Cancelled: Exec. On Cancelled.

