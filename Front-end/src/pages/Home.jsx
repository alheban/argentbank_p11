
import iconChat from "../assets/icon-chat.webp";
import iconMoney from "../assets/icon-money.webp";
import iconSecurity from "../assets/icon-security.webp";
import FeatureHome from "../common/components/FeatureHome";

function Home() {
    return (
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <h2 className="subtitle">No fees.</h2>
            <h2 className="subtitle">No minimum deposit.</h2>
            <h2 className="subtitle">High interest rates.</h2>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureHome
                    image={iconChat}
                    alt='Chat Icon'
                    title='You are our #1 priority'
                    text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
                />
                <FeatureHome
                    image={iconMoney}
                    alt='Money Icon'
                    title='More savings means higher rates'
                    text='The more you save with us, the higher your interest rate will be!'
                />
                <FeatureHome
                    image={iconSecurity}
                    alt='Security Icon'
                    title='Security you can trust'
                    text='We use top of the line encryption to make sure your data and money is always safe.'
                />
            </section>
      </main>
    );
  }
  
  export default Home;