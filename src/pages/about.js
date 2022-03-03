import pic from './Bild.jpg'

const About = () =>{
    return(
        <>
        <div className='center'>
        <h2>Kort presentation om mig själv</h2>
        <img src={pic} alt="Bild på mig" height="300"/>
        <p>Jag heter Pontus Hylander och är 26 år gammal. Jag studerar nuvarande på edugrade sundsvall men bor i Ljusdal.</p>
        <p>Jag är en lugn människa som sitter ofta vid datorn eller spelar golf på sommaren.</p>
        </div>
            
        </>
    )
}
export default About;