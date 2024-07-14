# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, REST API is included in this folder and run it by using the following CLI command in the directory where the
REST API directory is located:

python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)

# BrainsterProjects_AleksandraJensenFE18

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.brainster.co/Aleksandra.Mishevska.Jensen-FE18/brainsterprojects_aleksandrajensenfe18/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

<div align="center">
  <h1>Brainster Project 02 (Project Safe Web) - Aleksandra Mishevska Jensen FE18</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>  
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#description">Description</a></li>
    <li><a href="#build-with">Build with</a></li>
    <li><a href="#login-functionality">Login Functionality</a></li>
    <li><a href="#improvments">Improvments</a></li>   
  </ol>
</details>
<h2 id="description">Technologies used in order to create this page.</h2>
<p>Project Safe Web is second project that I worked on as studen at the Brainster Front-end Academy.<p>

<p>This UI project is about a web application that focuses on educating how to have a safe
web experience. We were given a Figma project in order to familiarize ourself with the expected design and pages.</p>

 <p>All the content(images, icons, text, headlines, links) in dowloaded from Firna except for the youtube videos(used in home page and comments section).  
 All the data that seems to be fetched from some backend, are hard-coded in the code itself.</p>

<h3>Pages</h3>

<b>Home-page(logo link) </b>:youtube video as hero banner and hardcoded cards in html.

<b>Informiraj se ("Сè што треба дазнаеш) -page</b>: The data for the cards come from cardsList.js file.
When click on card modal opens with same date as the cards;
New comments can be added and vissible when the comment is posted.
Two comments from different logged in users are hardcoded in index.html

<b>Diskusii</b> Discussion board shows with Few Experiences from different logged in users which are hardcoded in experience.js

<b>Profile</b> - Can be seen only for users. When user login profile link shows. Here user can add/edit email and only edit birth year.
When user clicks on 6 video cards in informiraj se page and leaves one comment in card modal different Badges showes accordingly.

<b>Log out</b> - click on user image thumbnail in the top-right corner in the nav.

<h4>Hardcoded content or added without any additional functionality</h4>
<p> Google/Apple/TikTok authentication action as well as social icons in the footer  are
not  linked to any specific action.
The “Запомни ме” checkbox, zaboravi lozinka, magnifying glass icon, language change  not introduce any additional application behavior.
Add(+), comments and reactions in expereince cards.

</p>
<h2 id="login-functionality">Login Functionality</h2>

In order to enable the login functionality, you need to set up a simple REST API locally
written in Python with the Flask library.
For this, you need to have Python installed locally(go to the “Files” section in the page and you will most probably need the “Windowsinstaller (64-bit)” if you are running locally on Windows). The version which was used for
developing the application 3.12.3. After installing Python, download the
<a href="https://drive.google.com/file/d/1f7ogsElPFmA0k4aMGy5NTq2IMB8cvOwx/view?pli=1">REST API </a> download locally and then run it by using the following CLI command in the directory where the extracted REST API directory is located
python '.\REST API\authenticator.py'

When you execute this command, if you get the following error:
“No module named ‘flask_cors’”, then you should install the flask library
and/or the flask_cors by running the following CLI commands:

pip install flask
pip install flask_cors

and then retry the python command from above.

For confirming that the authenticator REST API is
up-and-running, you should see the following output in the terminal:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 138-088-340

<h2 id="improvments">Thing that shoud be done.</h2>
There are few things that are not done in order for the project to be fully complited in interest of time

-Responsive footer
-Input field style in profile page
-User image thumbnail white background.
-More intuitive aproach for Logout button.
-videos in all card modals.
-videos instead of images in inform page.

<h2 id="build-with">Technologies used in order to create this page.</h2>

- ![HTML](https://img.shields.io/badge/-HTML5-e34c26?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-533B78?logo=bootstrap&logoColor=white)
- ![Javascript](https://img.shields.io/badge/-Javascript-EFD81D?logo=javascript&logoColor=white)
