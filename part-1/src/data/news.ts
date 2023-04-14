import newsImgOne from '../assets/news_1.png'
import newsImgTwo from '../assets/news_2.png'
import newsImgThree from '../assets/news_3.png'
import newsImgFour from '../assets/news_4.png'
import newsImgFive from '../assets/news_5.png'
import authorImgOne from '../assets/author_1.png'
import authorImgTwo from '../assets/author_2.png'
import authorImgThree from '../assets/author_3.png'
import { INews } from '../types'

export const news: INews[] = [
 {
   id: 1,
   imgSrc:newsImgOne,
   category: 'category',
   createdAt: 'November 22, 2021',
   title: 'Pitch termsheet backing validation focus release',
   authorImg: authorImgOne,
   authorName: 'Chandler Bing',
 },
 {
    id: 2,
    imgSrc:newsImgTwo,
    category: 'category',
    createdAt: 'November 22, 2021',
    title: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    authorImg: authorImgTwo,
    authorName: 'Chandler Bing',
  },
  {
    id: 3,
    imgSrc:newsImgThree,
    category: 'category',
    createdAt: 'November 22, 2021',
    title: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    authorImg: authorImgThree,
    authorName: 'Chandler Bing',
  },
  {
    id: 4,
    imgSrc:newsImgFour,
    category: 'category',
    createdAt: 'November 22, 2021',
    title: 'Pitch termsheet backing validation focus release.',
    authorImg: authorImgOne,
    authorName: 'Chandler Bing',
  },
  {
    id: 5,
    imgSrc:newsImgFive,
    category: 'category',
    createdAt: 'November 22, 2021',
    title: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    authorImg: authorImgTwo,
    authorName: 'Chandler Bing',
  },
  {
    id: 6,
    imgSrc:newsImgOne,
    category: 'category',
    createdAt: 'November 22, 2021',
    title: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    authorImg: authorImgThree,
    authorName: 'Chandler Bing',
  },
];