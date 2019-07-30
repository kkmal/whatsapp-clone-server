export const messages = [
  {
    id: 1,
    content: 'You on your way?',
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  },
  {
    id: 2,
    content: 'Hey, it\'s me',
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  },
  {
    id: 3,
    content: 'I should buy a boat?',
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  },
  {
    id: 4,
    content: 'Wicked sick',
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  }
];

export const chats = [
  {
    id: 1,
    name: 'Ethan gonzalez',
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    lastMessage: messages[0],
  },
  {
    id: 2,
    name: 'Bryan wallace',
    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
    lastMessage: messages[1],
  },
  {
    id: 3,
    name: 'Avery Stewart',
    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
    lastMessage: messages[2],
  },
  {
    id: 4,
    name: 'Katie Peterson',
    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
    lastMessage: messages[3],
  }
]
