# MakeSoundAttenuationSettings

Adds a node that create a 'SoundAttenuationSettings' from its members

## 图示

![]($-20221218-15014013.png)

## Inputs

Enable Volume Attenuation: Boolean. Attenuate:. Allows distance-based volume attenuation..

Enable Spatialization: Boolean. Spatialize:. Allows the source to be 3D spatialized..

Enable Air Absorption: Boolean. Attenuate with LPF:. Allows simulation of air absorption by applying a filter with a cutoff frequency as a function of distance..

Enable Listener Focus: Boolean. Enable Listener Focus:. Enable listener focus-based adjustments..

Enable Focus Interpolation: Boolean. Enable Focus Interpolation:. Enables focus interpolation to smooth transition in and and of focus..

Enable Occlusion: Boolean. Enable Occlusion:. Enables realtime occlusion tracing..

Use Complex Collision For Occlusion: Boolean. Use Complex Collision for Occlusion:. Enables tracing against complex collision when doing occlusion traces..

Enable Reverb Send: Boolean. Enable Reverb Send:. Enables adjusting reverb sends based on distance..

Enable Priority Attenuation: Boolean. Enable Priority Attenuation:. Enables attenuation of sound priority based off distance..

Normalize 3D Stereo Sounds: Boolean. Apply Normalization to Stereo Sounds:. Enables applying a -6 dB attenuation to stereo assets which are 3d spatialized. Avoids clipping when assets have spread of 0.0 due to channel summing..

Enable Log Frequency Scaling: Boolean. Enable Log Frequency Scaling:. Enables applying a log scale to frequency values (so frequency sweeping is perceptually linear)..

Enable Submix Send: Boolean. Enable Submix Sends:. Enables submix sends based on distance..

Enable Source Data Override: Boolean. Enable Source Data Override:. Enables overriding WaveInstance data using source data override plugin.

Spatialization Method: ESoundSpatializationAlgorithm Enum. Spatialization Algorithm:. What method we use to spatialize the sound..

Binaural Radius: Float (single-precision). Binaural Radius:. What min radius to use to swap to non-binaural audio when a sound starts playing..

Absorption Method: EAirAbsorptionMethod Enum. Absorption Method:. What method to use to map distance values to frequency absorption values..

Occlusion Trace Channel: ECollisionChannel Enum. Occlusion Trace Channel:. Which trace channel to use for audio occlusion checks..

Reverb Send Method: EReverbSendMethod Enum. Reverb Send Method:. What method to use to control master reverb sends.

Priority Attenuation Method: EPriorityAttenuationMethod Enum. Priority Attenuation Method:. What method to use to control priority attenuation.

Non- Spatialized Radius: Float (single-precision). Omni Radius:. The distance below which a sound is non-spatialized (2D). This prevents near-field audio from flipping as audio crosses the listener's position. This does not apply when using a 3rd party binaural plugin (audio will remain spatialized)..

3D Stereo Spread: Float (single-precision). Stereo Spread:. The world-space distance between left and right stereo channels when stereo assets are 3D spatialized..

Min Distance Range: Float (single-precision). LPFRadius Min:. The distance min range at which to apply an absorption LPF filter..

Max Distance Range: Float (single-precision). LPFRadius Max:. The max distance range at which to apply an absorption LPF filter. Absorption freq cutoff interpolates between filter frequency ranges between these distance values..

Custom Lowpass Air Absorption Curve: Runtime Float Curve Structure. Custom Lowpass Air Absorption Curve:. The normalized custom curve to use for the air absorption lowpass frequency values. Does a mapping from defined distance values (x-axis) and defined frequency values (y-axis).

Custom Highpass Air Absorption Curve: Runtime Float Curve Structure. Custom Highpass Air Absorption Curve:. The normalized custom curve to use for the air absorption highpass frequency values. Does a mapping from defined distance values (x-axis) and defined frequency values (y-axis).

Low Pass Cutoff Frequency Min: Float (single-precision). LPFFrequency at Min:. The range of the cutoff frequency (in Hz) of the lowpass absorption filter..

Low Pass Cutoff Frequency Max: Float (single-precision). LPFFrequency at Max:. The range of the cutoff frequency (in Hz) of the lowpass absorption filter..

High Pass Cutoff Frequency Min: Float (single-precision). HPFFrequency at Min:. The range of the cutoff frequency (in Hz) of the highpass absorption filter..

High Pass Cutoff Frequency Max: Float (single-precision). HPFFrequency at Max:. The range of the cutoff frequency (in Hz) of the highpass absorption filter..

Focus Azimuth: Float (single-precision). Focus Azimuth:. Azimuth angle (in degrees) relative to the listener forward vector which defines the focus region of sounds. Sounds playing at an angle less than this will be in focus..

Non Focus Azimuth: Float (single-precision). Non Focus Azimuth:. Azimuth angle (in degrees) relative to the listener forward vector which defines the non-focus region of sounds. Sounds playing at an angle greater than this will be out of focus..

Focus Distance Scale: Float (single-precision). Focus Distance Scale:. Amount to scale the distance calculation of sounds that are in-focus. Can be used to make in-focus sounds appear to be closer or further away than they actually are..

Non Focus Distance Scale: Float (single-precision). Non Focus Distance Scale:. Amount to scale the distance calculation of sounds that are not in-focus. Can be used to make in-focus sounds appear to be closer or further away than they actually are..

Focus Priority Scale: Float (single-precision). Focus Priority Scale:. Amount to scale the priority of sounds that are in focus. Can be used to boost the priority of sounds that are in focus..

