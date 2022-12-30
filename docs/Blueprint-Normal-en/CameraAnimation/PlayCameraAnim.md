# PlayCameraAnim

Play the indicated CameraAnim on this camera.

Target is Player Camera Manager

## 图示

![]($-20221218-18134163.png)

## Inputs

In: Exec.

Target: Player Camera Manager Object Reference.

Anim: Camera Anim Object Reference. The animation that should play on this instance..

Rate: Float (single-precision). How fast to play the animation. 1.0 is normal..

Scale: Float (single-precision). How "intense" to play the animation. 1.0 is normal..

Blend in Time: Float (single-precision). Time to linearly ramp in..

Blend Out Time: Float (single-precision). Time to linearly ramp out..

Loop: Boolean. True to loop the animation if it hits the end..

Random Start Time: Boolean. Whether or not to choose a random time to start playing. Useful with bLoop=true and a duration to randomize things like shakes..

Duration: Float (single-precision). Optional total playtime for this animation, including blends. 0 means to use animations natural duration, or infinite if looping..

Play Space: ECameraShakePlaySpace Enum. Which space to play the animation in..

User Play Space Rot: Rotator. Custom play space, used when PlaySpace is UserDefined..  

## Outputs

Out: Exec.

Return Value: Camera Anim Inst Object Reference. The CameraAnim instance, which can be stored to manipulate/stop the anim after the fact..

