# BreakSoundClassProperties

Adds a node that breaks a 'SoundClassProperties' into its member fields

## 图示

![]($-20221218-14430093.png)

## Inputs

Sound Class Properties: Sound Class Properties Structure (by ref).  

## Outputs

Volume: Float (single-precision). Volume:. Volume multiplier..

Pitch: Float (single-precision). Pitch:. Pitch multiplier..

Low Pass Filter Frequency: Float (single-precision). Low Pass Filter Frequency:. Lowpass filter cutoff frequency.

Attenuation Distance Scale: Float (single-precision). Attenuation Distance Scale:. Distance scale to apply to sounds that play with this sound class.. Sounds will have their attenuation distance scaled by this amount.. Allows adjusting attenuation settings dynamically..

LFE Bleed: Float (single-precision). LFEBleed:. The amount of a sound to bleed to the LFE channel.

Voice Center Channel Volume: Float (single-precision). Voice Center Channel Volume:. The amount to send to center channel (does not propagate to child classes).

Radio Filter Volume: Float (single-precision). Radio Filter Volume:. Volume of the radio filter effect..

Radio Filter Volume Threshold: Float (single-precision). Radio Filter Volume Threshold:. Volume at which the radio filter kicks in.

Output To Master EQ Submix: Boolean. Apply Effects:. Whether to use 'Master EQ Submix' as set in the 'Audio' category of Project Settings as the default submix for referencing sounds..

Always Play: Boolean. Always Play:. Whether to inflate referencing sound's priority to always play..

Is UISound: Boolean. Is UISound:. Whether or not this sound plays when the game is paused in the UI.

Is Music: Boolean. Is Music:. Whether or not this is music (propagates to child classes only if parent is true).

Center Channel Only: Boolean. Center Channel Only:. Whether or not this sound class forces sounds to the center channel.

Apply Ambient Volumes: Boolean. Apply Ambient Volumes:. Whether the Interior/Exterior volume and LPF modifiers should be applied.

Send To Master Reverb Submix: Boolean. Reverb:. Whether or not sounds referencing this class send to the reverb submix.

Default 2DReverb Send Amount: Float (single-precision). Default 2DReverb Send Amount:. Send amount to master reverb effect for referencing unattenuated (2D) sounds..

Modulation Settings: Sound Modulation Default Settings Structure. Modulation Settings:. Default modulation settings for sounds directly referencing this class.

Output Target: EAudioOutputTarget Enum. Output Target:. Which output target the sound should be played through.

Loading Behavior Override: ESoundWaveLoadingBehavior Enum. Loading Behavior:. Specifies how and when compressed audio data is loaded for asset if stream caching is enabled..

Default Submix: Sound Submix Object Reference. Default Submix:. Default output submix of referencing sounds. If unset, falls back to the 'Master Submix' as set in the 'Audio' category of Project Settings.. (Unavailable if legacy 'Output to Master EQ Submix' is set).

