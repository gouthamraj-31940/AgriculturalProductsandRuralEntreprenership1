import axios from 'axios'
export default function Login() {

    function handleSubmit() {
    
    console.log({
        un:document.getElementById("idun").value,
        un:document.getElementsByName("pw")[0].value,
    })
    axios.post('https://localhost:8081/check',{
        un:document.getElementById("idun").value,
        un:document.getElementsByName("pw")[0].value,
    }).then((response)=>{
        console.log(response.data);
    })
    }
    function handleMouseOver()
    {
        document.getElementById("idLogin").style.boxShadow="10px 10px 15px grey";
    }
    function handleMouseLeave()
    {   
        document.getElementById("idLogin").style.boxShadow="0px 0px 0px grey";

    }
    
    return(
    
    <div id="idLogin" className="login-form" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
    <p>Login page</p>
    username: <input type="text" name="un" id="idun" /> <br/> 
    password: <input type="password" name="pw" id="idpw" /><br/><br/>
     <button onClick={handleSubmit}> Login </button>
    
    </div>
    
    );
    
    }