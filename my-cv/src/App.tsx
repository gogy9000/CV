import React, {useState} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MyProjects} from "./myProjects/MyProjects";
import {Contacts} from "./contacts/Сontacts";
import {Footer} from "./footer/Footer";
import {AboutMe} from "./aboutMe/AboutMe";

export type LanguageType = 'ru' | 'en'

function App() {
    const [language, setLanguage] = useState<LanguageType>('en')
    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage}/>
            <Main language={language}/>
            <AboutMe language={language}/>
            {/*<MyProjects language={language}/>*/}
            <Contacts language={language}/>
            <Footer language={language}/>
        </div>
    );
}

export default App;
