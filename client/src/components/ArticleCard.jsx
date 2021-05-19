import { Link } from 'react-router-dom'

const BADGE = {
  dog: 'https://res.cloudinary.com/mimo/image/upload/v1620876885/pawsitive-pals/avatars/dog_avatar.png',
  cat: 'https://res.cloudinary.com/mimo/image/upload/v1620876881/pawsitive-pals/avatars/cat_avatar.png',
}

const ArticleCard = ({ image, badgeType, headline, text, to }) => (
  <Link className='group' to={to}>
    <article className='relative z-10 w-full bg-white rounded-md shadow'>
      <div className='relative'>
        <img
          className='w-full h-full rounded-t-md'
          src={image}
          alt='article cover'
        />
        <div />
        <div>
          <img
            className='absolute left-badge -bottom-12 h-24 w-24 rounded-full border-4 border-white'
            src={BADGE[badgeType]}
            alt='badge'
          />
        </div>
      </div>
      <footer className='p-4 pt-12'>
        <h3 className='my-2 text-xl text-gray-800 font-semibold text-center'>
          {headline}
        </h3>
        <p>{text}</p>
      </footer>
    </article>
    <div className='flex items-center justify-center h-10 group-hover:translate-y-0 transition-transform bg-green-800 rounded-b-md transform -translate-y-10 text-center text-green-50'>
      Read More
    </div>
  </Link>
)

export default ArticleCard
