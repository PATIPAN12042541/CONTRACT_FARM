import React from 'react'

const SidebarAdmin = () => {
  return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="#" className="brand-link">
              <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
              <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>
          <div className="sidebar">
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                      <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                  </div>
                  <div className="info">
                      <a href="#" className="d-block">User</a>
                  </div>
              </div>
              <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                      <li class="nav-item">
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <p>
                                      เมนู 1
                                      <i class="fas fa-angle-left right"></i>
                                  </p>
                              </a>
                              <ul class="nav nav-treeview">
                                  <li class="nav-item">
                                      <a href="/#" class="nav-link">
                                          <i class="far fa-circle nav-icon"></i>
                                          <p>เมนู 1.1</p>
                                      </a>
                                  </li>
                              </ul>
                          </li>
                      </li>
                      <li class="nav-item">
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <p>
                                      เมนู 2
                                      <i class="fas fa-angle-left right"></i>
                                  </p>
                              </a>
                              <ul class="nav nav-treeview">
                                  <li class="nav-item">
                                      <a href="/#" class="nav-link">
                                          <i class="far fa-circle nav-icon"></i>
                                          <p>เมนู 2.1</p>
                                      </a>
                                  </li>
                              </ul>
                          </li>
                      </li>
                  </ul>
              </nav>
          </div>
      </aside>
  )
}

export default SidebarAdmin