import './EventHistoryPage.css';
import userProfile from "../../../../core/assets/user_profile.svg";

export default function EventHistoryPage() {
  return (
      <>
        <nav className="appbar">
          <h1 className="appbar-title">Events History Page</h1>
        </nav>
          <section className="event_history_container">
              <div className="notification__item">
                  <figure>
                      <img src={userProfile} alt="user__image"/>
                  </figure>
                  <aside>
                      <p>Zaynab Azzahra recommended this online store to buy electronics</p>
                      <span>1 minutes ago &#8226; Electronics</span>
                  </aside>
              </div>
              <div className="notification__item">
                  <figure>
                      <img src={userProfile} alt="user__image"/>
                  </figure>
                  <aside>
                      <p>Zaynab Azzahra recommended this online store to buy electronics</p>
                      <span>1 minutes ago &#8226; Electronics</span>
                  </aside>
              </div>
              <div className="notification__item">
                  <figure>
                      <img src={userProfile} alt="user__image"/>
                  </figure>
                  <aside>
                      <p>Zaynab Azzahra recommended this online store to buy electronics</p>
                      <span>1 minutes ago &#8226; Electronics</span>
                  </aside>
              </div>
              <div className="notification__item">
                  <figure>
                      <img src={userProfile} alt="user__image"/>
                  </figure>
                  <aside>
                      <p>Zaynab Azzahra recommended this online store to buy electronics</p>
                      <span>1 minutes ago &#8226; Electronics</span>
                  </aside>
              </div>
              <div className="notification__item">
                  <figure>
                      <img src={userProfile} alt="user__image"/>
                  </figure>
                  <aside>
                      <p>Zaynab Azzahra recommended this online store to buy electronics</p>
                      <span>1 minutes ago &#8226; Electronics</span>
                  </aside>
              </div>
          </section>
      </>
  )
}
