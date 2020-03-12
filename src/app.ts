import AbUi_HomePage from "./pages/ab_HomePage/AbUi_HomePage"
import AbUi_AllEventsPage from "./pages/Ab_AllEventsPage/Ab_AllEventsPage"
import General from "./pages/general/general"
declare var window: Window
interface IUnrwaPageData {
	TRANSLATIONS: ITranslationDictionary
}
export interface ITranslationDictionary {
	[key: string]: ITranslation
}
export interface ITranslation {

	allEventsPage: {
		custom: {
			bottomComponent: {
				headline: string,
				content: string,
				buttonText: string
			}
		}
	}
}

declare var pageData: IUnrwaPageData
interface Window {
	AbUnrwa: () => void,
	pageData: IUnrwaPageData
}

enum PageTypes {
	HomePage = 'indexs-index',
	AllEventsPage = 'events-index',
	EventPage = 'events-show',
	ProjectPage = "projects-show"
}
window.AbUnrwa = () => {
	const { TRANSLATIONS } = window.pageData
	let currentLanguage: string | undefined = document.querySelector('body') ?.lang
	if (!currentLanguage)
		currentLanguage = 'en'
	let pageType = document.getElementsByTagName('body')[0].id
	switch (pageType) {
		case PageTypes.HomePage:
			new AbUi_HomePage().render()
			break
		case PageTypes.AllEventsPage:
			new AbUi_AllEventsPage(TRANSLATIONS, currentLanguage).render()
	}
	new General().render()
}
