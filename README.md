ember-owner-helpers
==============================================================================

An add-on that provides helpers related to the application instance.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-owner-helpers
```


Usage
------------------------------------------------------------------------------

``` hbs
{{owner/lookup 'service:foo'}}
```

For details on how to use the `lookup` method, see the document of [Ember.ContainerProxyMixin](https://emberjs.com/api/ember/3.0/classes/ContainerProxyMixin).

A helper to look up the service is also available. It is just for convenience and does not do special things.

``` hbs
{{owner/lookup-service 'foo'}}
```

### Example: Use with [ember-toastr](https://github.com/knownasilya/ember-toastr)

``` hbs
<form onsubmit={{pipe-action (action (invoke 'save' model)) (action (invoke 'success' 'Saved.' (owner/lookup-service 'toast')))}}>
  ...
</form>
```

Note: `pipe-action` and `invoke` are provided by [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers).


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
