# SpawnSoundatLocation

Spawns a sound at the given location. This does not travel with any actor. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-18080244.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. sound to play.

Location: Vector. World position to play sound at.

Rotation: Rotator. World rotation to play sound at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the spawned sound.


Spawns a sound at the given location. This does not travel with any actor. Replication is also not handled at this point.

Target is Gameplay Statics

## 图示

![]($-20221218-18080244.png)

## Inputs

In: Exec.

Sound: Sound Base Object Reference. sound to play.

Location: Vector. World position to play sound at.

Rotation: Rotator. World rotation to play sound at.

Volume Multiplier: Float (single-precision). A linear scalar multiplied with the volume, in order to make the sound louder or softer..

Pitch Multiplier: Float (single-precision). A linear scalar multiplied with the pitch..

Start Time: Float (single-precision). How far in to the sound to begin playback at.

Attenuation Settings: Sound Attenuation Object Reference. Override attenuation settings package to play sound with.

Concurrency Settings: Sound Concurrency Object Reference. Override concurrency settings package to play sound with.

Auto Destroy: Boolean. Whether the returned audio component will be automatically cleaned up when the sound finishes (by completing or stopping) or whether it can be reactivated.  

## Outputs

Out: Exec.

Return Value: Audio Component Object Reference. An audio component to manipulate the spawned sound.

