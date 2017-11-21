import './style.css'
import content from './content'
import LogoWebpack from './logo-webpack.svg'
import 'font-awesome/less/font-awesome.less'
import './components/App/App.less'
import './vendors/Bulma.sass'

document.write(`<div class="logo">webpack</div>`)
document.write(`<img width="430px" height="120px" src=${LogoWebpack} />`)
document.write(content)
document.write(`<br/><i class="fa fa-address-book-o" aria-hidden="true"></i>`)
document.write(`
<br/>
<div class="field">
<label class="label">Email</label>
<div class="control has-icons-left has-icons-right">
  <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
  <span class="icon is-small is-left">
    <i class="fa fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fa fa-warning"></i>
  </span>
</div>
<p class="help is-danger">This email is invalid</p>
</div>

<br>
<div class="is-divider" data-content="OR"></div>

`)
