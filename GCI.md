Welcome to Terasology Google Code-in 2017 Showcase site!

This page is created to serve as a tutorial on how to create content for the Google Code-in 2017 showcase page.

# Installation
## Prerequisites
### Mac OSX/Linux
This site is built with [jekyll](https://jekyllrb.com/) which comes as a ruby gem. So you need to install Ruby to get started.

[RVM](https://rvm.io/) make it easy to install and manage different versions of Ruby. Install Ruby using RVM by running the following commands

```
~ $ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

~ $ \curl -sSL https://get.rvm.io | bash -s stable --ruby
```

This installs RVM with the latest stable version of Ruby

**Ubuntu users:** You may need to enable `Run command as a login shell` in Ubuntu's Terminal, under _Edit > Profile Preferences > Title and Command_. Then close the terminal and reopen it. You may also want to run `source ~/.rvm/scripts/rvm` to load RVM.

To install ruby gems from a Gemfile you would need `bundler` which by default comes with RVM ruby but if isn't present you would need to install it using the command `gem install bundler`.

### Windows

If on Windows, you can follow [this guide](https://jekyllrb.com/docs/windows/) on how to install [jekyll](https://jekyllrb.com/).

## Deployment
After you have installed Ruby and cloned the repository deploy the application running the following commands
```
# Enter the app directory
~ $ cd movingblocks.github.com

# Install gems using bundler
~/cd movingblocks.github.com $ bundle install

# Build site starting jekyll server
~/cd movingblocks.github.com $ bundle exec jekyll serve
```

You are ready to go! Browse to `http://localhost:4000`


Source: [FOSSASIA](https://github.com/fossasia/gci16.fossasia.org/wiki/Installation)

# Adding a mentor

Create a <github username>.md file in `_mentors`, you need to use the following format and fill in the information accordingly.

```yaml
---
name: Mentor's name
github: Mentor's GitHub username
timezone: Mentor's timezone
country: Mentor's countrycode
---  
```
**NOTE**
- You can check your country code and timezone from this [Wikipedia page](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Country code is written `CC` and Timezone is `TZ`
