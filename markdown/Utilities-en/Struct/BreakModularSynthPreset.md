# BreakModularSynthPreset

Adds a node that breaks a 'ModularSynthPreset' into its member fields

## 图示

![]($-20221218-14400743.png)

## Inputs

Modular Synth Preset: Modular Synth Preset Structure (by ref).  

## Outputs

Enable Polyphony: Boolean. Enable Polyphony:. Whether or not to allow multiple synth voices..

Osc 1Type: ESynth1OscType Enum. Osc 1Type:. What type of oscillator to use for oscillator 1.

Osc 1Gain: Float (single-precision). Osc 1Gain:. The linear gain of oscillator 1 [0.0, 1.0].

Osc 1Octave: Float (single-precision). Osc 1Octave:. The octave of oscillator 1. [-8.0, 8.0].

Osc 1Semitones: Float (single-precision). Osc 1Semitones:. The semi-tones of oscillator 1. [-12.0, 12.0].

Osc 1Cents: Float (single-precision). Osc 1Cents:. The cents (hundreds of a semitone) of oscillator 1. [-100.0, 100.0].

Osc 1Pulse Width: Float (single-precision). Osc 1Pulse Width:. The pulsewidth of oscillator 1 (when using a square wave type oscillator). [0.0, 1.0].

Osc 2Type: ESynth1OscType Enum. Osc 2Type:. What type of oscillator to use for oscillator 2.

Osc 2Gain: Float (single-precision). Osc 2Gain:. The linear gain of oscillator 2 [0.0, 1.0].

Osc 2Octave: Float (single-precision). Osc 2Octave:. The octave of oscillator 2. [-8.0, 8.0].

Osc 2Semitones: Float (single-precision). Osc 2Semitones:. The semi-tones of oscillator 2. [-12.0, 12.0].

Osc 2Cents: Float (single-precision). Osc 2Cents:. The cents (hundreds of a semitone) of oscillator 2. [-100.0, 100.0].

Osc 2Pulse Width: Float (single-precision). Osc 2Pulse Width:. The pulsewidth of oscillator 2 (when using a square wave type oscillator). [0.0, 1.0].

Portamento: Float (single-precision). Portamento:. The amount of portamento to use, which is the amount of pitch sliding from current note to next [0.0, 1.0].

Enable Unison: Boolean. Enable Unison:. Enables forcing the oscillators to have no stereo spread..

Enable Oscillator Sync: Boolean. Enable Oscillator Sync:. Whether or not oscillator sync is enabled. Oscillator sync forces oscillator 2's phase to align with oscillator 1's phase..

Spread: Float (single-precision). Spread:. The amount of stereo spread to use between oscillator 1 and oscillator 2 [0.0, 1.0].

Pan: Float (single-precision). Pan:. The stereo pan to use. 0.0 is center. -1.0 is left, 1.0 is right..

LFO1Frequency: Float (single-precision). LFO1Frequency:. The frequency to use for LFO 1 (in hz) [0.0, 50.0].

LFO1Gain: Float (single-precision). LFO1Gain:. The linear gain to use for LFO 1 [0.0, 1.0].

LFO1Type: ESynthLFOType Enum. LFO1Type:. The type of LFO to use for LFO 1.

LFO1Mode: ESynthLFOMode Enum. LFO1Mode:. The mode to use for LFO 1.

LFO1Patch Type: ESynthLFOPatchType Enum. LFO1Patch Type:. The built-in patch type to use for LFO 1 (you can route this to any patchable parameter using the Patches parameter).

LFO2Frequency: Float (single-precision). LFO2Frequency:. The frequency to use for LFO 2 (in hz) [0.0, 50.0].

LFO2Gain: Float (single-precision). LFO2Gain:. The linear gain to use for LFO 2 [0.0, 1.0].

LFO2Type: ESynthLFOType Enum. LFO2Type:. The type of LFO to use for LFO 2.

LFO2Mode: ESynthLFOMode Enum. LFO2Mode:. The mode to use for LFO 2.

LFO2Patch Type: ESynthLFOPatchType Enum. LFO2Patch Type:. The built-in patch type to use for LFO 2 (you can route this to any patchable parameter using the Patches parameter).

