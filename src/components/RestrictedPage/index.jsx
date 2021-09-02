import "./style.css"

const RestrictedPage = ({isLoggedIn, user, Login, Logout}) =>{

    return(
        <>
            {isLoggedIn ? (

				<div className="box">
					<h2 className="text">
						Bem-vindo, {user}
					</h2>

					<button 
						className = "logout" 
						onClick   = {Logout}
						style     = {{
							backgroundColor:"#fb2727",
							border: "3px solid #922525",
							boxShadow: "0px 5px 50px -25x #ff0000c9",
						}}
					>
					Sair 
					</button>
				</div>

				):(

				<div className="box">
					<h3 className="text">
						Você não pode acessar esta página
					</h3>

					<button 
						className = "login"
						onClick   = {Login}
						style     = {{
							backgroundColor: "#09ff00",
							boxShadow: "0px 5px 50px -25px #51ff00c9",
							border: "3px solid #29b124"		
						}}
					>
					Entrar
					</button>
				</div>
				
			)}
        </>
    )
}

export default RestrictedPage