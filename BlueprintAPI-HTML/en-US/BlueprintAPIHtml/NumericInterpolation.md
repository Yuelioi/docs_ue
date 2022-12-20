# NumericInterpolation

On this page 

  * Actions





## Actions

Interpolate to Value. Starts an ongoing process of interpolating the current numeric value to the specified target value.. The interpolation process may take the specified maximum duration or complete sooner if the minimum change rate causes the target to be reached prematurely.. Optionally, an outro duration can be specified in order to trigger an outro event before interpolation completes.: TargetValue The value to be interpolated to.. MaximumInterpolationDuration The duration, in seconds, for the interpolation to take, at most. Must be greater than 0.. MinimumChangeRate The minimum change in numeric value per second. Must be greater than or equal to 0.. OutroDuration The time offset, in seconds, before the end of the InterpolationDuration elapses, at which to trigger an outro event. Must be less than or equal to MaximumInterpolationDuration: Target is Common Numeric Text Block.

Is Interpolating Numeric Value. Is Interpolating Numeric Value: Target is Common Numeric Text Block.

On Interpolation Ended Event. On Interpolation Ended Event:. Event triggered when interpolation has ended..

On Interpolation Started Event. On Interpolation Started Event:. Event triggered when interpolation has started..

On Interpolation Updated Event. On Interpolation Updated Event:. Event triggered when interpolation has updated..

On Outro Event. On Outro Event:. Event triggered at a specified time before the interpolation completes, for "outro" purposes..