Gain Db: Float (single-precision). Gain Db:. The overall gain to use for the synthesizer in dB [-90.0, 20.0].

Attack Time: Float (single-precision). Attack Time:. The amplitude envelope attack time (in ms) [0.0, 10000].

Decay Time: Float (single-precision). Decay Time:. The amplitude envelope decay time (in ms)[0.0, 10000].

Sustain Gain: Float (single-precision). Sustain Gain:. The amplitude envelope sustain amount (linear gain) [0.0, 1.0].

Release Time: Float (single-precision). Release Time:. The amplitude envelope release time (in ms) [0.0, 10000].

Mod Env Patch Type: ESynthModEnvPatch Enum. Mod Env Patch Type:. The built-in patch type for the envelope modulator.

Mod Env Bias Patch Type: ESynthModEnvBiasPatch Enum. Mod Env Bias Patch Type:. The built-in patch type for the envelope modulator bias output. Bias is when the envelope output is offset by the sustain gain..

Invert Modulation Envelope: Boolean. Invert Modulation Envelope:. Whether or not to invert the modulation envelope.

Invert Modulation Envelope Bias: Boolean. Invert Modulation Envelope Bias:. Whether or not to invert the modulation envelope bias output.

Modulation Envelope Depth: Float (single-precision). Modulation Envelope Depth:. The "depth" (i.e. how much) modulation envelope to use. This scales the modulation envelope output. [0.0, 1.0].

Modulation Envelope Attack Time: Float (single-precision). Modulation Envelope Attack Time:. The modulation envelope attack time (in ms) [0.0, 10000].

Modulation Envelope Decay Time: Float (single-precision). Modulation Envelope Decay Time:. The modulation envelope decay time (in ms) [0.0, 10000].

Modulation Envelope Sustain Gain: Float (single-precision). Modulation Envelope Sustain Gain:. The modulation envelope sustain gain (linear gain) [0.0, 1.0].

Modulation Envelope Release Time: Float (single-precision). Modulation Envelope Release Time:. The modulation envelope release time (in ms) [0.0, 10000].

Legato: Boolean. Legato:. Whether or not to use legato mode..

Retrigger: Boolean. Retrigger:. Whether or not to use retrigger mode..

Filter Frequency: Float (single-precision). Filter Frequency:. The output filter cutoff frequency (hz) [0.0, 20000.0].

Filter Q: Float (single-precision). Filter Q:. The output filter resonance (Q) [0.5, 10].

Filter Type: ESynthFilterType Enum. Filter Type:. The output filter type (lowpass, highpass, bandpass, bandstop).

Filter Algorithm: ESynthFilterAlgorithm Enum. Filter Algorithm:. The output filter circuit/algorithm type (one-pole ladder, ladder, state-variable).

Stereo Delay Enabled: Boolean. Stereo Delay Enabled:. Whether or not stereo delay is enabled on the synth.

Stereo Delay Mode: ESynthStereoDelayMode Enum. Stereo Delay Mode:. The stereo delay mode of the synth.

Stereo Delay Time: Float (single-precision). Stereo Delay Time:. The stereo delay time (in ms) [0.0, 2000.0].

Stereo Delay Feedback: Float (single-precision). Stereo Delay Feedback:. The amount of feedback in the stereo delay line [0.0, 1.0].

Stereo Delay Wetlevel: Float (single-precision). Stereo Delay Wetlevel:. The output wet level to use for the stereo delay time [0.0, 1.0].

Stereo Delay Ratio: Float (single-precision). Stereo Delay Ratio:. The ratio between left and right stereo delay lines (wider value is more separation) [0.0, 1.0].

Chorus Enabled: Boolean. Chorus Enabled:. Whether or not the chorus effect is enabled.

Chorus Depth: Float (single-precision). Chorus Depth:. The depth of the chorus effect [0.0, 1.0].

Chorus Feedback: Float (single-precision). Chorus Feedback:. The amount of feedback in the chorus effect [0.0, 1.0].

Chorus Frequency: Float (single-precision). Chorus Frequency:. The chorus LFO frequency [0.0, 20.0].

Patches: Array of Epic Synth 1Patch Structures. Patches:. The modular synth patch cords to use for the synth. Allows routing the LFO1/LFO2 and Modulation Envelope to any patchable destination..

