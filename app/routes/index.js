import Ember from "ember";

var IndexRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON("https://github7ad43e39-bd5086abac4b.my.apitools.com/events?per_page=" + params.per_page);
  }
});

export default IndexRoute;
