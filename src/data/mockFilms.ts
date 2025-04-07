export interface Film {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
}

export const popularFilms: Film[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 9.3,
    year: 1994,
  },
  {
    id: 2,
    title: "The Godfather",
    imageUrl: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    rating: 9.2,
    year: 1972,
  },
  {
    id: 3,
    title: "The Dark Knight",
    imageUrl: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    rating: 9.0,
    year: 2008,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 8.9,
    year: 1994,
  },
  {
    id: 5,
    title: "Fight Club",
    imageUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4Drg3PmbJ.jpg",
    rating: 8.8,
    year: 1999,
  },
];

export const trendingFilms: Film[] = [
  {
    id: 6,
    title: "Inception",
    imageUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
    year: 2010,
  },
  {
    id: 7,
    title: "The Matrix",
    imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7,
    year: 1999,
  },
  {
    id: 8,
    title: "Interstellar",
    imageUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    year: 2014,
  },
  {
    id: 9,
    title: "Parasite",
    imageUrl: "https://image.tmdb.org/t/p/w500/7QiGufBWnqWw0zHRYa0zXZ0QdQm.jpg",
    rating: 8.5,
    year: 2019,
  },
  {
    id: 10,
    title: "The Social Network",
    imageUrl: "https://image.tmdb.org/t/p/w500/ok5WhP5cgHW8YExBvg4kVUDVdEF.jpg",
    rating: 8.4,
    year: 2010,
  },
];

export const upcomingFilms: Film[] = [
  {
    id: 11,
    title: "Dune: Part Two",
    imageUrl: "https://image.tmdb.org/t/p/w500/8Ue6tJ9Qj4W6v8W1pV7Nx3a6v0Z.jpg",
    rating: 8.8,
    year: 2024,
  },
  {
    id: 12,
    title: "Oppenheimer",
    imageUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDNyEGaZfngWjE.jpg",
    rating: 8.7,
    year: 2023,
  },
  {
    id: 13,
    title: "Barbie",
    imageUrl: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfS51utn2BrzyHa.jpg",
    rating: 7.3,
    year: 2023,
  },
  {
    id: 14,
    title: "The Batman",
    imageUrl: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    rating: 7.9,
    year: 2022,
  },
  {
    id: 15,
    title: "Everything Everywhere All at Once",
    imageUrl: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    rating: 8.3,
    year: 2022,
  },
];

export const actionFilms: Film[] = [
  {
    id: 16,
    title: "John Wick: Chapter 4",
    imageUrl: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    rating: 8.2,
    year: 2023,
  },
  {
    id: 17,
    title: "Mission: Impossible - Dead Reckoning",
    imageUrl: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    rating: 7.8,
    year: 2023,
  },
  {
    id: 18,
    title: "Top Gun: Maverick",
    imageUrl: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    rating: 8.3,
    year: 2022,
  },
];

export const comedyFilms: Film[] = [
  {
    id: 19,
    title: "The Grand Budapest Hotel",
    imageUrl: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    rating: 8.1,
    year: 2014,
  },
  {
    id: 20,
    title: "Superbad",
    imageUrl: "https://image.tmdb.org/t/p/w500/ek8e8XTb0Mx5B5zXhK0PuXw3XBL.jpg",
    rating: 7.6,
    year: 2007,
  },
  {
    id: 21,
    title: "Bridesmaids",
    imageUrl: "https://image.tmdb.org/t/p/w500/9rF7yZkHGPw1qVqQZQJXZQZQZQZ.jpg",
    rating: 6.8,
    year: 2011,
  },
];

export const dramaFilms: Film[] = [
  {
    id: 22,
    title: "The Father",
    imageUrl: "https://image.tmdb.org/t/p/w500/rtCx0fiYxJVhzXXdwZE2XRTfIKE.jpg",
    rating: 8.3,
    year: 2020,
  },
  {
    id: 23,
    title: "Nomadland",
    imageUrl: "https://image.tmdb.org/t/p/w500/6XbGUVVX5z5x7Z6Yz0Q5Z5Z5Z5Z.jpg",
    rating: 7.3,
    year: 2020,
  },
  {
    id: 24,
    title: "Minari",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 7.5,
    year: 2020,
  },
];

export const horrorFilms: Film[] = [
  {
    id: 25,
    title: "Hereditary",
    imageUrl: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
    rating: 7.3,
    year: 2018,
  },
  {
    id: 26,
    title: "Get Out",
    imageUrl: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfA91YglBp1b1b1.jpg",
    rating: 7.7,
    year: 2017,
  },
  {
    id: 27,
    title: "The Witch",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 7.0,
    year: 2015,
  },
];

export const animationFilms: Film[] = [
  {
    id: 28,
    title: "Spider-Man: Across the Spider-Verse",
    imageUrl: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    rating: 8.7,
    year: 2023,
  },
  {
    id: 29,
    title: "Puss in Boots: The Last Wish",
    imageUrl: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    rating: 8.3,
    year: 2022,
  },
  {
    id: 30,
    title: "Turning Red",
    imageUrl: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    rating: 7.0,
    year: 2022,
  },
];

export const adventureFilms: Film[] = [
  {
    id: 31,
    title: "Indiana Jones and the Dial of Destiny",
    imageUrl: "https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    rating: 6.7,
    year: 2023,
  },
  {
    id: 32,
    title: "Jungle Cruise",
    imageUrl: "https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d8B.jpg",
    rating: 6.5,
    year: 2021,
  },
  {
    id: 33,
    title: "The Lost City",
    imageUrl: "https://image.tmdb.org/t/p/w500/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    rating: 6.5,
    year: 2022,
  },
];

export const fantasyFilms: Film[] = [
  {
    id: 34,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    imageUrl: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    rating: 8.8,
    year: 2001,
  },
  {
    id: 35,
    title: "Harry Potter and the Philosopher's Stone",
    imageUrl: "https://image.tmdb.org/t/p/w500/wuMc08IP1atOp5c7edqR5g3Y5ac.jpg",
    rating: 7.6,
    year: 2001,
  },
  {
    id: 36,
    title: "Pan's Labyrinth",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 8.2,
    year: 2006,
  },
];

export const crimeFilms: Film[] = [
  {
    id: 37,
    title: "The Irishman",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 7.8,
    year: 2019,
  },
  {
    id: 38,
    title: "Goodfellas",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 8.7,
    year: 1990,
  },
  {
    id: 39,
    title: "The Departed",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 8.5,
    year: 2006,
  },
];

export const documentaryFilms: Film[] = [
  {
    id: 40,
    title: "Free Solo",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 8.1,
    year: 2018,
  },
  {
    id: 41,
    title: "My Octopus Teacher",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 8.1,
    year: 2020,
  },
  {
    id: 42,
    title: "The Social Dilemma",
    imageUrl: "https://image.tmdb.org/t/p/w500/6Z7bZ8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8.jpg",
    rating: 7.6,
    year: 2020,
  },
];
