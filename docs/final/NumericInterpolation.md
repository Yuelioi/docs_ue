# NumericInterpolation

在这个页面上 

  *行动





## Actions

内插值。启动一个持续的过程，将当前的数值插值到指定的目标值。插值过程可能需要指定的最大持续时间，或者在最小变化率导致过早达到目标值的情况下更快完成。可以选择指定一个中断时间，以便在插值完成之前触发一个中断事件。目标值 要插值的值。最大插值持续时间 插值最多需要的持续时间（秒）。必须大于0。 MinimumChangeRate（最小变化率） 每秒数值的最小变化。必须大于或等于0。 OutroDuration 在插值持续时间结束前的时间偏移，以秒为单位，在该时间段触发一个中断事件。必须小于或等于MaximumInterpolationDuration。目标是普通数字文本块。

是插值的数值。是插值的数值。目标是普通数字文本块。

在插值结束事件中。在插值结束事件中：。当插值结束时触发的事件。

在插值开始事件中。在插值开始事件中：。当插值开始时触发的事件。

内插更新事件。在插值更新事件中：。当插值更新时触发的事件。

在 "结束事件 "中。Outro事件：。在插值完成前的指定时间触发的事件，用于 "outro "目的。

On this page 

  * Actions





## Actions

Interpolate to Value. Starts an ongoing process of interpolating the current numeric value to the specified target value.. The interpolation process may take the specified maximum duration or complete sooner if the minimum change rate causes the target to be reached prematurely.. Optionally, an outro duration can be specified in order to trigger an outro event before interpolation completes.: TargetValue The value to be interpolated to.. MaximumInterpolationDuration The duration, in seconds, for the interpolation to take, at most. Must be greater than 0.. MinimumChangeRate The minimum change in numeric value per second. Must be greater than or equal to 0.. OutroDuration The time offset, in seconds, before the end of the InterpolationDuration elapses, at which to trigger an outro event. Must be less than or equal to MaximumInterpolationDuration: Target is Common Numeric Text Block.

Is Interpolating Numeric Value. Is Interpolating Numeric Value: Target is Common Numeric Text Block.

On Interpolation Ended Event. On Interpolation Ended Event:. Event triggered when interpolation has ended..

On Interpolation Started Event. On Interpolation Started Event:. Event triggered when interpolation has started..

On Interpolation Updated Event. On Interpolation Updated Event:. Event triggered when interpolation has updated..

On Outro Event. On Outro Event:. Event triggered at a specified time before the interpolation completes, for "outro" purposes..

