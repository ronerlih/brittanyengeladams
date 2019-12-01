
function Project(name, img, link,blurb, credit) {
    this.name = name;
    this.img = img;
    this.link = link;
	this.blurb = blurb;
	this.credit = credit;
	 
}
let projects = [];
WEBSITE_DATA.forEach(function(proj){
		projects.push(new Project(	proj.name, 
										proj.img, 
										proj.link, 
										proj.blurb,
										proj.credit ));
	});

console.log("projects: " + JSON.stringify(projects, null, 2));

////reformat

//
//	let projects = [
//	new Project('River To River Festival 2017 (Press)', 
//					'images/women-enter.jpg', 
//					'Performance of Paramodernities #3 at the Museum of the American Indian',
//					'https://www.culturebot.org/2017/09/27419/dancing-a-history-and-defining-a-project-some-notes-on-netta-yerushalmys-paramodernities-3/'),
//	
//	new Project('ODC Performance (Press)', 
//					'', 
//					'Performance of Paramodernities #3&4 at ODC in San Francisco',
//					'https://culturevulture.net/dance/paramodernities-west-coast-premiere'),
//	
//	new Project('Open Space San Francisco MOMA (Press)', 
//					'', 
//					'Review of Paramodernitites #3&4',
//					'https://openspace.sfmoma.org/2018/04/lineage-mimicry-and-ambivalence/'),
//	
//	new Project('Prismatic Park residency at Madison Square Park', 
//					'images/BN-UP324_netta_GR_20170808123013.jpg', 
//					'Postmodernities/experiments',
//					'https://www.wsj.com/articles/dancing-in-the-public-square-1502219394')
//	
//
//
//	];