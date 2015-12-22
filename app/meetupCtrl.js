(function(){
	angular.module('meetupCtrl', ['ngResource'])
	.controller('MeetupCtrl', function($resource) {
		var vm = this;
		var Meetup = $resource('/api/meetups');
		
		vm.meetups = [];

		// Get
		Meetup.query(function(results) {
			vm.meetups = results;
		});
		
		// Post
		vm.createMeetup = function() {
			if(vm.date && vm.title) {
				var meetup = new Meetup();
				meetup.date = vm.date;
				meetup.title = vm.title;
				meetup.$save(function(result) {
					vm.meetups.push(result);
				});
				vm.date = '';
				vm.title = '';
			}
		};
	});
})();