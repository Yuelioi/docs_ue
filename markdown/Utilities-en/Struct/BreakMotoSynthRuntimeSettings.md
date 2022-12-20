# BreakMotoSynthRuntimeSettings

Adds a node that breaks a 'MotoSynthRuntimeSettings' into its member fields

## 图示

![]($-20221218-14401495.png)

## Inputs

Moto Synth Runtime Settings: Moto Synth Runtime Settings Structure (by ref).  

## Outputs

Synth Tone Enabled: Boolean. Synth Tone Enabled:. If the synth tone is enabled.

Synth Tone Volume Range: Vector 2D Structure. Synth Tone Volume Range:. The volume of the synth tone between min and max RPM.

Synth Tone Filter Frequency Range: Vector 2D Structure. Synth Tone Filter Frequency Range:. The filter frequency of the synth tone between min/max RPM.

Synth Tone Envelope Enabled: Boolean. Synth Tone Envelope Enabled:. Enable the synth tone envelope generator.

Synth Tone Attack Time Msec Range: Vector 2D Structure. Synth Tone Attack Time Msec Range:. Synth tone envelope attack time in milliseconds between min/max RPM.

Synth Tone Attack Curve Range: Vector 2D Structure. Synth Tone Attack Curve Range:. Synth tone envelope attack curve. 1.0 = linear growth, < 1.0 logorithmic growth, > 1.0 exponential growth..

Synth Tone Decay Time Msec Range: Vector 2D Structure. Synth Tone Decay Time Msec Range:. Synth tone decay time in milliseconds.

Synth Tone Decay Curve Range: Vector 2D Structure. Synth Tone Decay Curve Range:. Synth tone envelope decay curve. 1.0 = linear decay, < 1.0 exponential decay, > 1.0 logarithmic decay..

Synth Octave Shift: Integer. Synth Octave Shift:. Octave shift of the synth.

Noise Enabled: Boolean. Noise Enabled:. If the noise generator enabled.

Noise Volume Range: Vector 2D Structure. Noise Volume Range:. The volume of the noise source.

Noise Envelope Enabled: Boolean. Noise Envelope Enabled:. If the noise generator has the envelope enabled.

Noise LPFRange: Vector 2D Structure. Noise LPFRange:. The filter frequency of the noise generator between min/max RPM.

Noise Attack Time Msec Range: Vector 2D Structure. Noise Attack Time Msec Range:. Noise envelope attack time in milliseconds between min/max RPM.

Noise Attack Curve Range: Vector 2D Structure. Noise Attack Curve Range:. Noise envelope attack curve. 1.0 = linear growth, < 1.0 logorithmic growth, > 1.0 exponential growth..

Noise Decay Time Msec Range: Vector 2D Structure. Noise Decay Time Msec Range:. Noise envelope attack time in milliseconds between min/max RPM.

Noise Decay Curve Range: Vector 2D Structure. Noise Decay Curve Range:. Noise envelope attack curve between min/max RPM. 1.0 = linear growth, < 1.0 logorithmic growth, > 1.0 exponential growth..

Granular Engine Enabled: Boolean. Granular Engine Enabled:. If the granular engine is enabled.

Granular Engine Volume: Float (single-precision). Granular Engine Volume:. The volume of the granular engine.

Granular Engine Pitch Scale: Float (single-precision). Granular Engine Pitch Scale:. The pitch scale of the granular engine.

Num Samples To Crossfade Between Grains: Integer. Num Samples to Crossfade Between Grains:. The volume of the granular engine.

Num Grain Table Entries Per Grain: Integer. Num Grain Table Entries Per Grain:. How many grain-table entries to use per runtime grain.

Grain Table Random Offset For Constant RPMs: Integer. Grain Table Random Offset for Constant RPMs:. Random grain table offset for cases where RPM is constant. Allows random shuffling of grains to avoid a robotic sound..

Grain Crossfade Samples For Constant RPMs: Integer. Grain Crossfade Samples for Constant RPMs:. Number of samples to cross fade grains when on a constant-RPM state. More crossfaded samples can reduce the robotic sound..

Stereo Widener Enabled: Boolean. Stereo Widener Enabled:. If the stereo widener is enabled.

Stereo Delay Msec: Float (single-precision). Stereo Delay Msec:. If the stereo widener is enabled.

Stereo Feedback: Float (single-precision). Stereo Feedback:. Amount of feedback for stereo widener.

Stereo Widener Wetlevel: Float (single-precision). Stereo Widener Wetlevel:. Wet level of stereo delay used for stereo widener.

Stereo Widener Dry Level: Float (single-precision). Stereo Widener Dry Level:. Dry level of stereo delay used for stereo widener.

Stereo Widener Delay Ratio: Float (single-precision). Stereo Widener Delay Ratio:. Delay ratio of left/right channels for stereo widener effect.

Stereo Widener Filter Enabled: Boolean. Stereo Widener Filter Enabled:. Delay ratio of left/right channels for stereo widener effect.

Stereo Widener Filter Frequency: Float (single-precision). Stereo Widener Filter Frequency:. Delay ratio of left/right channels for stereo widener effect.

Stereo Widener Filter Q: Float (single-precision). Stereo Widener Filter Q:. Delay ratio of left/right channels for stereo widener effect.

