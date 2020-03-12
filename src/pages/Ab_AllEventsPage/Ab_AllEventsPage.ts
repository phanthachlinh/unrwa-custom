import { ITranslationDictionary } from "../../app"


/**
* renders changes to the All Projects page /events
**/
export default class AbUi_AllEventsPage {

	events: NodeListOf<HTMLUListElement>
	translations: ITranslationDictionary
	language: string

	constructor(translations: ITranslationDictionary, language: string) {
		this.translations = translations
		this.language = language
		this.events = document.querySelectorAll('.event-item')
	}
	/**
		* change color of event item font and background
		**/
	_changeEventItemFontAndBackgroundColor() {
		if (this.events.length === 0) {
			console.error('No events found (.event-item)')
			return
		}
		for (let i = 0; i < this.events.length; i++) {
			let backgroundColor: HTMLDivElement | null = this.events[i].querySelector('.color-secondary')

			if (!backgroundColor) {
				console.error('Primary color not found on element no. ' + (i + 1))
				continue
			}
			let fontColor: HTMLDivElement | null = this.events[i].querySelector('.color-primary')
			if (!fontColor) {
				console.error('Secondary color not found on element no. ' + (i + 1))
				continue
			}
			let eventDetail: HTMLDivElement | null = this.events[i].querySelector('.event-details')
			if (eventDetail)
				eventDetail.style.backgroundColor = backgroundColor.innerText

			if (eventDetail)
				eventDetail.style.backgroundColor = backgroundColor.innerText

			let eventHeadline: HTMLAnchorElement | null = this.events[i].querySelector('.event-description>h3>a')
			let eventButton: HTMLAnchorElement | null = this.events[i].querySelector('.page-create')
			if (eventHeadline && eventButton) {
				eventHeadline.style.color = fontColor.innerText
				eventButton.style.color = fontColor.innerText
			}
		}
	}

	private _renderBottomComponent() {
		let { headline, content, buttonText } = this.translations[this.language].allEventsPage.custom.bottomComponent
		let BottomComponent = `
			<section class="bottom-component">
				<h1>
					${headline}
				</h1>
				<div class="text-container">
					${content}
				</div>
				<a>${buttonText}</a>
			</section>
		`
		document.querySelector('#events-index #wrapper .global-container') ?.insertAdjacentHTML('beforeend', BottomComponent)
	}
	render() {
		this._renderBottomComponent()
		this._changeEventItemFontAndBackgroundColor()
	}
}
