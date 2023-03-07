import './App.css'

const App = () => {
  const categories = [
    { title: 'Hats', id: 1, image: 'https://i.ibb.co/cvpntL1/hats.png' },
    { title: 'Jackets', id: 2, image: 'https://i.ibb.co/px2tCc3/jackets.png' },
    {
      title: 'Sneakers',
      id: 3,
      image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    { title: 'Women', id: 4, image: 'https://i.ibb.co/GCCdy8t/womens.png' },
    { title: 'Men', id: 5, image: 'https://i.ibb.co/R70vBrQ/men.png' },
  ]

  return (
    <div className='app__categories-container'>
      {categories.map(({ title, id, image }) => (
        <div className='app__category-container' key={id}>
          <div className='app__category-image'>
            <img src={image} alt={title} border='0' />
          </div>
          <div className='app__category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
