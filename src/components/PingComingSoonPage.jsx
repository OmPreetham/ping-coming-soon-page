import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const PingComingSoonPage = () => {
  // TODO: Implement Validation functionality using React

  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [notify, setNotify] = useState(false)

  console.log(email)

  const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/

  const toggleEmailChange = (value) => {
    setEmail(value)
    validateEmail(value)
  }

  const validateEmail = (email) => {
    if (email.match(EMAIL_REGEX)) {
      setError(false)
      return true
    }
    setError(true)
    setNotify(false)
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateEmail(email)) {
      setNotify(true)
      setEmail('')
      return
    }
    setNotify(false)
  }

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
                <div onSubmit={handleSubmit} className="form-wrapper">
                  <form action="/">
                    <label htmlFor="email">Email</label>
                    <input
                      className={`${error && 'input-error'}`}
                      onChange={(e) => toggleEmailChange(e.target.value)}
                      type="email"
                      id="email"
                      value={email}
                      name="email"
                      placeholder="Your email address..."
                    />
                    <button type="submit">Notify me</button>
                  </form>
                  {error && (
                    <p className="email-error">
                      <i>Please provide a valid email address</i>
                    </p>
                  )}
                  {notify && (
                    <p className="notify-email">
                      <i>
                        Thank you for subscribing. You'll get a notification to
                        your email when the product is launched
                      </i>
                    </p>
                  )}
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
