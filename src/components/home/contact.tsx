import InftroductionContactEnglish from '<redux>/components/bilingual/home/introduction-contact-english'
import InftroductionContactKorean from '<redux>/components/bilingual/home/introduction-contact-korean'

import InftroductionContactLinkEnglish from '<redux>/components/bilingual/home/introduction-contact-link-english'
import InftroductionContactLinkKorean from '<redux>/components/bilingual/home/introduction-contact-link-korean'

import { RootState } from '<redux>/assets/store/store';
import { useSelector } from 'react-redux';

function Contact() {
    const currentLanguage:string = useSelector((state: RootState) => state.languageChanger.currentLanguage)
    return (
        <div className="main-contact">
            <div>
                {currentLanguage == 'english' ? <InftroductionContactEnglish></InftroductionContactEnglish> : <InftroductionContactKorean></InftroductionContactKorean>}
                {currentLanguage == 'english' ? <InftroductionContactLinkEnglish></InftroductionContactLinkEnglish> : <InftroductionContactLinkKorean></InftroductionContactLinkKorean>}
            </div>
        </div>
    )  
}

export default Contact;