# MakeMusicalSpectralAnalysisBandS-

Make an array of musically spaced bands with ascending frequency.

Target is Audio Mixer Blueprint Library

## 图示

![]($-20221218-18022477.png)

## Inputs

In Num Semitones: Integer. The number of semitones to represent..

In Starting Musical Note: EMusicalNoteName Enum.

In Starting Octave: Integer. The octave of the first note in the array..

In Attack Time Msec: Integer. The attack time (in milliseconds) to apply to each band's envelope tracker..

In Release Time Msec: Integer. The release time (in milliseconds) to apply to each band's envelope tracker..  

## Outputs

Return Value: Array of Sound Submix Spectral Analysis Band Settings Structures.

