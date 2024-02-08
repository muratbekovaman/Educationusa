export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const heroTestimon = [
  {
    text1: "This events changed my life...",
    text2: 'I am alive again',
    name: "Kaparov bakytzhan",
    edu: 'KAZATU'
  },
  {
    text1: 'I was lost',
    text2: 'There i found myself',
    name: "Kairbek Agzam",
    edu: 'KazNU'
  },
  {
    text1: 'I enhaced my engish',
    text2: 'You will too',
    name: "Batalov Rasul",
    edu: 'KBTU'
  },
  {
    text1: 'I found new way',
    text2: 'To improve myself',
    name: "Almagul Alina",
    edu: "ENU",
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}