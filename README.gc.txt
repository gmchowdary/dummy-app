ng new Demon

ng generate component components/hrms

ng generate component components/hrms/main-page-structure
ng generate component components/hrms/main-page-structure/nav-bar-top
ng generate component components/hrms/main-page-structure/footer
ng generate component components/hrms/main-page-structure/side-menu-left
ng generate component components/hrms/main-page-structure/side-menu-right

ng generate component components/hrms/auth-page-structure
ng generate component components/hrms/auth-page-structure/signin-form
ng generate component components/hrms/auth-page-structure/signup-form

Angular Live Reload problem
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
