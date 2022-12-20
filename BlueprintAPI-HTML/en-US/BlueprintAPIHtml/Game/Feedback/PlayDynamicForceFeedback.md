# PlayDynamicForceFeedback

Latent action that controls the playing of force feedback. Begins playing when Start is called. Calling Update or Stop if the feedback is not active will have no effect.. Completed will execute when Stop is called or the duration ends.. When Update is called the Intensity, Duration, and affect values will be updated with the current inputs

Target is Player Controller

## 图示

![]($-20221218-19054852.png)

## Inputs

Start: Exec.

Update: Exec.

Stop: Exec.

Target: Player Controller Object Reference.

Intensity: Float (single-precision). How strong the feedback should be. Valid values are between 0.0 and 1.0.

Duration: Float (single-precision). How long the feedback should play for. If the value is negative it will play until stopped.

Affects Left Large: Boolean. Whether the intensity should be applied to the large left servo.

Affects Left Small: Boolean. Whether the intensity should be applied to the small left servo.

Affects Right Large: Boolean. Whether the intensity should be applied to the large right servo.

Affects Right Small: Boolean. Whether the intensity should be applied to the small right servo.  

## Outputs

Completed: Exec.

