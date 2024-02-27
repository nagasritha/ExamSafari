import "./hero.css";
function HeroSection() {
  return (
    <div>
    <div className='heroSection flex justify-center items-center'>
        <div className='blur'></div>
      <div className='bottom'>
        <h2 className="text-2xl md:text-5xl z-5 text-[#030914] uppercase font-bold">
          travel your exam city with exam safari
        </h2>
        <div className="flex justify-center py-4">
        
          <input type="text" name="text" placeholder="Search here" className="input"/>
        
        </div>
       </div> 
      
    </div>
    <div className="rounded-xl floating">Book Now</div>
    </div>
  );
}

export default HeroSection;
