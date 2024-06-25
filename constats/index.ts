export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  }
]

export const heroTestimon = [
  {
    text1: "Effortlessly find and book the best events ",
    text2: 'in town with our sleek and user-friendly platform.',
    name: "Kaparov Bakytzhan",
    edu: 'KAZATU'
  },
  {
    text1: 'Unlock a world of adventure and fun with',
    text2: 'personalized event recommendations on our site!',
    name: "Kairbek Agzam",
    edu: 'KazNU'
  },
  {
    text1: '"Navigate the vibrant local scene with ease using our',
    text2: 'comprehensive and dynamic events explorer',
    name: "Muratbekov Aman",
    edu: 'KBTU'
  },
  {
    text1: 'Discover unforgettable experiences tailored',
    text2: 'just for you with our intuitive events explorer!',
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