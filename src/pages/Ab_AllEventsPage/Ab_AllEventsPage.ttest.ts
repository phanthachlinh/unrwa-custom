// it('should throw primary color not found', () => {
//   global.document.documentElement.innerHTML = new JSDOM(`
//     <div class="event-item">
//     </div>
//     `).serialize()
//   abUiHomepageObj = new AbUi_HomePage()
//   expect(() => { abUiHomepageObj._changeEventItemColors() }).toThrow('Primary color not defined in event item no 1')
// })
// it('should throw event headline not defined', () => {
//   global.document.documentElement.innerHTML = new JSDOM(`
//     <div class="event-item">
//       <div class="color-primary"></div>
//       <div class="color-secondary"></div>
//     </div>
//     `).serialize()
//   abUiHomepageObj = new AbUi_HomePage()
//   expect(() => { abUiHomepageObj._changeEventItemColors() }).toThrow('Headline not defined in event item no 1')
// })
