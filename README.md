ember-owner-helpers
==============================================================================

An add-on that provides helpers related to the application instance.

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

### Installation

* `git clone https://github.com/ember-sapporo/ember-owner-helpers.git`
* `cd ember-owner-helpers`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
