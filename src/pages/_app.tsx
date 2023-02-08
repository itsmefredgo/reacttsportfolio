// Default html head information
import Head from 'next/head'
import Document from '<redux>/pages/_document'

// Components in includes imported
import Header from '<redux>/components/includes/Header'
import Footer from '<redux>/components/includes/Footer'

// CSS imports
import styles from '<redux>/styles/Home.module.css'
import '<redux>/styles/globals.css'
import '<redux>/styles/header.css'
import '<redux>/styles/home.css'
import '<redux>/styles/footer.css'
import '<redux>/styles/works.css'

// Dark theme helper imported
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'

// Other imports
import type { AppProps } from 'next/app'
import { store } from '../assets/store/store'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {

    // Dark theme helpers
    const { theme, setTheme } = useTheme()
    const getUserSetPreference = () => {return localStorage.getItem("theme");};
    const storeUserSetPreference = (pref:any) => {localStorage.setItem("theme", pref);};
    const themeToggler = () => {
        storeUserSetPreference(theme === "light" ? "dark" : "light");
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    useEffect(() => {
        const userSetPreference = getUserSetPreference();
        if (userSetPreference) {setTheme(userSetPreference)}
    }, [])
    
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Header themeToggler={themeToggler}></Header>
                <main className={styles.main}>
                    <Component {...pageProps} />
                </main> 
                <Footer></Footer>
            </ThemeProvider>
        </Provider>
    )
}

export default App