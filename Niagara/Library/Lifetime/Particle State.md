Manages Particle Age/Lifetime 

Takes the current Particles Age attribute and updates it by adding Engine DeltaTime.
If "Enable Particle Lifetime Looping"is set and "Kill Particles When Lifetime Has Elapsed"is unset then Particles Age will wrap around to 0 after exceeding Particles Lifetime.
Else if "Kill Particles When Lifetime Has Elapsed"is disabled the particle lives indefinitely.
Otherwise the particle is killed when Particles. Age exceeds Particles Lifetime.
A normalized version of Particles Age is stored in Particles. Normalized Age, where a value 0.0 is the birth of the particle and 1.0 is a full lifetime. This is convenient in animated ranges.

管理粒子年龄/寿命

获取当前的粒子年龄属性并通过添加引擎 DeltaTime 对其进行更新。
如果设置了“启用粒子生命周期循环” 并且未设置 “生命周期已过时杀死粒子”，则粒子年龄将在超过粒子生命周期后回绕为 0。
否则，如果禁用“生命周期已过时杀死粒子”，则粒子将无限期地存在。
否则当粒子被杀死时粒子被杀死。年龄超过粒子寿命。
Particles Age 的标准化版本存储在 Particles 中。归一化年龄，其中值 0.0 是粒子的诞生，1.0 是完整的生命周期。这在动画范围内很方便。



![[../../../../_Config/Attatchment/Pasted image 20220506144016.png]]