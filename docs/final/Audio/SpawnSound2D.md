# SpawnSound2D

This function allows users to create Audio Components with settings specifically for non-spatialized,. non-distance-attenuated sounds. Audio Components created using this function by default will not have. Spatialization applied. Sound instances will begin playing upon spawning this Audio Component.

- Not Replicated.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18080118.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. Sound to play..

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Persist Across Level Transition: Boolean.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the spawned sound.

<hr>

This function allows users to create Audio Components with settings specifically for non-spatialized,. non-distance-attenuated sounds. Audio Components created using this function by default will not have. Spatialization applied. Sound instances will begin playing upon spawning this Audio Component.

- Not Replicated.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-18080118.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. Sound to play..

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Persist Across Level Transition: Boolean.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the spawned sound.
