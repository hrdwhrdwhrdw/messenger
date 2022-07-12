"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[652],{17284:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(1413),r=(n(72791),n(16871)),a=n(60364),i=n(39696),o=n(80184),c=function(e){return{isAuth:(0,i.Od)(e)}};function u(e){return(0,a.$j)(c)((function(t){return t.isAuth?(0,o.jsx)(e,(0,s.Z)({},t)):(0,o.jsx)(r.Fg,{to:"/login"})}))}},74321:function(e,t,n){n.d(t,{Z:function(){return a}});n(72791);var s=n(56139),r=n(80184);function a(e){return(0,r.jsxs)("div",{className:"button r",id:"button",children:[(0,r.jsx)(s.Z,{name:e.name,className:"checkbox",component:"input",type:"checkbox"}),(0,r.jsx)("div",{className:"knobs"}),(0,r.jsx)("div",{className:"layer"})]})}},8210:function(e,t,n){n.d(t,{t:function(){return l}});var s=n(1413),r=n(45987),a=(n(72791),n(9765)),i=n(5508),o="Input_error__O0Hvc",c=n(80184),u=["input","meta"],l=function(e){var t=e.input,n=e.meta,l=(0,r.Z)(e,u),d=(null===n||void 0===n?void 0:n.touched)&&(null===n||void 0===n?void 0:n.error),p={padding:"5px",fontSize:"12px",width:"100%",color:"#61656e",fontWeight:"bold",backgroundColor:"#151922",borderRadius:"5px",border:"none",":before":{display:"none"},"&::after":{border:"1px solid"+i.Wd,backgroundColor:i.Wd}};return(0,c.jsxs)("div",{className:d?o:null,children:[(0,c.jsx)(a.Z,(0,s.Z)((0,s.Z)({sx:p},t),l)),(0,c.jsx)("div",{children:d?(0,c.jsx)("span",{children:n.error}):null})]})}},16530:function(e,t,n){n.d(t,{v:function(){return u}});var s=n(1413),r=n(45987),a=(n(72791),n(86073)),i="Textarea_error__ca4In",o=n(80184),c=["input","meta"],u=function(e){var t=e.input,n=e.meta,u=(0,r.Z)(e,c),l=n.touched&&n.error;return(0,o.jsxs)("div",{className:l?i:"textfield-container",children:[(0,o.jsx)(a.Z,(0,s.Z)((0,s.Z)({id:"standard-multiline-flexible",multiline:!0,maxRows:4,variant:"standard",sx:{"& .MuiInputBase-root":{"& textarea":{width:"100%"},fontSize:"0.7rem",fontWeight:"bold","&::before":{border:"none",display:"none"},color:"#72727a","&:after":{display:"none"}}}},t),u)),(0,o.jsx)("div",{children:l?(0,o.jsx)("span",{children:n.error}):null})]})}},5508:function(e,t,n){n.d(t,{Wd:function(){return s},tI:function(){return r},Cj:function(){return a}});var s="#7663fd",r="#321738",a="#fff"},42660:function(e,t,n){n.d(t,{C:function(){return r},P:function(){return a}});var s=n(59566),r=(0,s.D)(100),a=(0,s.D)(50)},22652:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var s,r=n(1413),a=n(72791),i=n(95190),o=n(17237),c=n(87488),u=n(80184),l=function(e){return(0,u.jsxs)("div",{className:"profile__post",children:[(0,u.jsx)("img",{src:"https://sunmarsol.ru/wp-content/uploads/2019/12/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA.jpg",alt:"",className:"post__image"}),(0,u.jsxs)("div",{className:"post__info",children:[(0,u.jsx)("div",{className:"post__description",children:e.message}),(0,u.jsxs)("div",{className:"post__button-container"+(0!==e.likesCount?" wider":""),children:[e.isLiked?(0,u.jsxs)(i.hU,{className:"like-button is-active",onClick:function(){return e.decreaseLikesCount(e.id)},children:[(0,u.jsx)(o.Z,{className:"material-icons is-liked bouncy"}),(0,u.jsx)("span",{className:"like-overlay"})]}):(0,u.jsxs)(i.hU,{className:"like-button",onClick:function(){return e.increaseLikesCount(e.id)},children:[(0,u.jsx)(c.Z,{className:"material-icons not-liked bouncy"}),(0,u.jsx)("span",{className:"like-overlay"})]}),0!==e.likesCount&&(0,u.jsx)("span",{className:"post__like-counter"+(e.isLiked?" liked":""),children:e.likesCount})]})]})]})},d=n(99609),p=n(90704),f=n(56139),m=n(42660),x=n(16530),h="AddPostForm_addPostButton__KjWJ3",_=(0,p.Z)({form:"addPost"})((function(e){var t=e.handleSubmit;return(0,u.jsxs)("form",{onSubmit:t,children:[(0,u.jsx)(f.Z,{className:"posts__textarea",name:"newPost",placeholder:"type new post...",validate:[m.C],component:x.v}),(0,u.jsx)("div",{className:"posts__button",children:(0,u.jsx)(d.Z,{type:"submit",className:h,children:"Add post"})})]})})),j=function(e){var t=function(t){e.increaseLikesCount(t)},n=function(t){e.decreaseLikesCount(t)};return(0,u.jsxs)("div",{className:"profile__posts",children:[(0,u.jsx)(_,{onSubmit:function(t){t.newPost&&(e.addPost(t.newPost),e.reset("addPost"))}}),(0,u.jsx)("ul",{className:"profile__postlist",children:e.posts.map((function(e){return(0,u.jsx)(l,{id:e.id,message:e.message,likesCount:e.likesCount,isLiked:e.isLiked,increaseLikesCount:t,decreaseLikesCount:n},e.id)}))})]})},v=n(20713),b={addPostActionCreator:function(e){return{type:v.F9,postText:e}},setUserProfile:function(e){return{type:v.PU,profile:e}},setStatus:function(e){return{type:v.d0,status:e}},savePhotoSuccess:function(e){return{type:v.zj,photos:e}},saveProfileInfoSuccess:function(e){return{type:v.LZ,profile:e}},increaseLikesCount:function(e){return{type:v.t6,id:e}},decreaseLikesCount:function(e){return{type:v.qb,id:e}}},N=n(60364),k=n(92381),g=function(e){return e.profilePage.profile},Z=function(e){return e.profilePage.status},w=function(e){return e.auth.userId},y=function(e){return e.auth.isAuth},C=function(e){return e.profilePage.posts},P=(0,N.$j)((function(e){return{posts:C(e)}}),{addPost:b.addPostActionCreator,reset:k.mc,increaseLikesCount:b.increaseLikesCount,decreaseLikesCount:b.decreaseLikesCount})(j),S=n(70885),O=n(45987),D=n(37078),L=n(5508),A=["updateStatus","isOwner"],I=function(e){var t=e.updateStatus,n=e.isOwner,s=(0,O.Z)(e,A),i=(0,a.useState)(!1),o=(0,S.Z)(i,2),c=o[0],l=o[1],d=(0,a.useState)(s.status),p=(0,S.Z)(d,2),f=p[0],m=p[1];(0,a.useEffect)((function(){m(s.status)}),[s.status]);var x=function(e){m(e.currentTarget.value)};return(0,u.jsx)("div",{className:"profile__status-inner",children:n?c?(0,u.jsx)(D.Z,(0,r.Z)({sx:{padding:"0 5px",fontSize:"14px",width:"100%",color:"#61656e",fontWeight:"bold",backgroundColor:"#151922",borderRadius:"5px",border:"none",":before":{display:"none"},"&::after":{display:"none"}},type:"text",value:f,autoFocus:!0,onChange:x,onBlur:function(){l(!1),t(f)}},s)):(0,u.jsx)("div",{className:"profile__status-text",onChange:x,onClick:function(){l(!0)},style:{color:L.Wd,backgroundColor:L.tI,padding:"4px",borderRadius:"5px"},children:s.status||"set status"}):(0,u.jsx)("span",{children:s.status||"User has no status"})})},B=n(13901),F=n(17581),M=n(74321),W=n(42093),E=["title","titleId"];function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},U.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function q(e,t){var n=e.title,r=e.titleId,i=T(e,E);return a.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,s||(s=a.createElement("path",{d:"M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"})))}var z=a.forwardRef(q),J=(n.p,n(6776)),R=n(74668),V=n(83854),Y=n(21880),$=n(25758),H=n(21164),K=function(e){switch(e){case"vk":return(0,u.jsx)(z,{className:"contact__icon contact__icon_vk"});case"facebook":return(0,u.jsx)(W.Z,{className:"contact__icon"});case"twitter":return(0,u.jsx)(R.Z,{className:"contact__icon"});case"instagram":return(0,u.jsx)(Y.Z,{className:"contact__icon"});case"youtube":return(0,u.jsx)(V.Z,{className:"contact__icon"});case"github":return(0,u.jsx)($.Z,{className:"contact__icon"});case"website":return(0,u.jsx)(J.Z,{className:"contact__icon"});case"mainLink":return(0,u.jsx)(H.Z,{className:"contact__icon"})}},G=n(8210),Q=(0,p.Z)({form:"profile-desc"})((function(e){var t=e.handleSubmit,n=e.error,s=e.profile,r=e.isOwner;return(0,u.jsxs)(F.Z,{onSubmit:t,children:[n&&(0,u.jsx)("div",{className:"summary",children:(0,u.jsx)("div",{children:n})}),(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[(0,u.jsx)("span",{children:"Full Name:"}),(0,u.jsx)(f.Z,{className:"contact__input",name:"fullName",component:G.t})]}),(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[(0,u.jsx)("span",{children:"Needs a job:"}),(0,u.jsx)(M.Z,{name:"lookingForAJob"})]}),(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[(0,u.jsx)("span",{children:"My skills:"}),(0,u.jsx)(f.Z,{className:"contact__input",name:"lookingForAJobDescription",component:G.t})]}),(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[(0,u.jsx)("span",{children:"About me:"}),(0,u.jsx)(f.Z,{className:"contact__input",name:"aboutMe",component:G.t})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{className:"contact__title",children:"My contacts:"}),Object.keys(s.contacts).map((function(e){return(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[K(e),(0,u.jsxs)("span",{children:[e,":"]}),(0,u.jsx)(f.Z,{name:"contacts.".concat([e]),component:G.t,className:"contact__input"},e)]})})),(0,u.jsx)("div",{children:r&&(0,u.jsx)(d.Z,{type:"submit",className:"profile__button",children:"Save"})})]})]})})),X=n(1428),ee=n(5130),te=function(e){var t=e.contactTitle,n=e.contactValue;return(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[K(t),(0,u.jsxs)("span",{children:[t,":"]}),(0,u.jsx)("span",{children:n||(0,u.jsx)(ee.Z,{sx:{color:L.Wd}})})]})},ne=function(e){var t=e.goToEditMode,n=e.isOwner,s=e.profile;return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"profile__contact contact__item",children:(0,u.jsx)("span",{className:"profile__name",children:s.fullName})}),(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[(0,u.jsx)("span",{children:"Needs a job:"}),(0,u.jsx)("span",{children:s.lookingForAJob?(0,u.jsx)(X.Z,{sx:{color:L.Wd}}):(0,u.jsx)(ee.Z,{sx:{color:L.Wd}})})]}),(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[(0,u.jsx)("span",{children:"My skills:"}),(0,u.jsx)("span",{children:s.lookingForAJobDescription})]}),(0,u.jsxs)("div",{className:"profile__contact contact__item",children:[(0,u.jsx)("span",{children:"About me:"}),(0,u.jsx)("span",{children:s.aboutMe})]}),(0,u.jsxs)("div",{className:"profile__contacts",children:[(0,u.jsx)("span",{className:"contact__title",children:"My contacts:"}),Object.keys(s.contacts).map((function(e){return(0,u.jsx)(te,{contactTitle:e,contactValue:s.contacts[e]},e)})),n&&(0,u.jsx)(d.Z,{type:"submit",onClick:t,className:"profile__button",children:"Edit"})]})]})},se=function(e){var t=(0,a.useState)(!1),n=(0,S.Z)(t,2),s=n[0],i=n[1],o=function(t){var n=t.target;n.files.length&&e.updatePhoto(n.files[0])};return(0,u.jsxs)("div",{className:"profile__info",children:[(0,u.jsxs)("div",{className:"profile__photo",children:[(0,u.jsx)("img",{src:e.profile.photos.large||B,alt:"",className:"profile__photo-image"}),(0,u.jsx)("div",{className:"profile__update-photo",children:e.isOwner&&(0,u.jsxs)(d.Z,{variant:"raised",className:"profile__update-button",children:[(0,u.jsx)("label",{htmlFor:"raised-button-file",children:"Upload photo"}),(0,u.jsx)("input",{accept:"image/*",id:"raised-button-file",multiple:!0,type:"file",onChange:function(e){return o},hidden:!0})]})})]}),(0,u.jsxs)("div",{className:"profile__info-container",children:[(0,u.jsx)("div",{className:"profile__status",children:(0,u.jsx)(I,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner})}),s?(0,u.jsx)(Q,(0,r.Z)({initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.setProfile(t).then((function(){return i(!1)}))},isOwner:e.isOwner},e)):(0,u.jsx)(ne,{profile:e.profile,goToEditMode:function(){return i(!0)},isOwner:e.isOwner})]})]})},re=n(60668),ae=function(e){var t=e.isOwner,n=e.profile,s=e.status,r=e.updateStatus,a=e.updatePhoto,i=e.setProfile;return n?(0,u.jsxs)("div",{className:"profile",children:[(0,u.jsx)(se,{isOwner:t,profile:n,status:s,updateStatus:r,updatePhoto:a,setProfile:i}),(0,u.jsx)(P,{})]}):(0,u.jsx)(re.Z,{})},ie=n(42982),oe=n(15861),ce=n(87757),ue=n.n(ce),le=n(26229),de=function(e){return(0,oe.Z)(ue().mark((function t(){var n;return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.e.get("profile/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},pe=function(e){return(0,oe.Z)(ue().mark((function t(){var n;return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.e.get("profile/status/".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},fe=function(e){return le.e.put("profile/status",{status:e})},me=function(e){return(0,oe.Z)(ue().mark((function t(){var n,s;return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",e),t.next=4,le.e.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return s=t.sent,t.abrupt("return",s.data);case 6:case"end":return t.stop()}}),t)})))()},xe=function(e){return le.e.put("profile",e)},he=n(62317),_e=function(e){return function(){var t=(0,oe.Z)(ue().mark((function t(n){var s;return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(e);case 2:s=t.sent,n(b.setUserProfile(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},je=n(17284),ve=n(87781),be=n(16871),Ne=(0,ve.qC)((0,N.$j)((function(e){return{profile:g(e),status:Z(e),authUserId:w(e),isAuth:y(e)}}),{getProfileData:_e,requestStatus:function(e){return function(){var t=(0,oe.Z)(ue().mark((function t(n){var s,r;return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(e);case 2:s=t.sent,r=s.data,n(b.setStatus(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=(0,oe.Z)(ue().mark((function t(n){return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe(e);case 2:t.sent.data.resultCode===he.Y.Success&&n(b.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updatePhoto:function(e){return function(){var t=(0,oe.Z)(ue().mark((function t(n){var s;return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me(e);case 2:(s=t.sent).resultCode===he.Y.Success&&n(b.savePhotoSuccess(s.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setProfile:function(e){return function(){var t=(0,oe.Z)(ue().mark((function t(n,s){var r,a;return ue().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s().auth.userId,t.next=3,xe(e);case 3:if((a=t.sent).data.resultCode!==he.Y.Success){t.next=8;break}n(_e(r)),t.next=10;break;case 8:return n((0,k.GK)("profile-desc",{_error:(0,ie.Z)(a.data.messages)})),t.abrupt("return",Promise.reject());case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),(function(e){return function(t){var n=(0,be.UO)();return(0,u.jsx)(e,(0,r.Z)({params:n},t))}}),je.Z)((function(e){return(0,a.useEffect)((function(){!function(){var t=e.params.userId?e.params.userId:e.authUserId;t||(0,be.s0)()("/login"),e.getProfileData(t),e.requestStatus(t)}()}),[e.params.userId]),(0,u.jsx)("div",{className:"profile__wrapper",children:(0,u.jsx)(ae,(0,r.Z)({isOwner:!e.params.userId,profile:e.profile,status:e.status,updateStatus:e.updateStatus,updatePhoto:e.updatePhoto},e))})}))},59566:function(e,t,n){n.d(t,{C:function(){return s},D:function(){return r}});var s=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e)}}},13901:function(e,t,n){e.exports=n.p+"static/media/i.14469a22fe94b0254dd2.webp"}}]);
//# sourceMappingURL=652.9404f53a.chunk.js.map