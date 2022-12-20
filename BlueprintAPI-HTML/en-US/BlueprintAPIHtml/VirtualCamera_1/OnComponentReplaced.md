# OnComponentReplaced

On Component Replaced:. There are situations in the editor where the component may be replaced by another component as part of the actor being reconstructed. This event will notify you of that change and give you a reference to the new component.. Bindings will be copied to the new component so you do not need to rebind this event

Note: When the component is replaced you will need to get all properties on the component again such as Modifiers and Output Providers

