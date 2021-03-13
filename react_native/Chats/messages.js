const messages = [
    {
      _id: 'Ron@gmail.com',
      text: 'הי מה קורה ?',
      createdAt: new Date(),
      user: {
        _id: 'ron@gmail.com',
        name: 'Ron',
        avatar: 'https://proj.ruppin.ac.il/bgroup15/prod/finalPics/Ron.jpg',
      },
    },
    {
      _id:'vmagen@gmail.com',
      text: 'הי, צירפתי תמונה',
      createdAt: new Date(),
      user: {
        _id: 'vmagen@gmail.com',
        name: 'Vered',
        avatar: 'https://proj.ruppin.ac.il/bgroup15/prod/finalPics/pazit.jpg',
      },
      image: 'https://proj.ruppin.ac.il/bgroup15/prod/FinalPics/Pelter.jpg',
    },
  ];
  
  export default messages;