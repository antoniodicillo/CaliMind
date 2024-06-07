import '../Css/login.css'

function Login() {
  return (
    <main>
      <section className="login-section">
            <div className="login-caixa-blue">
                <div className="login-borda"></div>
                <form className="login-section-1-div-texto">
                    <h1>Login</h1>
                    <input type="email" placeholder="exemplo@gmail.com"/>
                    <input type="password" placeholder="123456Abc."/>
                    <a className='login-a' href="/SignIn"><h4>Não Tem Conta? <span className='login-span'>Sign In</span></h4></a>
                    <button className="button-white">Entrar</button>
                </form>
            </div>
        </section>
    </main>
  );
}

export default Login;