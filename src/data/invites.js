const BASE_URL = import.meta.env.BASE_URL

export const invites = [
  {
    id: 1,
    category: 'Еда',
    title: 'Угощу калачами, я из Коломны',
    description:
      'Вместе попробуем настоящие коломенские калачи, уже 1 раз организовывала',
    author: 'Мария',
    location: 'Коломна',
    meta: 'Еда · Родной край',
    avatar: `${BASE_URL}avatars/maria.jpg`,
  },
  {
    id: 2,
    category: 'Религия',
    title:
      'Научу совершать намаз и расскажу, зачем это нужно',
    description:
      'Можете задать любые вопросы о мусульманской традиции',
    author: 'Амина',
    location: 'Москва',
    meta: 'Религия · Традиции',
    avatar: `${BASE_URL}avatars/amina.jpg`,
  },
  {
    id: 3,
    category: 'Семья',
    title:
      'Моя мама зовёт лепить с нами пельмени',
    description:
      'Соберёмся дома, будем лепить пельмени, может кто-то никогда не делал?',
    author: 'Даша',
    location: 'Москва',
    meta: 'Семья · Еда',
    avatar: `${BASE_URL}avatars/dasha.jpg`,
  },
  {
    id: 4,
    category: 'Праздники',
    title:
      'Той (не терьер)',
    description:
      'Что-то типа сватовства, будут танцы много людей, можем принять двоих людей (🤘ᴗ _ᴗ)🤘',
    author: 'Лейла',
    location: 'Москва',
    meta: 'Праздники · Традиции',
    avatar: `${BASE_URL}avatars/leila.jpg`,
  },
  {
    id: 5,
    category: 'Традиции',
    title:
      'Печь лепешки',
    description:
      'Могу научить готовить национальные лепешки, может есть кто из общаги МГТУ',
    author: 'Зарина',
    location: 'Москва',
    meta: 'Традиции · Семья',
    avatar: `${BASE_URL}avatars/zarina.jpg`,
  },
  {
    id: 6,
    category: 'Повседневная жизнь',
    title:
      'обычный день, я из дагестана',
    description:
      'Не знаю будет ли кому интересно. Хочу показать свой уклад',
    author: 'Тимур',
    location: 'Москва',
    meta: 'Повседневная жизнь',
    avatar: `${BASE_URL}avatars/timur.jpg`,
  },
]