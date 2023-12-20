import propTypes from 'prop-types'

const HomeSlider = (props) => {
  return (
    <div className='z-0'>
      <div className="homeBackground relative h-[100vh] overflow-hidden flex flex-col  justify-center">
        <img className="absolute" src={`/images/${props.item.backImage}`} alt='Landing page image'/>
        <div className='absolute ml-20  mt-10 space-y-6'>
        <p className=' text-white text-md font-Sans font-semibold'>{props.item.description}</p>
        <p className=" text-white text-5xl font-Sans italic font-extrabold uppercase">{props.item.title}</p>
        <div className="HomeSlider--button px-6 py-4 w-[180px] bg-white text-black text-center rounded-2xl uppercase font-Inter font-bold cursor-pointer">{props.item.type}</div>
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
  })
}

export default HomeSlider
