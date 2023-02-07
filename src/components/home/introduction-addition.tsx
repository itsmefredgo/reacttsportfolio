// Photos imported
import frederick_band_1 from '<redux>/assets/images/home/frederick-band-1.jpeg'
import { RootState } from '<redux>/assets/store/store';
import { useSelector } from 'react-redux';

// Required NextJS components imported
import IntroductionEduEnglish from '../bilingual/home/introduction-edu-english';
import IntroductionEduKorean from '../bilingual/home/introduction-edu-korean';

function addition() {
    const currentLanguage:string = useSelector((state: RootState) => state.languageChanger.currentLanguage)
    
    return (
        <div className="main-introduction-addition">
                {currentLanguage == 'english' ? <IntroductionEduEnglish></IntroductionEduEnglish> : <IntroductionEduKorean></IntroductionEduKorean>}
                <div className="main-introduction-addition-photo">
                    <img className="main-introduction-addition-photo-item" src={ frederick_band_1.src } alt="Frederick Go"></img>
                </div>
            </div>
    )  
}

export default addition;