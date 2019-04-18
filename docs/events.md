# Events

## How to Use Events

## Known Issues

* `Subscribers` registered via the `@Subscriber()` decorator factory will
be be notified when the respective `Event` is published, but the `this` argument
is not the correct value (the object instance).

## List of Events

----


### `OVERLAY_SIG_HIDE`

Signals an `Overlay` to hide. Hidden overlays are not rendered.

#### Parameters

* `id?: Number` - This is the `id` of the `Overlay` to hide. If no `id` is
provided, all `Overlays` will close.

#### Known Publishers

* `Overlay` component

----



### `OVERLAY_SIG_SHOW`

Signals an `Overlay` to be displayed and start rendering.

#### Parameters

* `id: Number` - The `id` of the `Overlay` to display.