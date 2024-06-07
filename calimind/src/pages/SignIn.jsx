import '../Css/singIn.css'

function SignIn() {
  return (
    <main>
      <section className="singin-section">
            <div className="singin-caixa-blue">
                <div className="singin-borda"></div>
                <form className="singin-section-1-div-texto">
                    <h1>Sign In</h1>
                    <input type="text" placeholder="João Carvalho"/>
                    <input type="email" placeholder="exemplo@gmail.com"/>
                    <input type="password" placeholder="123456Abc."/>
                    <a className='singin-a' href="Login"><h4>Já Possui Uma Conta? <span className='singin-span'>Login</span></h4></a>
                    <button className="button-white">Entrar</button>
                </form>
            </div>
        </section>
    </main>
  );
}

export default SignIn;