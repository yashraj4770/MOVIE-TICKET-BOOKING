// import '..src/pages/Home.css';
import AboutUs from '../components/Home/AboutUs'
import ContactUs from '../components/Home/ContactUs'
import Landing from '../components/Home/Landing'
import Premirering from '../components/Home/Premirering '
import Slideshow from '../components/Home/Slideshow'
import ComingSoon from '../components/Home/ComingSoon'





function Home() {
  
  return (
    <div>
        <Landing />
        {/* <Slideshow /> */}
      
        {/* {
          PremireringData.map((movie) => (
            <Premirering key={movie.id} title={movie.title} subtitle={movie.subtitle} url={movie.url}/>
          ))  
        } */}
       
        <Premirering />
        <ComingSoon />
        <br />
        <br />
        <Slideshow />
        <br />
        <AboutUs />
        <br />
        <br />
        <ContactUs />
        <br />
        <br />
        <br />
    </div>
  )
}


export default Home