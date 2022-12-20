# SetGlobalListenerFocusParameters

Sets the global listener focus parameters, which will scale focus behavior of sounds based on their focus azimuth. settings in their attenuation settings.

  * Fire and Forget.

  * Not Replicated.





Target is Gameplay Statics

## 图示

![]($-20221218-18074559.png)

## Inputs

In: Exec.

Focus Azimuth Scale: Float (single-precision). An angle scale value used to scale the azimuth angle that defines where sounds are in-focus..

Non Focus Azimuth Scale: Float (single-precision).

Focus Distance Scale: Float (single-precision). A distance scale value to use for sounds which are in-focus. Values < 1.0 will reduce perceived distance to sounds, values > 1.0 will increase perceived distance to in-focus sounds..

Non Focus Distance Scale: Float (single-precision). A distance scale value to use for sounds which are out-of-focus. Values < 1.0 will reduce perceived distance to sounds, values > 1.0 will increase perceived distance to in-focus sounds..

Focus Volume Scale: Float (single-precision).

Non Focus Volume Scale: Float (single-precision).

Focus Priority Scale: Float (single-precision). A priority scale value (> 0.0) to use for sounds which are in-focus. Values < 1.0 will reduce the priority of in-focus sounds, values > 1.0 will increase the priority of in-focus sounds..

Non Focus Priority Scale: Float (single-precision). A priority scale value (> 0.0) to use for sounds which are out-of-focus. Values < 1.0 will reduce the priority of sounds out-of-focus sounds, values > 1.0 will increase the priority of out-of-focus sounds..  

## Outputs

Out: Exec.

