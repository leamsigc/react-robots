(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(7),i=t.n(c),m=(t(13),t(1)),r=t(2),l=t(4),o=t(3),d=t(5),u=[{id:1,name:"leamsigc",userName:"leamsigc",email:"lemsigc@hotmail.com"},{id:2,name:"ledasdasamsigc",userName:"leamasdasdsigc",email:"lemsigc@hotmaasdasdil.com"},{id:3,name:"leasdasdasamsigc",userName:"leamsiasdasdasdcgc",email:"lemsigc@hotmail.comcdcdcdc"},{id:4,name:"leasdasdasdamsigc",userName:"leamsigcasdasdasd",email:"lemsigc@hotmaiasdasdasl.com"},{id:5,name:"adadsadaleamsigc",userName:"leamasdasdasdsigc",email:"lemsigc@hotmail.asdadasdcom"},{id:6,name:"laaaaaeamsigc",userName:"leaawwwwamsigc",email:"lemsigc@hotsdasdasdmail.com"},{id:7,name:"asdasdleamsigc",userName:"leaffdsfdsfamsigc",email:"lemsigc@hotmaidfdfdfdfl.com"},{id:8,name:"sdfsdfleamsigc",userName:"ledfdfdfamsigc",email:"lemsigc@hotmdfdfdfail.com"},{id:9,name:"lsdfdfbfbeamsigc",userName:"leamsffddfdfigc",email:"lemsigc@hotmailfdfdf.com"}],h=(t(15),function(e){function a(){return Object(m.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"title"},s.a.createElement("h1",null,"Hello from the robot app"))}}]),a}(n.Component)),f=function(e){function a(){return Object(m.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.id,t=e.name,n=e.userName,c=e.email;return s.a.createElement("div",{className:"card",id:a},s.a.createElement("img",{className:"card__img",src:"https://robohash.org/".concat(t,"?200x200"),alt:"simple Robot"}),s.a.createElement("div",{className:"card_info"},s.a.createElement("h2",null,t),s.a.createElement("p",null,n),s.a.createElement("p",null,c)))}}]),a}(n.Component),g=(t(17),function(e){function a(){return Object(m.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-box"},s.a.createElement("input",{onChange:this.props.searchChange,className:"search-input",type:"text",placeholder:"search ..."}))}}]),a}(n.Component)),p=function(e){return s.a.createElement("div",{className:"card__container"},e.children)},b=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(l.a)(this,Object(o.a)(a).call(this))).onSearchChange=function(a){e.setState({search:a.target.value})},e.state={robot:u,search:""},e}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robot.filter(function(a){return a.name.toLowerCase().includes(e.state.search.toLowerCase())});return s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),s.a.createElement(g,{searchChange:this.onSearchChange}),s.a.createElement(p,null,a.map(function(e){return s.a.createElement(f,{name:e.name,userName:e.userName,email:e.email,id:e.id})})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.6cfe9cd9.chunk.js.map