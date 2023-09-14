import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/blogs/blogs'

function App() {
  return (
    <>
      <Header></Header>
    <div className='md:flex'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </div>
     
     
    </>
  )
}

export default App
