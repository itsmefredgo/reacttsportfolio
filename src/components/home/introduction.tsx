// Photos imported
import frederick_snow_1 from '<redux>/assets/images/home/frederick-snow-1.jpeg'

import { RootState } from '<redux>/assets/store/store';
import { useSelector } from 'react-redux';

import IntroductionParagraphKorean from '../bilingual/home/introduction-paragraph-korean';
import IntroductionParagraphEnglish from '../bilingual/home/introduction-paragraph-english';
import Image from 'next/image';

function Introduction() {
    const currentLanguage:string = useSelector((state: RootState) => state.languageChanger.currentLanguage)

    return (
        <div className="main-introduction">
            <div className="main-introduction-left">
                <div className="main-introduction-photo">
                    <Image className="main-introduction-photo-item" src={frederick_snow_1.src} alt="Frederick Go" layout={'fill'} objectFit={'contain'}></Image>
                </div>
                <div className="main-introduction-photo-bg"></div>
            </div>
            <div className="main-introduction-right">
                {currentLanguage == 'english' ? <IntroductionParagraphEnglish></IntroductionParagraphEnglish> : <IntroductionParagraphKorean></IntroductionParagraphKorean>}
            </div>
        </div>
    )  
}

export default Introduction;