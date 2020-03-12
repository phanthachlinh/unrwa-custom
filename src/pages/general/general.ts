export default class General {

	eventListItems: Array<HTMLDivElement>
	eventsThumbnailContainer: HTMLUListElement | null

	constructor() {

		this.eventListItems = Array.from(document.querySelectorAll('.event-item'))
		this.eventsThumbnailContainer = document.querySelector('.examples-wrapper-inner ul,.section-events ul')

	}

	private _changeEventItemColors() {
		if (document.getElementById('events-index'))
			return
		if (this.eventListItems.length === 0) {
			console.error('No event items found')
			return
		}
		for (let i = 0; i < this.eventListItems.length; i++) {
			let eventListItem: HTMLDivElement = this.eventListItems[i]
			let backgroundColor: HTMLDivElement | null = eventListItem.querySelector('.color-primary')
			let eventIcon: HTMLDivElement | null = eventListItem.querySelector('.event-icon')

			if (!backgroundColor) {
				console.error('Background (Primary color) not defined in event item no ' + (this.eventListItems.indexOf(eventListItem) + 1))
				continue
			}

			let eventDetails: HTMLDivElement | null = eventListItem.querySelector('.event-details')
			if (!eventDetails) {
				console.error('.eventDetails not defined in event item no ' + (this.eventListItems.indexOf(eventListItem) + 1))
				continue
			} else
				eventDetails.style.backgroundColor = backgroundColor.innerText
			if (!eventIcon) {
				console.error('EventIcon not defined in event item no ' + (this.eventListItems.indexOf(eventListItem) + 1))
				continue
			} else
				eventDetails.insertAdjacentHTML('afterbegin', '<img class="event-detail__icon" src="' + eventIcon.innerHTML + '" />')

		}
	}
	private _adaptEventItemHeight() {
		if (document.querySelector('#events-index'))
			return
		if (!this.eventsThumbnailContainer) {
			console.warn('No event example list found')
			return
		}
		let highestEventItem: number = 0;
		for (let i = 0; i < this.eventsThumbnailContainer.children.length; i++) {
			if ((<HTMLElement>this.eventsThumbnailContainer.children[i]).clientHeight > highestEventItem)
				highestEventItem = (<HTMLElement>this.eventsThumbnailContainer.children[i]).clientHeight
		}
		for (let i = 0; i < this.eventsThumbnailContainer.children.length; i++) {
			(<HTMLElement>this.eventsThumbnailContainer.children[i]).style.minHeight = highestEventItem.toString() + 'px'
		}
		console.log(highestEventItem)
	}
	private _renderFundraisingTarget() {
		for (let i = 0; i < this.eventListItems.length; i++) {
			let fundraisingTargetElement: HTMLDivElement | null = this.eventListItems[i].querySelector('.projets')
			if (!fundraisingTargetElement) {
				console.warn('Fundraising target container not found (.projets)')
				return
			}
			let fundraisingTarget: any = fundraisingTargetElement.innerText

			fundraisingTarget = fundraisingTarget.split(' ').filter((value: any) => value !== "" && value !== "\n")
			let eventHeadline = this.eventListItems[i].querySelector('.event-description h3')
			if (!eventHeadline) {
				console.error('Event Headline not found on item no. ' + (i + 1))
				continue
			}
			if (fundraisingTarget.length !== 0) {

				eventHeadline.insertAdjacentHTML('afterend', `
				<p class="fundraising-target">
					US$ ${fundraisingTarget[2]} of fundraising target
					</p>
					`
				)
			} else {
				eventHeadline.insertAdjacentHTML('afterend', `
				<p class="fundraising-target">
					Free fundraising target
					</p>
					`
				)
			}

		}
	}
	render() {
		this._renderFundraisingTarget()
		this._changeEventItemColors()
		this._adaptEventItemHeight()
	}
}
