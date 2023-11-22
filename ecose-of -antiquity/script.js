const landing_video = document.getElementById("landing-video");
landing_video.setAttribute("controlsList", "nodownload nofullscreen noremoteplayback foobar");  
const landing_text = document.getElementById("landing-text");

const landing_text_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "landing-entrance-text 1s ease alternate";
            entry.target.style.transform = "translateY(-10px)";
        } else {
            entry.target.style.animation = "";
            entry.target.style.transform = "translateY(0px)";
        }
    });
});

landing_text_observer.observe(landing_text);

//landing text is over

var tree_structure_line = document.getElementsByClassName("tree_structure_line");

window.addEventListener("scroll", function() {
  var tree_structure_scrollTop = window.screenY || document.documentElement.scrollTop;
  var tree_structure_windowHeight = window.innerHeight;

  for (var i = 0; i < tree_structure_line.length; i++) {
    var tree_structure_lines = tree_structure_line[i];
    var rect = tree_structure_lines.getBoundingClientRect();

    var tree_structure_linesoffsettop = tree_structure_lines.offsetTop;
    if (rect.top < tree_structure_windowHeight - 100) {
      tree_structure_lines.style.cssText = "transition: transform .5s cubic-bezier(0.5, 0, 0.3, 1); transform: scaleY(1); transform-origin: 1 1; ";
    }else {
      tree_structure_lines.style.cssText = "transition: transform .3s cubic-bezier(0.7, 0, 0.84, 0.16); transform: scaleY(0); transform-origin: 0 0;";
    }
  }
});
//tree structure is over

function tree_structure_topic_click(tree_onclick_numbercount) {
    const opened_tree = document.getElementById("tree_structure_control_tree_id" + tree_onclick_numbercount);
    var isopened_tree  = opened_tree.style.display === 'flex';
    opened_tree.style.animation = isopened_tree ? 'hidetranformationvalues 0.5s forwards' : 'showtranformationvalues 0.5s forwards';
    opened_tree.style.display = isopened_tree ? '' : 'flex';
}

window.addEventListener("scroll", function() {
    const landing_videoscrollTop = window.scrollY || document.documentElement.scrollTop;
    const landing_videowindowHeight = window.innerHeight;
    const landing_videooffsettop = landing_video.offsetTop;

    if (landing_videoscrollTop === 0 && (landing_videowindowHeight + landing_videooffsettop) > 100) {
        landing_video.style.width = "var(--landing-video-width)"; 
    } else {   
        landing_video.style.width = "calc(var(--landing-video-width) - " + (landing_videoscrollTop * 0.9) + "px)";          
    }
});


//landing video is over