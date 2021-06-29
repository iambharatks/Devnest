function display(library) {
  for (book of library) {
    for (let [key, value] of Object.entries(book)) {
      console.log(key + ":" + value);
    }
  }
}

var library = [
  {
    title: "The Autobiography Of A Yogi",
    author: "Paramhansa Yogananda",
    readingStatus: false,
  },
  {
    title: "Rich Dad, Poor Dad",
    author: "Robert Kiyosaki",
    readingStatus: false,
  },
  {
    title: "Wings Of Fire",
    author: "APJ Abdul Kalam",
    readingStatus: true,
  },
  {
    title: "Think And Grow Rich",
    author: "Napolean Hill",
    readingStatus: true,
  },
];
display(library);
