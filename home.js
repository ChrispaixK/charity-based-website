/* speak section dynmically */

const items = [
  {
    profilePic: 'img/1.png',
    name: 'Maria Hussain',
    jobDescr: 'Full Stack remote Software Developer at Microsoft California',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/2.png',
    name: 'Tarek Ali',
    jobDescr: 'Full Stack remote Software Developer at Microsoft California',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/3.png',
    name: 'Abdelmejid Mohamad',
    jobDescr: 'Full Stack remote Software Developer at Microsoft California',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/4.png',
    name: 'Abraham Ibizugbe',
    jobDescr: 'Full Stack remote Software Developer at Microsoft California',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/5.png',
    name: 'Emma techie',
    jobDescr: 'Full Stack remote Software Developer at Microsoft California',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/6.png',
    name: 'Piesye Piesye',
    jobDescr: 'Full Stack remote Software Developer at Microsoft California',
    comment: 'Person more about that person more about that person more about that person',
  },
];

for (let i = 0; i < items.length; i += 1) {
  const data = document.createElement('div');
  data.classList.add('staff-items');
  data.innerHTML = `
  <div class="staff-item">
  <div class="staff-img">
        <img src="img/checkerboard-squares-black-white.svg" alt="back" class="back"/> 
        <img src="${items[i].profilePic}" alt="staff" class="profile"/> 
      </div>
      <div class="staff-info">
      <h2>${items[i].name}</h2>
      <i class="job">${items[i].jobDescr}</i>
      <span></span>
      <p>${items[i].comment}</p>
    </div>
</div>
  `;

  document.querySelector('.staff-members').appendChild(data);
}
