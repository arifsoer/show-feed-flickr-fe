import axios from "./plugins/axios";
import { useState } from 'react'

function App() {
  const [tag, setTag] = useState('')
  const [tagForm, setTagForm] = useState(false)
  const [imageItems, setImageItems] = useState<FeedImage[]>([])

  const searchHandler = async () => {
    try {
      const params = [`tagmode=${!tagForm ? 'any' : 'full'}`]

      // get input tag value
      if (tag !== '') {
        params.push(`tags=${tag}`)
      }
      
      const resp = await axios.get<FeedResponse>('/flickr/public-image?' + params.join('&'))
      const imageItems = resp.data.items
      setImageItems(imageItems)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <main>
      <section className='mb-3'>
        <div className='p-3 text-bg-info text-center'>
          <h2 className='fw-bold mb-3'>IMAGE FEEDS</h2>
        </div>
      </section>
      <section className='mt-3 container'>
        <div className='d-flex'>
          <div className='flex-grow-1'>
            <input className='form-control' placeholder="type tag (separate with comma for multiple tags)" value={tag} onChange={(event) => setTag(event.target.value) } />
          </div>
          <div className='ps-3'>
            <button className='btn btn-secondary' onClick={searchHandler}>Search !</button>
          </div>
        </div>
        <div className="my-2 form-check">
          <input type="checkbox" className="form-check-input" onChange={(event) => setTagForm(event.target.checked)} />
          <label className="form-check-label" htmlFor="formtag">search mode : { !tagForm ? 'ANY' : 'FULL'}</label>
          <small className="ms-2 text-muted">{!tagForm ? '(Show images with any tags)' : '(Show image with all tags)' }</small>
        </div>
        <div className='mt-3 d-flex justify-content-center flex-wrap'>
          {imageItems.map((img, ind) => (
            <div className='p-2' key={ind+'img'}>
              <img className='rounded' src={img.media.m} alt="not found" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
