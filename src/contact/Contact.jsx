import {  useNavigate  } from "react-router-dom"


const Contact = () => {
  const navigate = useNavigate();
  const handleback=()=>navigate("/")

  return (
    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis incidunt tempora officiis quidem placeat quae nemo animi optio eaque sint a, ipsam ex odio, voluptatibus non nobis itaque quia. Veritatis facilis accusantium quidem ipsam ratione eos repellat maiores repudiandae, non deleniti quis quibusdam, corrupti voluptate voluptatem. Exercitationem, quisquam reprehenderit?</p>
      
      <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300" onClick={handleback}>Back</button>
      
    </div>
  )
}

export default Contact