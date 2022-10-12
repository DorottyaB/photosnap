const stories = [
  {
    id: 1,
    title: 'The Mountains',
    author: 'John Appleseed',
    date: 'April 16th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: 2,
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    date: 'April 14th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1602521879205-9e43bd841b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 3,
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    date: 'April 11th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1616098851253-01a1e1570101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhpa2luZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 4,
    title: 'Architecturals',
    author: 'Samantha Brooke',
    date: 'April 8th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 5,
    title: 'World Tour 2019',
    author: 'Timothy Wagner',
    date: 'April 7th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
  },
  {
    id: 6,
    title: 'Unforseen Conrners',
    author: 'William Malcolm',
    date: 'April 3rd 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/flagged/photo-1555556557-4878349d550e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 7,
    title: 'King on Africa: Part II',
    author: 'Tim Hillenburg',
    date: 'March 20th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1607274134639-043342705e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 8,
    title: 'The Trip to Nowhere',
    author: 'Felicia Rourke',
    date: 'March 21st 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1526267888532-69091f908bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 9,
    title: 'Rage of the Sea',
    author: 'Mohammed Abdul',
    date: 'March 19th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
  {
    id: 10,
    title: 'Running Free',
    author: 'Michelle',
    date: 'March 16th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1633512423760-2b4f034994ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 11,
    title: 'Behind the Waves',
    author: 'Lamarr Wilson',
    date: 'March 11th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 12,
    title: 'Calm Waters',
    author: 'Samantha Brooke',
    date: 'March 9th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1529157096195-ad40a499ead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 13,
    title: 'The Milky Way',
    author: 'Benjamin Cruz',
    date: 'March 5th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1531742896094-1424584e750b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 14,
    title: 'Night at the Dark Forest',
    author: 'Mohammed Abdul',
    date: 'March 4th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1518283157686-5a29b7f5b279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 15,
    title: "Somwarpet's Beauty",
    author: 'Michelle',
    date: 'March 1st 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1559621455-00adbcb1054b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 16,
    title: 'Land of Dreams',
    author: 'William Malcolm',
    date: 'February 25th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1515835854292-afb3d11ec326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

export default stories;
