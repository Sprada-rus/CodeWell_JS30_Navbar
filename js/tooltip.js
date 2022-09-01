mainTooltip = {
  products: 
  '<div class="tooltip-item-row">' +
    '<img src="src/Spense_Icon.svg" alt="">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Spense</p>' +
      '<p class="tootlip-desc">Spense is a landing page for writers. Greate for practicing absolute positioning and flex layouts.</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<img src="src/Fiber_Icon.svg" alt="">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Fiber Landing Page</p>' +
      '<p class="tootlip-desc">An online portfoli generator. Great to practice flex/grid layouts, and absolute positioning</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<img src="src/Gradie_Icon.svg" alt="">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Gradie Sign Up page</p>' +
      '<p class="tootlip-desc">Gradie is simple sign up page, great to practice centering layouts.</p>' + 
    '</div>' +
  '</div>',
  challenges: 
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Spense</p>' +
      '<p class="tootlip-desc">Spense is a landing page for writers. Greate for practicing absolute positioning and flex layouts.</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Fiber Landing Page</p>' +
      '<p class="tootlip-desc">An online portfoli generator. Great to practice flex/grid layouts, and absolute positioning</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Gradie Sign Up page</p>' +
      '<p class="tootlip-desc">Gradie is simple sign up page, great to practice centering layouts.</p>' + 
    '</div>' +
  '</div>',
  resources: 
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Spense</p>' +
      '<p class="tootlip-desc">Spense is a landing page for writers. Greate for practicing absolute positioning and flex layouts.</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Fiber Landing Page</p>' +
      '<p class="tootlip-desc">An online portfoli generator. Great to practice flex/grid layouts, and absolute positioning</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Gradie Sign Up page</p>' +
      '<p class="tootlip-desc">Gradie is simple sign up page, great to practice centering layouts.</p>' + 
    '</div>' +
  '</div>',
  other_links: 
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Spense</p>' +
      '<p class="tootlip-desc">Spense is a landing page for writers. Greate for practicing absolute positioning and flex layouts.</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Fiber Landing Page</p>' +
      '<p class="tootlip-desc">An online portfoli generator. Great to practice flex/grid layouts, and absolute positioning</p>' + 
    '</div>' +
  '</div>' +
  '<div class="tooltip-item-row">' +
    '<div class="tooltip-text-item">' + 
      '<p class="tootlip-title">Gradie Sign Up page</p>' +
      '<p class="tootlip-desc">Gradie is simple sign up page, great to practice centering layouts.</p>' + 
    '</div>' +
  '</div>',
};

function setTooltip(node){
  if(mainTooltip[node.id]){
    
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    // tooltip.setAttribute('data-tooltip-for', node.id)
    tooltip.innerHTML = mainTooltip[node.id];
    // console.log(node)
    node.append(tooltip);
  } 
}

function setActionTooltip(event){
  const targetTooltip = event.target.parentElement.querySelector('.tooltip');

  document.querySelectorAll('.tooltip.active')?.forEach(el => {
    if(el !== targetTooltip){
      el.classList.remove('active')
    }
  })

  if(!targetTooltip.classList.contains('active')){ 
    targetTooltip.classList.add('active');
  } else if(targetTooltip.classList.contains('active')){
    targetTooltip.classList.remove('active');
  }
}

let navbar = document.querySelector('header .nav-bar');
Array.from(navbar.children).forEach(item => {
  setTooltip(item);
  item.addEventListener('click', setActionTooltip)
})