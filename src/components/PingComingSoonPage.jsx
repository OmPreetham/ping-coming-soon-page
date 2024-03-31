import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PingComingSoonPage = () => {
  // TODO: Implement Validation functionality using React
  // TODO: Style Validation Status Styles in CSS

  return (
    <div className="wrapper">
      <header>
        <h1>
          PING<span>.</span>
        </h1>
      </header>
      <main>
        <div className="layout-wrapper">
          <section>
            <div className="announcement-wrapper">
              <article>
                <div className="title-wrapper">
                  <p>
                    We are launching <span>soon!</span>
                  </p>
                  <p>Subscribe and get notified</p>
                </div>
              </article>
              <article>
                <div className="form-wrapper">
                  <form action="/">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address..."
                    />
                    <button type="submit">Notify me</button>
                  </form>
                </div>
              </article>
            </div>
          </section>
          <section>
            <div className="hero-wrapper">
              <img
                src="/images/illustration-dashboard.png"
                alt="Dashboard Illustration"
              />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className="footer-wrapper">
          <div className="social-wrapper">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="copyright-wrapper">
            <p>&copy; Copyright Ping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default PingComingSoonPage
