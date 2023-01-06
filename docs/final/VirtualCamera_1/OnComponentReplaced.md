# OnComponentReplaced

关于组件被替换：。在编辑器中，有些情况下组件可能会被另一个组件取代，作为正在重建的角色的一部分。这个事件将通知你这个变化，并给你一个对新组件的引用。绑定将被复制到新的组件上，所以你不需要重新绑定这个事件。

注意：当组件被替换时，你将需要重新获得组件上的所有属性，如修改器和输出提供者。

On Component Replaced:. There are situations in the editor where the component may be replaced by another component as part of the actor being reconstructed. This event will notify you of that change and give you a reference to the new component.. Bindings will be copied to the new component so you do not need to rebind this event

Note: When the component is replaced you will need to get all properties on the component again such as Modifiers and Output Providers

