(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: '',
            email: 'dsfsdfds',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];
    var table = document.createElement("table");
    var container = document.getElementById("container");
    var titles = ['name', 'email', 'img', 'skills'];
	table.setAttribute("class", "table table-hover");
    
	for(let i = 0; i < students.length; i++) {
		var stud = students[i];
		function renderStudents(stud){
			let student = document.createElement("tr"),
				studImg = document.createElement("img"),
				buttonEdit = document.createElement("button"),
				buttonRemove = document.createElement("button"),
				obj = {
					name: `${stud.name} ${stud.lastName}`,
					email: stud.email,
					img: stud.img,
					skills: stud.skills.toString()
				};
			titles.forEach(function(item) {
				let td = document.createElement("td");
				if (item === "img") {
					studImg.setAttribute("src", stud.img);
					td.appendChild(studImg);
					studImg.style.height = '100px';
				} else {
					let text = document.createTextNode(obj[item]);
					td.appendChild(text);
				}
				buttonEdit.setAttribute("class", "glyphicon glyphicon-edit")
				buttonRemove.setAttribute("class", "glyphicon glyphicon-trash")
				student.appendChild(td);
				student.appendChild(buttonRemove);
				student.appendChild(buttonEdit);
			})
			table.appendChild(student);
		};
		renderStudents(stud);
	}
	//if (table != null) { take name
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].onclick = function () {
                return tableText(this);
            };
        }
//    }

    function tableText(tableCell) {
        alert(tableCell.cells[0].innerHTML);
    }
// form
   	var form = document.createElement("form"),
		formDiv = document.createElement("div"),
		inputName = document.createElement("input"),
		inputLastName = document.createElement("input"),
		inputImg = document.createElement("input"),
		inputEmail = document.createElement("input"),
		inputSkills = document.createElement("input"),
		labelName = document.createElement("label"),
		labelLastName = document.createElement("label"),
		labelEmail = document.createElement("label"),
		labelImg = document.createElement("label"),
		labelSkills = document.createElement("label"),
		labelNameText = document.createTextNode("Name"),
		labelLastNameText = document.createTextNode("Last name"),
		labelEmailText = document.createTextNode("email"),
		labelImgText = document.createTextNode("Profile picture "),
		labelSkillsText = document.createTextNode("Skills"),
		divName = document.createElement("div"),
		divEmail = document.createElement("div"),
		divImg = document.createElement("div"),
		divSkills = document.createElement("div"),
		divLastName = document.createElement("div"),
		formButton = document.createElement("button"),
		formButtonRes = document.createElement("button"),
		formButtonRestext = document.createTextNode("reset"),
		formButtonText = document.createTextNode("save");
	
	form.style.margin = '20px 50px 50px';
	labelName.appendChild(labelNameText);
	formButton.appendChild(formButtonText);
	formButton.addEventListener("click", myFunction);
	formButtonRes.appendChild(formButtonRestext);
	formButtonRes.addEventListener("click", reset);
	labelLastName.appendChild(labelLastNameText);
	labelEmail.appendChild(labelEmailText);
	labelImg.appendChild(labelImgText);
	labelSkills.appendChild(labelSkillsText);
	inputName.setAttribute("type", "text");
	inputName.setAttribute("name", "name");
	inputLastName.setAttribute("type", "text");
	inputLastName.setAttribute("name", "lastName");
	inputImg.setAttribute("type", "text");
	inputImg.setAttribute("name", "img");
	inputEmail.setAttribute("type", "text");
	inputEmail.setAttribute("name", "email");
	inputSkills.setAttribute("type", "text");
	inputSkills.setAttribute("name", "skills");
	form.setAttribute("class", "form");
	divName.setAttribute("class", "form-group");
	divLastName.setAttribute("class", "form-group");
	divEmail.setAttribute("class", "form-group");
	divSkills.setAttribute("class", "form-group");
	divImg.setAttribute("class", "form-group");
	inputName.setAttribute("class", "form-control");
	inputLastName.setAttribute("class", "form-control");
	inputImg.setAttribute("class", "form-control");
	inputEmail.setAttribute("class", "form-control");
	inputSkills.setAttribute("class", "form-control");
	inputName.setAttribute("value", "");
	inputLastName.setAttribute("value", "");
	inputImg.setAttribute("value", "");
	inputEmail.setAttribute("value", "");
	inputSkills.setAttribute("value", "");
	inputName.setAttribute("placeholder", "name");
	inputLastName.setAttribute("placeholder", "last name");
	inputImg.setAttribute("placeholder", "lint for image");
	inputEmail.setAttribute("placeholder", "email");
	inputSkills.setAttribute("placeholder", "your skills");
	inputName.setAttribute("required", "")


	
	form.appendChild(divName);
		divName.appendChild(labelName);
		divName.appendChild(inputName);
	form.appendChild(divLastName);
		divLastName.appendChild(labelLastName);
		divLastName.appendChild(inputLastName);
	form.appendChild(divImg);
		divImg.appendChild(labelImg);
		divImg.appendChild(inputImg);
	form.appendChild(divEmail);
		divEmail.appendChild(labelEmail);
		divEmail.appendChild(inputEmail);
	form.appendChild(divSkills);
		divSkills.appendChild(labelSkills);
		divSkills.appendChild(inputSkills);
	formDiv.appendChild(form);
	formDiv.appendChild(formButton);
	formDiv.appendChild(formButtonRes);
    container.appendChild(formDiv);
	
	function myFunction() {
		var x = document.forms[0];
		var obj = {};
		for (let i = 0; i < x.length; i++) {
			var item = x.elements.item(i);
			if(item.value === "") {
				return alert(`${item.name} is empty`);
			}
        	obj[item.name] = item.value;
		}
		console.log(obj);
		students.push(obj);
		console.log(students);
		renderStudents(obj);
		x.reset();
	}
	function reset() {
		return document.forms[0].reset();
	}
    container.appendChild(table);

})()
