# OnConfigCamera

在配置相机时：。可以通过蓝图分配一个动态委托。将在 ARSession 启动前被调用并返回。一个支持 ARCore 相机配置的数组。

该数组将始终返回 3 个摄像机配置。在所有三个配置中，GPU 纹理分辨率是相同的。目前，大多数设备提供的 GPU 纹理分辨率为 1920 x 1080，但设备可能提供更高或更低的纹理分辨率，这取决于设备的能力。返回的 CPU 图像分辨率是 VGA、720p 和与 GPU 纹理匹配的分辨率。

如果你想在你的应用程序中选择一个特定的相机配置，请绑定此委托。调用。UGoogleARCoreSessionFunctionLibrary::ConfigARCoreCamera，在该委托被触发后。

<hr>

On Config Camera:. A dynamic delegate can be assigned through blueprint. Will be called before ARSession started and returns. an array of supported ARCore camera config.

The array will always return 3 camera configs. The GPU texture resolutions. are the same in all three configs. Currently, most devices provide GPU. texture resolution of 1920 x 1080, but devices might provide higher or lower. resolution textures, depending on device capabilities. The CPU image. resolutions returned are VGA, 720p, and a resolution matching the GPU. texture.

Bind this delegate if you want to choose a specific camera config in your app. Call. UGoogleARCoreSessionFunctionLibrary::ConfigARCoreCamera after the delegate is triggered.
