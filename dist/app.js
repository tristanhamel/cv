!function(e){function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=13)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.accordionComponent=void 0,t(14);n.accordionComponent={controller:function(){$(document).ready(function(){function e(e){var n=$(e.currentTarget),t=n.hasClass("accordion-expanded");n.parents("[th-accordion]").find(".accordion-expanded").removeClass("accordion-expanded").find("[th-accordion-content]").slideUp(300),t||n.addClass("accordion-expanded").find("[th-accordion-content]").slideDown(300)}$("[th-accordion-section]").click(e)})}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appComponent=void 0;var i=t(24),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(15);n.appComponent={selector:"app",template:s.default,controller:function(){}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.contactsComponent=void 0;var i=t(25),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(16);var a=function(){$(document).ready(function(){window.print||$(".print-action").css({display:"none"}),$(".print-action").click(function(){window.print()})})};n.contactsComponent={selector:"th-contacts",template:s.default,controller:a}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.educationComponent=void 0;var i=t(26),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(17);n.educationComponent={template:s.default,selector:"th-education"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.envoiComponent=void 0;var i=t(27),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(18);n.envoiComponent={template:s.default,selector:"th-envoi"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.experienceComponent=void 0;var i=t(28),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(19);n.experienceComponent={template:s.default,selector:"th-experience"}},function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.i18nComponent=void 0;var s=t(33),a=i(s),o=t(29),r=i(o);t(20);n.i18nComponent={selector:"l18n",template:r.default,controller:function(){function e(){n.forEach(function(e){e.l18n&&e.l18n[t]?$(e.element).text(e.l18n[t]):console.error("missing localization for "+e.id)})}var n=void 0,t="en";$(document).ready(function(){n=$("[l18n]").map(function(e,n){return{index:e,element:n,id:$(n).text().trim(),l18n:a.default.find(function(e){return e.id===$(n).text().trim()})}}).toArray(),e(),$(".langToggle").click(function(n){var i=$(n.target).attr("l18n");i!==t&&(t=i,e())})})}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.introComponent=void 0;var i=t(30),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(21);n.introComponent={selector:"th-intro",template:s.default,controller:function(){}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.menuComponent=void 0;var i=t(31),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(22);n.menuComponent={selector:"th-menu",template:s.default,controller:function(){function e(e){return e.map(function(e,n){return{element:n,top:$(n).offset().top,index:e,isActive:!1}}).toArray().sort(function(e,n){return n.top-e.top})}var n=$(".menu-toggle-button"),t=$(".menu"),i=void 0;$(document).ready(function(){var n="";$(".section-title").each(function(e,t){n+='\n        <li class="menu-item" l18n>\n          ###\n        </li>'.replace("###",$(t).text())}),$(".menu-list").append(n),i=e($(".section"));$(window).scroll(function(e){var n=$(e.target).scrollTop(),s=i.find(function(e){return $(e.element).offset().top<n+100});s&&!s.isActive&&n>500?(i=i.map(function(e){return e.top===s.top?Object.assign(e,{isActive:!0}):Object.assign(e,{isActive:!1})}),$(".menu-item").removeClass("active").filter(function(e){return e===s.index}).addClass("active"),t.addClass("has-visible")):(!s||n<500)&&(i=i.map(function(e){return Object.assign(e,{isActive:!1})}),$(".menu-item").removeClass("active"),t.removeClass("has-visible"))});var s=$(".menu-item");s.click(function(e){t.removeClass("visible");var n=s.index(e.target),a=i.find(function(e){return e.index===n});if(a&&!a.isActive){var o=$(a.element).offset().top;$("body,html").animate({scrollTop:o},700)}})}),n.click(function(){t.toggleClass("visible")})}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.skillsComponent=void 0;var i=t(32),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t(23);n.skillsComponent={selector:"th-skills",template:s.default,controller:function(){$(".skills-list-elem").each(function(e,n){for(var t="",i=parseInt($(n).attr("hearts")),s=0;s<i;s++)t+='<i class="icon-heart"></i>';for(var a=5-i,o=0;o<a;o++)t+='<i class="icon-heart-empty"></i>';$(n).children(".skill-list-header").append(t)})}}},function(e,n){},function(e,n){},function(e,n){},function(e,n,t){"use strict";var i=t(0),s=t(1),a=t(8),o=t(7),r=t(2),l=t(9),c=t(5),d=t(3),u=t(4),p=t(6);t(11),t(12),t(10),[i.accordionComponent,s.appComponent,a.menuComponent,o.introComponent,r.contactsComponent,l.skillsComponent,c.experienceComponent,d.educationComponent,u.envoiComponent,p.i18nComponent].forEach(function(e){e.hasOwnProperty("selector")&&e.hasOwnProperty("template")&&$(e.selector).append(e.template),e.hasOwnProperty("controller")&&e.controller()})},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){},function(e,n){e.exports='<th-menu></th-menu> <th-intro></th-intro> <th-contacts></th-contacts> <th-skills class="section skills"></th-skills> <th-experience class="section experience"></th-experience> <th-education class="section education"></th-education> <th-envoi class="section envoi"></th-envoi>'},function(e,n){e.exports='<div class=contacts> <div class=container> <div class="contacts-line down-link"> <i class=icon-print></i> <a class=print-action><span l18n>PRINT_FRIENDLY</span></a> </div> <div class=contacts-group> <div class=contacts-line> <i class=icon-phone></i> <span><a href=tel:+358440770544>+358 440 770 544</a></span> </div> <div class=contacts-line> <i class=icon-mail></i> <span><a href=mailto:hamel.tristan@laposte.net>hamel.tristan@laposte.net</a></span> </div> </div> <div class=contacts-social> <a href=https://github.com/tristanhamel> <i class=icon-github></i> <span class=link-text>https://github.com/tristanhamel</span> </a> <a href=https://www.linkedin.com/in/tristan-hamel-9656a0107/ > <i class=icon-linkedin></i> <span class=link-text>https://www.linkedin.com/in/tristan-hamel-9656a0107/</span> </a> </div> </div> </div>'},function(e,n){e.exports="<h2 class=section-title l18n>EDUCATION_TITLE</h2> <div class=section-content> <div th-accordion> <div th-accordion-section> <div th-accordion-header> <span>2010-2013:&nbsp;</span><span class=degree l18n>MFA_TITLE</span> </div> <div th-accordion-content> <p><a href=http://www.aalto.fi/en/about/ranking/ >Aalto University</a> - <span l18n>HKI_FI</span></p> <p l18n>MFA_DESC</p> </div> </div> <div th-accordion-section> <div th-accordion-header> <span>2005-2008:&nbsp;</span><span class=degree l18n>MA_TITLE</span> </div> <div th-accordion-content> <p><a href=https://www.helsinki.fi/en/university/the-university-of-helsinki-in-brief>University of Helsinki</a> - <span l18n>HKI_FI</span></p> <p l18n>MA_DESC</p> </div> </div> <div th-accordion-section> <div th-accordion-header> <span>2001-2005:&nbsp;</span><span class=degree l18n>ME_TITLE</span> </div> <div th-accordion-content> <p><a href=http://www.iep-strasbourg.fr/en/ >Sciences Po Strasbourg</a> - Strasbourg, France</p> <p l18n>ME_DESC</p> </div> </div> </div> </div> "},function(e,n){e.exports="<h2 class=section-title l18n>BENEFITS</h2> <div class=section-content> <p l18n>BENEFITS_1</p> <p l18n>BENEFITS_2</p> <p l18n>BENEFITS_3</p> </div>"},function(e,n){e.exports=" <h2 class=section-title l18n>EXP_TITLE</h2> <div class=section-content> <div class=experience-section> <div class=experience-section-title> <span class=experience-date>2016-2017:&nbsp;</span> <span class=experience-item> <span l18n>EXP_1</span> @<a href=https://www.sanakirja.fi/ >Sanakirja.fi</a> </span> </div> <p class=experience-desc l18n>EXP_1_DESC</p> </div> <div class=experience-section> <div class=experience-section-title> <span class=experience-date>2015-2016:&nbsp;</span> <span class=experience-item l18n>EXP_2</span> </div> <p class=experience-desc> <span l18n>EXP_2_DESC_1</span> <a href=https://cehavrequitappelle.fr/ l18n>EXP_2_DESC_2</a>, <span l18n>EXP_2_DESC_3</span> </p> </div> <div class=experience-separator> ... </div> <div class=experience-section> <div class=experience-section-title> <span class=experience-date>2013-2014:&nbsp;</span> <span class=experience-item l18n>EXP_3</span> </div> </div> <div class=experience-section> <div class=experience-section-title> <span class=experience-date>2010-2013:&nbsp;</span> <span class=experience-item l18n>EXP_4</span> </div> </div> <div class=experience-section> <div class=experience-section-title> <span class=experience-date>2008-2010:&nbsp;</span> <span class=experience-item l18n>EXP_5</span> </div> </div> <div class=experience-section> <div class=experience-section-title> <span class=experience-date>2001-2008:&nbsp;</span> <span class=experience-item l18n>EXP_6</span> </div> </div> </div>"},function(e,n){e.exports="<div class=l18n> <button class=langToggle l18n=en>EN</button> <button class=langToggle l18n=fr>FR</button> </div>"},function(e,n){e.exports="<div class=intro> <div class=spacer></div> <div class=content> <h2 class=subtitle>Tristan Hamel</h2> <h1 class=title>Front-end dev with benefits</h1> </div> </div>"},function(e,n){e.exports="<div class=menu> <div class=menu-toggle> <button class=menu-toggle-button> <i class=icon-menu></i> </button> </div> <div class=menu-container> <l18n></l18n> <ul class=menu-list> </ul> <div class=menu-contacts> <th-contacts></th-contacts> </div> <div class=source-link> <a href=https://github.com/tristanhamel/cv target=_blank> Source on Github </a> </div> </div> </div>"},function(e,n){e.exports=" <h2 class=section-title l18n>SKILLS_TITLE</h2> <div class=section-content> <div class=skills-intro> <p l18n>SKILL_DESC</p> </div> <div class=skills-list th-accordion> <div class=skills-list-elem hearts=4 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>AngularJS</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_NG </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Sass</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_SASS </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>ES6</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_ES6 </div> </div> <div class=skills-list-elem hearts=2 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Jquery</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_JQ </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Webpack</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_WEBPACK </div> </div> <div class=skills-list-elem hearts=3 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Gulp</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_GULP </div> </div> <div class=skills-list-elem hearts=3 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Jasmine</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_JASMINE </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Redux</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_REDUX </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Angular2+</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_NG2 </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Typescript</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_TS </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>React</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_REACT </div> </div> <div class=skills-list-elem hearts=5 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Node.js</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_NODE </div> </div> <div class=skills-list-elem hearts=3 th-accordion-section> <div class=skill-list-header th-accordion-header> <span class=text>Bootstrap, Foundation, ...</span> </div> <div class=skill-list-content th-accordion-content l18n> SKILL_FW </div> </div> </div> </div>"},function(e,n){e.exports=[{id:"PRINT_FRIENDLY",en:"Print friendly version",fr:"Version imprimable"},{id:"EDUCATION_TITLE",en:"Education",fr:"Education"},{id:"MFA_TITLE",en:"Master in Fine Arts",fr:"Master en beaux-arts"},{id:"MFA_DESC",en:"Major in environmental art. Graduated with outstanding results.",fr:'Majeure en "Environmental Art". Diplômé avec les félicitations du jury.'},{id:"HKI_FI",en:"Helsinki, Finland",fr:"Helsinki, Finlande"},{id:"MA_TITLE",en:"Master in Political Science",fr:"Master en science politique"},{id:"MA_DESC",en:"Major in public administration. Master thesis written for member of European Parliament Satu Hassi on lobbying practices in EU politics.",fr:"Majeure en administration. Thèse écrite pour le compte de Satu Hassi, député européenne."},{id:"ME_TITLE",en:"Master in Economics",fr:"Master en économie"},{id:"ME_DESC",en:"Major in micro-economics. Master thesis on the Finnish innovation system.",fr:"Majeure en microéconomie. Thèse sur le système finlandais d'innovation."},{id:"BENEFITS_1",en:"Experience and education is good and well. Still, I think that a good developer benefits from skills extending beyond technical ones.",fr:"L'experience et les études sont une choses mais un développeur peut aussi tirer parti de compétences autres que purement techniques."},{id:"BENEFITS_2",en:"A developer does not work in an isolated bubble and should be able to translate technical aspects into language understandable to non-technical stakeholders, and vice-versa. Similarly, front end development involves not only writing good code but also be aware of its visual output and understanding the context in which the app is to be used. I believe this is what might set me apart from many.",fr:"Un dévelopeur ne travaille pas isolé du reste du monde et doit être capable de traduire des concepts techniques de façon à être compris de toutes les parties prenantes au projet auquel il contribue. De la même façon, le coeur du métier ne consiste pas seulement à produire du code mais aussi comprendre le contexte dans lequel l'application est utilisée et à être sensible aux aspects visuels."},{id:"BENEFITS_3",en:"My background might be unusual but this is what makes me flexible, able to efficiently communicate, learn fast and, at the end of the day, be a better programmer. If you like what you read, please reach out. This might be a match!",fr:"Mon parcours est probablement inhabituel mais c'est justement cela qui me permet d'être flexible, de pouvoir communiquer facilement, d'apprendre rapidement et au final, de devenir un meilleur programmeur. Si vous avez apprecié ce que vous lu jusque là, contactez moi. Cela pourrait être une heureuse rencontre!"},{id:"EXP_TITLE",en:"Experience",fr:"Experience"},{id:"EXP_1",en:"Web developer and then Senior web developer",fr:"Web developer puis Senior web developer"},{id:"EXP_1_DESC",en:"In charge of the whole frontend development in AngularJS. Migrated codebase from ES5 to ES6 and build processes from Grunt to Webpack. Integrated Redux. Heavily optimized performance (bundling, lazy loading, reduce dependency exposure). Initiated migration to Angular2",fr:'En charge de tout le développement "front end" avec AngularJS. Migration de ES5 vers ES6 et de Grunt vers Webpack. Intégration de Redux. Forte optimisation de la performance(bundling, chargement à la demande, reduction de l\'exposition aux dépendences). Initiation de la migration vers Angular2'},{id:"EXP_2",en:"Freelance web developer",fr:"Freelance web developer"},{id:"EXP_2_DESC_1",en:"Freelance projects mostly based on Wordpress. In the ",fr:"Projets en sous-traitance, principalement basés sur Wordpress. Dans le"},{id:"EXP_2_DESC_2",en:"last project",fr:"dernier projet"},{id:"EXP_2_DESC_3",en:"I built an Angular frontend and served content via Wordpress REST api.",fr:'j\'ai créé un "frontend" avec AngularJS assurant la gestion de contenu via Wordpress REST api.'},{id:"EXP_3",en:"Independent visual artist and doctoral candidate in Fine Arts",fr:"Artiste indépendant et doctorant en beaux-arts"},{id:"EXP_4",en:"Master student in Fine Arts",fr:"Etudiant en Master Beaux-arts"},{id:"EXP_4",en:"Master student in Fine Arts",fr:"Etudiant en Master Beaux-arts"},{id:"EXP_5",en:"Economic advisor to the French ambassador in Finland",fr:"Conseiller économique près l'ambassadeur de France en Finlande"},{id:"EXP_6",en:"2 master degrees, postman, seasonal worker in agriculture, and a bunch of other things",fr:"2 Masters, postier, saisonnier dans l'agriculture et quelques autres fonctions"},{id:"SKILLS_TITLE",en:"Skills",fr:"Compétences"},{id:"SKILL_DESC",en:"Skills bar charts are probably meaningless. What about hearts instead to show what technologies I like to work with? Let's still list things in (subjective) order of proficiency.",fr:"Les diagrammes de compétences ne sont pas très révélateurs. Pourquoi ne pas plutôt utiliser des coeurs pour distinguer les technologies avec lesquelles je préfère travailler? Celles-ci sont tout de même listées en ordre (subjectif) de maîtrise."},{id:"SKILL_NG",en:"My bread and butter for the last 2 years. It's certainly suffering performance issues in comparison with Angular2 but it remains a good framework, especially with the improvements brought with 1.5 and 1.6 (components, life cycle hooks).",fr:"Au centre de ma vie depuis 2 ans. La performance pêche sans doute un peu la comparaison avec Angular2 mais cela reste un bon produit, particulièrement avec les améliorations apportées par les versions 1.5 et 1.6 (components, life cycle hooks)."},{id:"SKILL_SASS",en:"Define your variables and mixins, import and ensure design consistency. I love SASS!",fr:"Définissez vos variables et mixins, importez et assurez vous ainsi de la cohérence du design. J'adore SASS!"},{id:"SKILL_ES6",en:"It was a relief when I could finally use ES6 at work. It saves time, is easier to read and practically outdated Lodash. We still need to compile but let's be bold and dream that, one day there are gonna be only evergreen browsers out there and we'll not need the whole polyfill shebang.",fr:"Quel soulagement quand j'ai finalement pu commencer à utiliser ES6 professionellement: économie de temps, facilité de lecture et la possibilité de se débarasser de Lodash. Nous devons toujours compiler mais soyons optimistes, un jours tous les navigateurs seront \"evergreen\" et nous n'aurons plus besoin de charger de polyfills."},{id:"SKILL_JQ",en:"Jquery is OK. This page is even using it heavily! But more often than not, it's required in projects which could totally do without (I work with AngularJS right).",fr:"Jquery peut être utlie. Cette page en fait même un large usage! Malheureusement, c'est souvent requis dans des projets qui pourraient totalement s'en passer(oui je travaille surtout avec AngularJs)"},{id:"SKILL_WEBPACK",en:"Steep learning curve at first. But what a time saver! Setup in a matter of minutes, not hours. No need anymore to write 100s of lines of Gulp tasks or rely on ill-suited Yeoman generators. Just spin Webpack with minimal config and you are good to go!",fr:"La courbe d'apprentissage est un peu raide au début mais quel gain de temps ensuite! Cela nous permet de commencer un projet en quelques minutes et non en quelques heures. Plus besoin d'écrire des centaines de lignes de tâches Gulp ou de se baser sur un générateur Yeoman mal adapté. Un simple configuration Webpack suffit souvent."},{id:"SKILL_GULP",en:"I am still using it but now that we got Webpack is it really necessary? I admit it's more flexible but for very specific tasks, one might as well just write plain Node scripts.",fr:"Maintenant que nous avons Webpack, en avons nous vraiment besoin? C'est certainement une solution plus flexible mais pour les tâches vraiment spécifiques, on peut tout aussi bien utiliser Node."},{id:"SKILL_NG2",en:"I initiated migration from AngularJS to Angular2 in my last job. It might have too much boilerplate for some. Coming from AngularJS, I still enjoy the improvements on the latter a lot. And the use of the CLI largely offsets the boilerplate problem IMHO.",fr:"J'ai initié la migration d'AngularJS à Angular2 dans mon dernier emploi. Certain reprochent la trop grande quantité de \"boilerplate\". Étant un utilisateur d'AngularJS, j'apprécie tout de même les améliorations."},{id:"SKILL_TS",en:'"Property x of y is not defined". How many times a JS developer gets bitten by type errors? The solution? Interfaces! Maybe Typescript feels like too much overhead at first but one is not forced to use all of its features either.',fr:"\"Property x of y is not defined\". Combien de fois ce type d'erreur peut être rapporté dans un projet typique?  La solution? Utiliser des interfaces! Au premier abord, Typescript peut sembler ralentir le développement mais snul n'est obligé d'utiliser l'intégralité des features."},{id:"SKILL_NODE",en:"I'm not too familiar with Node. But when needing specialized build task, or spinning a proxy with authentication, routing etc, that's my choice.",fr:"Je ne suis pas entièrement familier avec Node. Mais lorsque je dois écrire une tâche de compilation relativement spécialisée, ou produire un petit proxy, c'est mon premier choix."},{id:"SKILL_FW",en:"Frameworks are good. Only are they not good for everything. When I see the entire Bootstrap loaded to style a form of 3 inputs, I cry.",fr:"Les frameworks sont utiles. Mais ils ne sont pas la panacée. Quand je vois tout Bootstrap importé pour styler un formulaire de 3 inputs, j'ai envie de pleurer."},{id:"SKILL_JASMINE",en:"Testing is a must. I haven't tried other testing frameworks as Jasmine has always been serving its purpose. Maybe I should?",fr:"Les tests sont indispensables. Je n'ai pas essayé d'autre solution, compte tenu que Jasmine a toujours satisfait mes besoins. Peut-être devrais-je?"},{id:"SKILL_REDUX",en:"I love Redux! In a complex app with lots of data types and backend sync operations, it really improves maintainability by enforcing unique data management strategies.",fr:"J'adore Redux! Dans les app un peu complexes, son usage améliore vraiment la gestion des données en instaurant une stratégie unique et efficace."},{id:"SKILL_REACT",en:"I gave it a try to develop personal projects and I must say the onboarding experience was excellent. The learning curve is much smoother than that of Angular. I would really appreciate being able to use React on a professional level.",fr:"Je n'ai utilisé React que dans des projets personnels et je dois reconnaître que ma première impression a été excellente. React est bien plus facile d'abord qu'Angular. Si j'en ai l'oppportunité, j'apprecierai utiliser React professionellement."},{id:"BENEFITS",en:"Benefits",fr:"Bénéfices"},{id:"FR",en:"French",fr:"Français"},{id:"EN",en:"English",fr:"Anglais"}]}]);