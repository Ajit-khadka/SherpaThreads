import propTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'

const HomeSlider = (props) => {
  const navigate = useNavigate()


  let handleNavigate = () => {
    navigate(`/collection/${props.item.link}`)
  }
  return (
    <div className='z-0 '>
      <div className="homeBackground relative h-[100vh] overflow-hidden flex flex-col  justify-center ">
        <img className=" h-[100vh] w-[100vw] overflow-hidden object-cover image-intro" src={`/images/landingBg/${props.item.backImage}`} alt='Landing page image'/>
        <div className='fade-in-image absolute global-padding  mt-10 space-y-6'>
        <p className=' text-white text-md font-Nunito  font-semibold'>{props.item.description}</p>
        <p className="landing-text text-white font-Sans italic font-extrabold uppercase">{props.item.title}</p>
        <div className="HomeSlider--button bg-white text-black text-center rounded-2xl uppercase  font-Inter font-semibold cursor-pointer" onClick={handleNavigate}>{props.item.type}</div>
        </div>
        
      </div>
    </div>
  )
}

HomeSlider.propTypes = {
  item : propTypes.shape({
    id: propTypes.number,
    backImage: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    type: propTypes.string, 
    link: propTypes.string
  })
}

export default HomeSlider
