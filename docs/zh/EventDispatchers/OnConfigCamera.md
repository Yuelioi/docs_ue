# OnConfigCamera

在配置相机时：。可以通过蓝图分配一个动态委托。将在ARSession启动前被调用并返回。一个支持ARCore相机配置的数组。

该数组将始终返回3个摄像机配置。在所有三个配置中，GPU纹理分辨率是相同的。目前，大多数设备提供的GPU纹理分辨率为1920 x 1080，但设备可能提供更高或更低的纹理分辨率，这取决于设备的能力。返回的CPU图像分辨率是VGA、720p和与GPU纹理匹配的分辨率。

如果你想在你的应用程序中选择一个特定的相机配置，请绑定此委托。调用。UGoogleARCoreSessionFunctionLibrary::ConfigARCoreCamera，在该委托被触发后。
