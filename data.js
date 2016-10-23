var samplePosts = [

   {
      id: 1,
      title: 'This is the first title',
      author: 'Erik Mura',
      imageurl: 'http://images.clipartpanda.com/baseball-ball-clipart-small-baseball.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.',
      comments: [
         {
            author: 'Erik Mura',
            text: 'This is awesome'
         },
         {
            author: 'Tom Mura',
            text: 'This is Crazy'
         }
      ],
      date: new Date().toISOString().split('T')[0],
      votes: 6
   },
   {
      id: 2,
      title: 'Where to go?',
      author: 'Kyle Mura',
      imageurl: 'http://images.clipartpanda.com/baseball-ball-clipart-small-baseball.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.',
      comments: [
         {
            author: 'Erik Mura',
            text: 'This is awesome'
         }
      ],
      date: new Date().toISOString().split('T')[0],
      votes: 1
   },
   {
      id: 3,
      title: 'All the things',
      author: 'Laurel Mura',
      imageurl: 'http://images.clipartpanda.com/baseball-ball-clipart-small-baseball.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus tincidunt volutpat. Morbi congue sem sagittis, sagittis felis eu, semper arcu. Nullam ut egestas sapien. Morbi efficitur orci odio, quis consequat felis ullamcorper nec. Etiam eros risus, suscipit nec ornare et, vestibulum ut magna. Nulla facilisis efficitur mi.',
      comments: [
         {
            author: 'Erik Mura',
            text: 'This is awesome'
         }
      ],
      date: new Date().toISOString().split('T')[0],
      votes: -2
   }
]
