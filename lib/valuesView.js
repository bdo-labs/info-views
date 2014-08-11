
angular.module('infoViews').directive('valuesView', function () {

	return {
		scope: true,
		link: function (scope, element, attributes) {
			scope.values = [
				'nær',
				'åpen',
				'modig'
			].join(', ');

			element.addClass('small');
		},
		template: '<section class="secondary-box values-view">' +
				'<h1>Verdier</h1><p>{{values}}</p>' +
				'</section>'

	};
});
