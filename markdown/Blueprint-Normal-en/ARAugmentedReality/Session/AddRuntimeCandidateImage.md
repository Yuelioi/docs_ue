# AddRuntimeCandidateImage

Create an ARCandidateImage object and add it to the ARCandidateImageList of the given \c UARSessionConfig object.

Note that you need to restart the AR session with the \c UARSessionConfig you are adding to to make the change take effect.

On ARCore platform, you can leave the PhysicalWidth to 0 if you don't know the physical size of the image or. the physical size is dynamic. And this function takes time to perform non-trivial image processing (20ms - 30ms),. and should be run on a background thread.

Target is ARBlueprint Library

## 图示

![]($-20221218-17573361.png)

## Inputs

In: Exec.

Session Config: ARSession Config Object Reference.

Candidate Texture: Texture 2D Object Reference.

Friendly Name: String.

Physical Width: Float (single-precision).  

## Outputs

Out: Exec.

Return Value: ARCandidate Image Object Reference. A \c UARCandidateImage Object pointer if the underlying ARPlatform added the candidate image at runtime successfully. Return nullptr otherwise..

