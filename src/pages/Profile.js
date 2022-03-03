import box from "./profilebox.css"
const Profile = () =>{
    return(
    <>        
    <div class="box">    
        <h2>Mitt projekt</h2>
        <p>Här är ett av mitt skolprojekt tryck på mer info för att läsa om det</p>       
         <a class="button" href="#popup1">Mer info</a>    
        </div>  
  
  <div id="popup1" class="overlay">
    <div class="popup">
        <h2>Projekt namn</h2>
        <a class="close" href="#">&times;</a>
      <div class="content">
        Mer info om projektet
      </div>
    </div>
  </div>
        
        </>
    )
}
export default Profile;