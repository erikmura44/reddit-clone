var app = angular.module("redditClone", ['angularMoment','ngAnimate']);

app.controller("myController", function($scope){
   $scope.view = {};
   $scope.view.posts = [
      {
         title: 'This is the first title',
         author: 'Erik Mura',
         imageurl: 'http://images.clipartpanda.com/baseball-ball-clipart-small-baseball.svg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.',
         comments: [
            {
               author: 'Erik Mura',
               text: 'This is awesome',
               date: Date.parse('Oct 05, 2016 9:23:00')
            },
            {
               author: 'Tom Mura',
               text: 'This is Crazy',
               date: Date.parse('Oct 07, 2016 14:01:00')
            }
         ],
         date: Date.parse('Oct 01, 2016 9:23:00'),
         votes: 4,
         showcomments: false,
         addcomment: false
      },
      {
         title: 'All the Things',
         author: 'Kyle Mura',
         imageurl: 'http://www.recreatingwithkids.com/wp-content/uploads/2012/01/Great-Outdoors-1024x768.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.',
         comments: [
            {
               author: 'Erik Mura',
               text: 'This is awesome',
               date: Date.parse('Oct 05, 2016 9:23:00')
            }
         ],
         date: Date.parse('Sept 04, 2016 19:21:00'),
         votes: 8,
         showcomments: false,
         addcomment: false
      },
      {
         title: 'Where to Go?',
         author: 'Laurel Mura',
         imageurl: 'https://a2ua.com/outdoors/outdoors-005.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.',
         comments: [
            {
               author: 'Erik Mura',
               text: 'This is awesome',
               date: Date.now()
            }
         ],
         date: Date.now(),
         votes: -4,
         showcomments: false,
         addcomment: false
      }
   ];
   $scope.myForm = {};
   $scope.view.createpost = false;


   $scope.submitForm = function (clear) {
      var post = {
         votes: 0,
         comments: [],
         date: Date.now(),
         title: $scope.myForm.title,
         author: $scope.myForm.author,
         imageurl: $scope.myForm.imageurl,
         description: $scope.myForm.description
      };
      $scope.view.createpost = false;
      $scope.view.posts.push(post);

      clear.$setPristine();

      $scope.myForm.title = '';
      $scope.myForm.author = '';
      $scope.myForm.imageurl = '';
      $scope.myForm.description = '';


   };

   $scope.addComment = function (commentForm,post) {

      var comment = {
         author: commentForm.author,
         text: commentForm.text,
         date: Date.now()
      }

      post.comments.push(comment);
      post.addcomment = false;
      post.showcomments = true;
      commentForm.$setPristine();
      commentForm.author='';
      commentForm.text = '';
   };

   $scope.toggleComment = function (post) {
     post.showcomments = !post.showcomments
  };
   $scope.toggleForm = function (post) {
     post.addcomment = !post.addcomment
  };
  $scope.reset = function (){
     $scope.view.posts.showcomments = false;
     for (var i = 0; i < $scope.view.posts.length; i++) {
        $scope.view.posts[i].showcomments = false;
        $scope.view.posts[i].addcomment = false;
     }
  }
});

/***** FORM JS *****/

function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
