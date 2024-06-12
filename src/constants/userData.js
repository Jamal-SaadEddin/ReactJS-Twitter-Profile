import PAGE_COVER_PICTURE from "../assets/React-cover-photo.png";
import PAGE_PROFILE_PICTURE from "../assets/React-profile-photo.png";

const userPosts = [
  {
    id: 1,
    date: "Jul 22",
    content:
      "New case study out now! How React was used to overhaul a major retail website's user interface, enhancing speed and accessibility. Full details: https://reactjs.org/case-study",
    commentsCount: "67",
    repostsCount: "330",
    likesCount: "980",
    viewsCount: "350K",
  },
  {
    id: 2,
    date: "Jul 04",
    content:
      "Celebrating Independence Day with a special webinar on 'React & Freedom in Development'. Join us! 🎇 https://reactjs.org/july4",
    commentsCount: "52",
    repostsCount: "195",
    likesCount: "610",
    viewsCount: "220K",
  },
  {
    id: 3,
    date: "Jun 18",
    content:
      "React developer survey 2024 is closing soon. Share your experiences and help shape the future of React! 📝 Participate here: https://reactjs.org/survey",
    commentsCount: "49",
    repostsCount: "240",
    likesCount: "700",
    viewsCount: "260K",
  },
  {
    id: 4,
    date: "Jun 05",
    content:
      "Check out our roundup of the top 10 React open source projects of 2024. Get involved and contribute to the community! 🌟 https://reactjs.org/opensource",
    commentsCount: "66",
    repostsCount: "310",
    likesCount: "950",
    viewsCount: "320K",
  },
  {
    id: 5,
    date: "May 16",
    content:
      "React Conf 2024 is live now! Don't miss out on the latest updates and expert panels. Watch the livestream here: https://conf.react.dev/live",
    commentsCount: "85",
    repostsCount: "350",
    likesCount: "1.2K",
    viewsCount: "400K",
  },
  {
    id: 6,
    date: "May 01",
    content:
      "Happy International Workers' Day to all developers! Remember to take breaks and care for your well-being as much as you care for your code. ❤️🌍",
    commentsCount: "55",
    repostsCount: "267",
    likesCount: "830",
    viewsCount: "275K",
  },
  {
    id: 7,
    date: "Apr 15",
    content:
      "We're excited to announce that React Native for Web has reached a new milestone. More seamless integration and better performance across platforms! 🎉",
    commentsCount: "48",
    repostsCount: "210",
    likesCount: "720",
    viewsCount: "230K",
  },
  {
    id: 8,
    date: "Apr 01",
    content:
      "April Fool's Day special: React elements are now draggable anywhere on your screen—no additional libraries needed! 😂",
    commentsCount: "59",
    repostsCount: "255",
    likesCount: "800",
    viewsCount: "290K",
  },
  {
    id: 9,
    date: "Mar 22",
    content:
      "React 18.1 is here! Check out the performance improvements and new hooks that are now stable. Update your projects today! 🔗 https://reactjs.org/updates",
    commentsCount: "75",
    repostsCount: "300",
    likesCount: "900",
    viewsCount: "310K",
  },
  {
    id: 10,
    date: "Mar 10",
    content:
      "Meet the creators of React Router v6 at our next community meetup! Get your questions ready and RSVP here: https://reactjs.meetup.com",
    commentsCount: "33",
    repostsCount: "122",
    likesCount: "500",
    viewsCount: "140K",
  },
  {
    id: 11,
    date: "Feb 20",
    content:
      "Thank you to everyone who contributed to the new React documentation. We appreciate your efforts in making learning React easier and more accessible! 📘💙",
    commentsCount: "41",
    repostsCount: "150",
    likesCount: "650",
    viewsCount: "180K",
  },
  {
    id: 12,
    date: "Feb 05",
    content:
      "Dive into the future of React with our latest blog post about React 18's new features! 🚀 Learn more: https://reactjs.org/blog",
    commentsCount: "64",
    repostsCount: "200",
    likesCount: "780",
    viewsCount: "250K",
  },
  {
    id: 13,
    date: "Jan 18",
    content:
      "React Conf is back for 2024! Join our co-hosts @Meta and @callstackio May 15-16 in Henderson, Nevada or join the free livestream. Sign up here for updates: https://conf.react.dev",
    commentsCount: "58",
    repostsCount: "355",
    likesCount: "1.5K",
    viewsCount: "309K",
  },
];

export const currentUser = {
  name: "React",
  postsCount: "2,611",
  coverPicture: PAGE_COVER_PICTURE,
  profilePicture: PAGE_PROFILE_PICTURE,
  _id: "@reactjs",
  bio: "The library for web and native user interfaces",
  personalLinkURL: "https://react.dev/",
  personalLinkTitle: "react.dev",
  dateJoined: "July 2013",
  followingCount: "276",
  followersCount: "708.1K",
  posts: userPosts,
};
