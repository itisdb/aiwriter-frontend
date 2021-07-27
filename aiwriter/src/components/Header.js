import propTypes from "prop-types";
export const Header = (props) => {
  return (
    <header className="header-global">
      <nav
        id="navbar-main"
        aria-label="Primary navigation"
        className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent"
      >
        <div className="container position-relative">
          <a
            className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4"
            href="./index.html"
          >
            <img
              className="navbar-brand-dark"
              src="./assets/img/brand/dark.svg"
              alt="Logo light"
            />
            <img
              className="navbar-brand-light"
              src="./assets/img/brand/dark.svg"
              alt="Logo dark"
            />
          </a>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a
                    href="./index.html"
                    className="navbar-brand shadow-soft py-2 px-3 rounded border border-light"
                  >
                    <img
                      src="./assets/img/brand/dark.svg"
                      alt="Themesberg logo"
                    />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <a
                    href="#navbar_global"
                    className="fas fa-times"
                    data-toggle="collapse"
                    data-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    title="close"
                    aria-label="Toggle navigation"
                  />
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <span className="nav-link-inner-text">Pages</span>
                  <span className="fas fa-angle-down nav-link-arrow ml-2" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="./html/pages/about.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./html/pages/pricing.html"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./html/pages/contact.html"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./html/pages/sign-in.html"
                    >
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="./html/pages/sign-up.html"
                    >
                      Sign up
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mega-dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <span className="nav-link-inner-text">Components</span>
                  <span className="fas fa-angle-down nav-link-arrow ml-2" />
                </a>
                <div className="dropdown-menu">
                  <div className="row">
                    <div className="col-lg-6 inside-bg d-none d-lg-block">
                      <div className="justify-content-center bg-primary text-white">
                        <div className="px-6 pb-5 pt-3">
                          <img
                            src="./assets/img/megamenu-image.jpg"
                            alt="Pixel Components"
                          />
                        </div>
                        <div className="z-2 pb-4 text-center">
                          <a
                            href="./html/components/all.html"
                            className="btn btn-primary mb-2 mb-sm-0 mr-3 text-secondary"
                          >
                            <span className="mr-1">
                              <span className="fas fa-th-large" />
                            </span>
                            All components
                          </a>
                          <a
                            href="https://themesberg.com/docs/neumorphism-ui/components/alerts"
                            target="_blank"
                            className="btn btn-primary mb-2 mb-sm-0"
                          >
                            <span className="mr-1">
                              <span className="fas fa-book" />
                            </span>
                            Docs v1.0
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col pl-0">
                      <ul className="list-style-none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/accordions.html"
                          >
                            Accordions
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/alerts.html"
                          >
                            Alerts
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/badges.html"
                          >
                            Badges
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/bootstrap-carousels.html"
                          >
                            Bootstrap Carousels
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/breadcrumbs.html"
                          >
                            Breadcrumbs
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/buttons.html"
                          >
                            Buttons
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="https://themesberg.com/docs/neumorphism-ui/plugins/jquery-counters/"
                            target="_blank"
                          >
                            Counters{" "}
                            <span className="badge badge-dark ml-3">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/cards.html"
                          >
                            Cards
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="https://themesberg.com/docs/neumorphism-ui/components/e-commerce/"
                            target="_blank"
                          >
                            E-commerce{" "}
                            <span className="badge badge-dark ml-3">Pro</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col pl-0">
                      <ul className="list-style-none">
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/forms.html"
                          >
                            Forms
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="https://themesberg.com/docs/neumorphism-ui/components/icon-boxes/"
                            target="_blank"
                          >
                            Icon Boxes{" "}
                            <span className="badge badge-dark ml-3">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/modals.html"
                          >
                            Modals
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/navs.html"
                          >
                            Navs
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="https://themesberg.com/docs/neumorphism-ui/plugins/owl-carousel/"
                            target="_blank"
                          >
                            Owl Carousels{" "}
                            <span className="badge badge-dark ml-3">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/pagination.html"
                          >
                            Pagination
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/popovers.html"
                          >
                            Popovers
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/progress-bars.html"
                          >
                            Progress Bars
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col pl-0">
                      <ul className="list-style-none">
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="https://themesberg.com/docs/neumorphism-ui/components/icon-boxes/#steps"
                            target="_blank"
                          >
                            Steps{" "}
                            <span className="badge badge-dark ml-3">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/tables.html"
                          >
                            Tables
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/tabs.html"
                          >
                            Tabs
                          </a>{" "}
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/toasts.html"
                          >
                            Toasts
                          </a>{" "}
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="https://themesberg.com/docs/neumorphism-ui/components/timelines/"
                            target="_blank"
                          >
                            Timelines{" "}
                            <span className="badge badge-dark ml-3">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/tooltips.html"
                          >
                            Tooltips
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./html/components/typography.html"
                          >
                            Typography
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="https://demo.themesberg.com/neumorphism-ui-pro/html/components/widgets.html"
                            target="_blank"
                          >
                            Widgets{" "}
                            <span className="badge badge-dark ml-3">Pro</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <span className="nav-link-inner-text">Support</span>
                  <span className="fas fa-angle-down nav-link-arrow ml-2" />
                </a>
                <div className="dropdown-menu dropdown-menu-lg">
                  <div className="col-auto px-0" data-dropdown-content>
                    <div className="list-group list-group-flush">
                      <a
                        href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/"
                        target="_blank"
                        className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4"
                      >
                        <span className="icon icon-sm icon-secondary">
                          <span className="fas fa-file-alt" />
                        </span>
                        <div className="ml-4">
                          <span className="text-dark d-block">
                            Documentation
                            <span className="badge badge-sm badge-secondary ml-2">
                              v1.0
                            </span>
                          </span>
                          <span className="small">Examples and guides</span>
                        </div>
                      </a>
                      <a
                        href="https://github.com/themesberg/th-neumorphism-ui-pro/issues"
                        target="_blank"
                        className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4"
                      >
                        <span className="icon icon-sm icon-secondary">
                          <span className="fas fa-microphone-alt" />
                        </span>
                        <div className="ml-4">
                          <span className="text-dark d-block">Support</span>
                          <span className="small">
                            Looking for answers? Ask us!
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro"
              target="_blank"
              className="btn btn-primary text-secondary mr-3"
            >
              <i className="far fa-paper-plane mr-2" /> Upgrade to PRO
            </a>
            <a
              href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/"
              target="_blank"
              className="btn btn-primary d-none d-md-inline-block"
            >
              <i className="fas fa-book" /> Docs v1.0
            </a>
            <button
              className="navbar-toggler ml-2"
              type="button"
              data-toggle="collapse"
              data-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
Header.defaultProps = {
  Title: "Title",
};
Header.propTypes = {
  Title: propTypes.string.isRequired,
};
