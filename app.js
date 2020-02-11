var myModule = angular.module('Angello', []);
myModule.controller('MainCtrl', function(AngelloModel){
    var main = this;
    
    main.stories = AngelloModel.getStories();
    main.createStory = function(){
        var newStory = {
            title : 'new user story',
            description : 'input description',
            criteria : '요구사항 정리 중...',
            status : 'back log',
            type : 'function',
            reporter : 'none',
            assignee : 'none'
        }
        main.stories.push(newStory);
    }

})

myModule.service('AngelloModel', function(){
    var service = this;
    var stories = [
        {
            title : '1st story',
            description : '1st user story',
            criteria : '요구사항 정리 중...',
            status : 'todo',
            type : 'function',
            reporter : 'webjini',
            assignee : 'webjini'
        },
        {
            title : '2st story',
            description : '2st user story',
            criteria : '요구사항 정리 중...',
            status : 'back log',
            type : 'function',
            reporter : 'webjini',
            assignee : 'webjini'
        },
        {
            title : '3rd story',
            description : '3rd user story',
            criteria : '요구사항 정리 중...',
            status : 'code review',
            type : '개선',
            reporter : 'webjini',
            assignee : 'webjini'
        }
    ];

    service.getStories = function(){
        return stories;
    }
})