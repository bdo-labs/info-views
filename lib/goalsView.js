
angular.module('infoViews').directive('goalsView', function () {

	return {
		scope: true,
		link: function (scope, element, attributes) {
			scope.goals = [
				'Ett BDO',
				'Den beste kundeopplevelsen',
				'Attraktiv arbeidsgiver'
			];
			element.addClass('small');
		},
		template: '<section class="secondary-box goals-view">' +
				'<h1>Mål</h1><ul>' +
				'<li ng-repeat="g in goals">{{g}}</li>' +
				'</ul></section>'
	};
});
