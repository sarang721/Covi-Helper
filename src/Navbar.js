import React from 'react'
import './Navbar.css'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {useTranslation} from 'react-i18next';

function Navbar(props) {

    const {t,i18n}=useTranslation();

    const changelang=(lang)=>{
            i18n.changeLanguage(lang);
    }


    return (
        <div className="navbar">
            <div className="heading">
                
                <div className="info">
                <h4>{t("MAHARASHTRA COVID INFO")}</h4>
                
                </div>
                <ul className="listsinnavbar">
                    <button className="hinen" title="Change language" onClick={(e)=>{
                            e.preventDefault();
                            changelang("en");
                    }}>English</button>
                    <button className="hinen" title="Change language" onClick={(e)=>{
                        e.preventDefault();
                        changelang("hin");
                    }}>Hindi</button>
                    <a href=""><li className="logo"><MailOutlineIcon/></li></a>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
