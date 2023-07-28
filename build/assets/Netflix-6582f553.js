import{s as m,f as s,r as f,j as o,L as v}from"./index-ded45892.js";import{L as b,s as w,f as y}from"./firebase-config-30544efa.js";const j=m.div`
	.scrolled {
		display: flex;
	}
	nav {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background-color: #000;
		padding: 0 20px;
		transition: all 0.5s ease;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 68px;
		width: 100%;
		margin: 0 auto;
		max-width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		figure {
			width: 150px;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.left {
			display: flex;
			justify-content: center;
			align-items: center;
			ul {
				display: flex;
				justify-content: center;
				align-items: center;
				list-style: none;
				li {
					margin: 0 10px;
					a {
						color: #fff;
						text-decoration: none;
						font-size: 14px;
						font-weight: 400;
						&:hover {
							color: #fff;
							text-decoration: underline;
						}
					}
				}
			}
		}
		.right {
			display: flex;
			justify-content: center;
			align-items: center;

			.search {
				position: relative;
				button {
					position: absolute;
					top: 0;
					right: 0;
					width: 40px;
					height: 100%;
					background-color: transparent;
					border: none;
					outline: none;
					cursor: pointer;
					svg {
						color: #fff;
						font-size: 20px;
					}
				}
			}
			input {
				width: 200px;
				height: 30px;
				background-color: transparent;
				border: none;
				outline: none;
				color: #fff;
				font-size: 14px;
				font-weight: 600;
				padding: 0 10px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);
				transition: all 0.5s ease;
				&:focus {
					width: 300px;
				}
			}
			button {
				width: 40px;
				height: 40px;
				background-color: transparent;
				border: none;
				outline: none;
				cursor: pointer;
				svg {
					color: #eb0909;
					font-size: 20px;
				}
			}
		}
	}
	.show-search {
		input {
			width: 300px;
		}
	}
	@media (max-width: 768px) {
		nav {
			padding: 0 10px;
			.left {
				ul {
					display: none;
				}
			}
			.right {
				.search {
					button {
						svg {
							font-size: 16px;
						}
					}
				}
				button {
					svg {
						font-size: 16px;
					}
				}
			}
		}
	}
	@media (max-width: 425px) {
		nav {
			padding: 0 10px;
			.left {
				ul {
					display: none;
				}
			}
		}
	}
`;var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=s.createContext&&s.createContext(g),i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)},z=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function x(e){return e&&e.map(function(t,n){return s.createElement(t.tag,i({key:n},t.attr),x(t.child))})}function p(e){return function(t){return s.createElement(S,i({attr:i({},e.attr)},t),x(e.child))}}function S(e){var t=function(n){var r=e.attr,a=e.size,l=e.title,u=z(e,["attr","size","title"]),d=a||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),s.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:c,style:i(i({color:e.color||n.color},n.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),e.children)};return h!==void 0?s.createElement(h.Consumer,null,function(n){return t(n)}):t(g)}function N(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"}}]})(e)}function O(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const C=({isScrolling:e})=>{const t=[{name:"Home",path:"/netflix"},{name:"TV Show",path:"/tv"},{name:"Movies",path:"/movies"},{name:"Login",path:"/mylist"},{name:"My List",path:"/register"}],[n,r]=f.useState(!1),[a,l]=f.useState(!1);return o.jsx(j,{children:o.jsxs("nav",{className:`${e?"scrolled":""}`,children:[o.jsxs("div",{className:"left",children:[o.jsx("figure",{children:o.jsx("img",{onClick:()=>window.location.reload(),src:b,alt:"logo"})}),o.jsx("ul",{children:t.map((u,d)=>o.jsx("li",{children:o.jsx(v,{to:u.path,children:u.name})},d))})]}),o.jsxs("div",{className:"right",children:[o.jsxs("div",{className:`search ${n?"show-search":""}`,children:[o.jsx("button",{onFocus:()=>r(!0),onBlur:()=>{a||r(!1)},children:o.jsx(O,{})}),o.jsx("input",{type:"text",placeholder:"Titles, people, genres",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onBlur:()=>{r(!1),l(!1)}})]}),o.jsx("button",{onClick:()=>{w(y),localStorage.removeItem("userState"),window.location.reload()},className:"btn",children:o.jsx(N,{})})]})]})})},L=()=>{const[e,t]=f.useState(!1);return console.log(e),f.useEffect(()=>(window.onscroll=()=>{t(window.scrollY!==0)},()=>window.onscroll=null),[]),o.jsx("div",{children:o.jsx(C,{isScrolling:e})})};export{L as default};
