# SetForceMipLevelstobeResident

Force the streaming system to disregard the normal logic for the specified duration and. instead always load all mip-levels for all textures used by this material.

Target is Material Interface

## 图示

![]($-20221218-20381636.png)

## Inputs

In: Exec.

Target: Material Interface Object Reference.

Override Force Miplevels to be Resident: Boolean. Whether to use (true) or ignore (false) the bForceMiplevelsToBeResidentValue parameter..

Force Miplevels to be Resident Value: Boolean. true forces all mips to stream in. false lets other factors decide what to do with the mips..

Force Duration: Float (single-precision). Number of seconds to keep all mip-levels in memory, disregarding the normal priority logic. Negative value turns it off..

Cinematic Texture Groups: Integer. Bitfield indicating texture groups that should use extra high-resolution mips.

Fast Response: Boolean. USE WITH EXTREME CAUTION! Fast response textures incur sizable GT overhead and disturb streaming metric calculation. Avoid whenever possible..  

## Outputs

Out: Exec.

