let currentSkillSlide = 0;

function moveSkillSlide(direction) {
  const wrapper = document.querySelector('.skill__list');
  const totalSkills = wrapper.children.length;
  const visibleSkills = 4;
  const maxSlide = totalSkills - visibleSkills;

  currentSkillSlide += direction;
  if (currentSkillSlide < 0) currentSkillSlide = 0;
  if (currentSkillSlide > maxSlide) currentSkillSlide = maxSlide;

  const skillWidth = wrapper.querySelector('.skill').offsetWidth;
  wrapper.style.transform = `translateX(-${currentSkillSlide * skillWidth}px)`;
}
