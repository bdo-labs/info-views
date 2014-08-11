
angular.module('infoViews').directive('visionView', function () {

	return {
		scope: true,
		link: function (scope, element, attributes) {
			scope.vision = 'Vi skal gi den beste kundeopplevelsen';
			element.addClass('small');
		},
		template: '<section class="secondary-box vision-view">' +
				'<h1>Visjon</h1><p>{{vision}}</p><ul>' +
				'</ul></section>'
	};
});
