// function to create and append each feature
function doFeatureBuild() {
    const feature = features.map(feature => {
        return new FeatureBuilder(feature)
    });
    feature.forEach(instance => {
        featuresbox.appendChild(instance.article)
    })
}

// features class constructor
class FeatureBuilder {
    constructor(feature) {
        this.feature = feature;
        this.article = document.createElement('article');
        this.div = document.createElement('div');
        this.img = document.createElement('img');
        this.heading2 = document.createElement('h2');
        this.paragraph = document.createElement('p');

        //  call the associated methods sequentially
        this.constructArticle();
        this.constructDiv();
        this.constructHeading();
        this.constructParagraph();
    }
    constructArticle() {
        this.article.classList.add('features');
    }
    constructDiv() {
        this.div.classList.add('img-box');
        this.img.src = this.feature.src;
        this.img.alt = this.feature.alt;
        this.div.appendChild(this.img);
        this.article.appendChild(this.div);
    }
    constructHeading() {
        this.heading2.textContent = this.feature.heading2;
        this.article.appendChild(this.heading2);
    }
    constructParagraph() {
        this.paragraph.textContent = this.feature.paragraph;
        this.article.appendChild(this.paragraph);
    }
}

doFeatureBuild();

// ********************************************************************************************************************

// function to create and append each team member
function doTeamBuild() {
    const member = teamData.map(member => {
        return new TeamBuilder(member)
    });
    member.forEach(instance => {
        teambox.appendChild(instance.article);
    })
}

// team class constructor
class TeamBuilder {
    constructor(member) {
        this.member = member;
        this.article = document.createElement("article");
        this.div = document.createElement("div");
        this.img = document.createElement("img");
        this.heading3 = document.createElement("h3");
        this.paragraph = document.createElement("p");

        //  call the associated methods sequentially
        this.constructArticle();
        this.constructDiv();
        this.constructHeading();
        this.constructParagraph();
    }
    constructArticle() {
        this.article.classList.add('team-member');
    }
    constructDiv() {
        this.div.classList.add('img-box');
        this.img.src = this.member.src;
        this.img.alt = this.member.alt;
        this.div.appendChild(this.img);
        this.article.appendChild(this.div);
    }
    constructHeading() {
        this.heading3.textContent = this.member.heading3;
        this.article.appendChild(this.heading3);
    }
    constructParagraph() {
        this.paragraph.textContent = this.member.paragraph;
        this.article.appendChild(this.paragraph);
    }
}

doTeamBuild();

// ********************************************************************************************************************

// Set click to scroll events on anchor tags
anchor_tag.map((anchor, index) => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const navscroll = [0, 660, 1050, 1530, 2740];
        window.scrollTo(0, navscroll[index])
    })
})

// Show scroll to top button when scroll to 30px
window.addEventListener('scroll', () => scroll());

// Define scroll behaviour
const scroll = () => {
  if (window.scrollY > 400 || document.documentElement.scrollY > 400) {
    scroll_top.style.display = 'block';
  } else {
    scroll_top.style.display = 'none';
  }
}

// Add click event listener and scroll to top when clicked
scroll_top.addEventListener('click', () => window.scrollTo(0, 0))


// Add click event listener to menu button
menu_btn.addEventListener ('click', () => {
    menu.style.display = 'block';
})

// Add click event listener to overlay
overlay.addEventListener ('click', () => {
    menu.style.display ='none';
})