Non Focus Priority Scale: Float (single-precision). Non Focus Priority Scale:. Amount to scale the priority of sounds that are not in-focus. Can be used to reduce the priority of sounds that are not in focus..

Focus Volume Attenuation: Float (single-precision). Focus Volume Attenuation:. Amount to attenuate sounds that are in focus. Can be overridden at the sound-level..

Non Focus Volume Attenuation: Float (single-precision). Non Focus Volume Attenuation:. Amount to attenuate sounds that are not in focus. Can be overridden at the sound-level..

Focus Attack Interp Speed: Float (single-precision). Focus Attack Interp Speed:. Scalar used to increase interpolation speed upwards to the target Focus value.

Focus Release Interp Speed: Float (single-precision). Focus Release Interp Speed:. Scalar used to increase interpolation speed downwards to the target Focus value.

Occlusion Low Pass Filter Frequency: Float (single-precision). Occlusion Low Pass Filter Frequency:. The low pass filter frequency (in Hz) to apply if the sound playing in this audio component is occluded. This will override the frequency set in LowPassFilterFrequency. A frequency of 0.0 is the device sample rate and will bypass the filter..

Occlusion Volume Attenuation: Float (single-precision). Occlusion Volume Attenuation:. The amount of volume attenuation to apply to sounds which are occluded..

Occlusion Interpolation Time: Float (single-precision). Occlusion Interpolation Time:. The amount of time in seconds to interpolate to the target OcclusionLowPassFilterFrequency when a sound is occluded..

Reverb Min Send Level: Float (single-precision). Reverb Wet Level Min:. The amount to send to master reverb when sound is located at a distance equal to value specified in the reverb min send distance..

Reverb Max Send Level: Float (single-precision). Reverb Wet Level Max:. The amount to send to master reverb when sound is located at a distance equal to value specified in the reverb max send distance..

Reverb Min Send Distance: Float (single-precision). Reverb Distance Min:. The min distance to send to the master reverb..

Reverb Max Send Distance: Float (single-precision). Reverb Distance Max:. The max distance to send to the master reverb..

Manual Reverb Send Level: Float (single-precision). Manual Reverb Send Level:. The manual master reverb send level to use. Doesn't change as a function of distance..

Custom Reverb Send Curve: Runtime Float Curve Structure. Custom Reverb Send Curve:. The custom reverb send curve to use for distance-based send level..

Submix Send Settings: Array of Attenuation Submix Send Settings Structures. Submix Send Settings:. Set of submix send settings to use to send audio to submixes as a function of distance..

Priority Attenuation at Min Distance: Float (single-precision). Priority Attenuation Min:. Interpolated value to scale priority against when the sound is at the minimum priority attenuation distance from the closest listener..

Priority Attenuation at Max Distance: Float (single-precision). Priority Attenuation Max:. Interpolated value to scale priority against when the sound is at the maximum priority attenuation distance from the closest listener..

Priority Attenuation Min Distance: Float (single-precision). Priority Attenuation Distance Min:. The min distance to attenuate priority..

Priority Attenuation Max Distance: Float (single-precision). Priority Attenuation Distance Max:. The max distance to attenuate priority..

Attenuation Priority: Float (single-precision). Manual Priority Attenuation:. Static priority scalar to use (doesn't change as a function of distance)..

Custom Priority Attenuation Curve: Runtime Float Curve Structure. Custom Priority Attenuation Curve:. The custom curve to use for distance-based priority attenuation..

Plugin Settings: Sound Attenuation Plugin Settings Structure. Plugin Settings:. Sound attenuation plugin settings to use with sounds that play with this attenuation setting..

Attenuation Function: EAttenuationDistanceModel Enum. Distance Algorithm:. The type of attenuation as a function of distance to use..

Attenuation Shape: EAttenuationShape Enum. Attenuation Shape:. The shape of the non-custom attenuation method..

Attenuation at Max (D B): Float (single-precision). D BAttenuation at Max:. The attenuation volume at the falloff distance in decibels (Only for 'Natural Sound' Distance Algorithm)..

Falloff Mode: ENaturalSoundFalloffMode Enum. Falloff Mode:. Whether to continue attenuating, go silent, or hold last volume value when beyond falloff bounds and. 'Attenuation At Max (dB)' is set to a value greater than -60dB.. (Only for 'Natural Sound' Distance Algorithm). */.

Attenuation Shape Extents: Vector. Attenuation Shape Extents:. The dimensions to use for the attenuation shape. Interpretation of the values differ per shape.. Sphere - X is Sphere Radius. Y and Z are unused. Capsule - X is Capsule Half Height, Y is Capsule Radius, Z is unused. Box - X, Y, and Z are the Box's dimensions. Cone - X is Cone Radius, Y is Cone Angle, Z is Cone Falloff Angle.

Cone Offset: Float (single-precision). Cone Offset:. The distance back from the sound's origin to begin the cone when using the cone attenuation shape..

Falloff Distance: Float (single-precision). Falloff Distance:. The distance over which volume attenuation occurs..

Cone Sphere Radius: Float (single-precision). Cone Sphere Radius:. An optional attenuation radius (sphere) that extends from the cone origin..

Cone Sphere Falloff Distance: Float (single-precision). Cone Sphere Falloff Distance:. The distance over which volume attenuation occurs for the optional sphere shape..

Custom Attenuation Curve: Runtime Float Curve Structure. Custom Attenuation Curve:. The custom volume attenuation curve to use..  

## Outputs

Sound Attenuation Settings: Sound Attenuation Settings Structure.

