import AbUi_HomePage from "./AbUi_HomePage"
import { JSDOM } from "jsdom"
declare var global: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
let abUiHomepageObj: any
describe('AbUi_HomePage', () => {
	describe('_changeEventItemColors', () => {
		it('should throw no event items found', () => {
			abUiHomepageObj = new AbUi_HomePage()
			expect(() => { abUiHomepageObj._changeEventItemColors() }).toThrow('No event items found')
		})
		it('should throw secondary color not found', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div class="event-item">
				</div>
				`).serialize()
			abUiHomepageObj = new AbUi_HomePage()
			expect(() => { abUiHomepageObj._changeEventItemColors() }).toThrow('Background (Primary color) not defined in event item no 1')
		})

		it('should throw event details not defined', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div class="event-item">
				<div class="event-description">
					<h3>
						<a>
						</a>
						</h3>
						</div>
					<div class="color-primary"></div>
				</div>
				`).serialize()
			abUiHomepageObj = new AbUi_HomePage()
			expect(() => { abUiHomepageObj._changeEventItemColors() }).toThrow('.eventDetails not defined in event item no 1')
		})
		it('should throw event icon not defined', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div class="event-item">
				<div class="event-details">
				</div>
					<div class="color-primary"></div>
				</div>
				`).serialize()
			abUiHomepageObj = new AbUi_HomePage()
			expect(() => { abUiHomepageObj._changeEventItemColors() }).toThrow('EventIcon not defined in event item no 1')
		})
		it('should match snatpshot', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div class="event-item">
				<div class="event-details">
				</div>
					<div class="color-primary"></div>
					<div class="event-icon">
							https://libs.iraiser.eu/users/unrwa-p2p/public/assets/collecte_unrwa_computer@2x.png
					</div>
				</div>
				`).serialize()
			abUiHomepageObj = new AbUi_HomePage()
			abUiHomepageObj._changeEventItemColors()
			expect(document.documentElement.innerHTML).toMatchSnapshot()
		})
		it('should pass', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div class="event-item">
						<div class="event-icon">
						</div>
						<div class="event-details">
						</div>
					<div class="color-primary"></div>
				</div>
				`).serialize()
			console.log(document.querySelector('.event-icon'))
			abUiHomepageObj = new AbUi_HomePage()
			expect(() => { abUiHomepageObj._changeEventItemColors() }).not.toThrow()
		})
	})
})
