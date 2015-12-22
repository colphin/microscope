var postsData = [
	{
		title: 'Intro Telescope',
		url: 'http://www.google.com'
	},
	{
		title: "Meteor",
		url: "http://meteor.com"
	},
	{
		title: "The Meteor Book",
		url: "http://themeteorbook.com"
	}
];

Template.postsList.helpers({
	posts:postsData
});